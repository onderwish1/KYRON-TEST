import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  originalX: number;
  originalY: number;
  originalZ: number;
}

export function ParticleSphere({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rotationRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate particles on sphere surface using Fibonacci sphere
    const particleCount = 400;
    const particles: Particle[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < particleCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
      
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);

      particles.push({
        x, y, z,
        originalX: x, originalY: y, originalZ: z
      });
    }

    particlesRef.current = particles;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.35;

      ctx.clearRect(0, 0, rect.width, rect.height);

      rotationRef.current += 0.002;
      const rotX = rotationRef.current;
      const rotY = rotationRef.current * 0.5;

      // Transform and project particles
      const projectedParticles = particlesRef.current.map((p) => {
        // Rotate around Y axis
        let x = p.originalX * Math.cos(rotY) - p.originalZ * Math.sin(rotY);
        let z = p.originalX * Math.sin(rotY) + p.originalZ * Math.cos(rotY);
        let y = p.originalY;

        // Rotate around X axis
        const newY = y * Math.cos(rotX) - z * Math.sin(rotX);
        z = y * Math.sin(rotX) + z * Math.cos(rotX);
        y = newY;

        // Project to 2D
        const scale = 800 / (800 + z * 200);
        const projX = centerX + x * radius * scale;
        const projY = centerY + y * radius * scale;

        return { x: projX, y: projY, z, scale };
      });

      // Sort by z for proper depth rendering
      projectedParticles.sort((a, b) => b.z - a.z);

      // Draw connection lines for nearby particles
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.08)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];
        if (p1.z < -0.3) continue; // Skip back particles for lines

        let connections = 0;
        for (let j = i + 1; j < projectedParticles.length && connections < 3; j++) {
          const p2 = projectedParticles[j];
          if (p2.z < -0.3) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < radius * 0.25) {
            const opacity = (1 - dist / (radius * 0.25)) * 0.15 * (1 + p1.z) * (1 + p2.z) / 4;
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            connections++;
          }
        }
      }

      // Draw particles
      projectedParticles.forEach((p) => {
        const alpha = (1 + p.z) / 2 * 0.8 + 0.2;
        const size = (1 + p.z) / 2 * 2 + 0.5;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 255, ${alpha})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.9 }}
    />
  );
}
