import { motion } from 'framer-motion';
import { FadeInView } from '@/components/FadeInView';
import { Sparkles } from 'lucide-react';

// Integration icons as simple colored circles with letters/text
const integrations = [
  { name: 'GCP', color: 'bg-red-500', text: 'G', delay: 0 },
  { name: 'Sentry', color: 'bg-red-400', text: 'S', delay: 0.1 },
  { name: 'Datadog', color: 'bg-purple-500', text: 'D', delay: 0.2 },
  { name: 'Slack', color: 'bg-green-500', text: 'S', delay: 0.3 },
  { name: 'Wiz', color: 'bg-blue-500', text: 'W', delay: 0.4 },
  { name: 'GitHub', color: 'bg-slate-800', text: 'G', delay: 0.5 },
  { name: 'Vercel', color: 'bg-slate-900', text: '▲', delay: 0.6 },
  { name: 'Linear', color: 'bg-amber-500', text: 'L', delay: 0.7 },
  { name: 'AWS', color: 'bg-orange-500', text: 'A', delay: 0.8 },
  { name: 'Azure', color: 'bg-blue-600', text: 'A', delay: 0.9 },
];

function IntegrationIcon({ 
  integration, 
  index 
}: { 
  integration: typeof integrations[0]; 
  index: number;
}) {
  // Calculate position in a scattered orbital pattern
  const angle = (index / integrations.length) * Math.PI * 2;
  const radiusX = 200 + (index % 3) * 40;
  const radiusY = 120 + (index % 2) * 40;
  const x = Math.cos(angle) * radiusX;
  const y = Math.sin(angle) * radiusY;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: integration.delay, duration: 0.4, type: 'spring' }}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
      className="absolute"
    >
      <motion.div
        animate={{
          y: [0, -10 - (index % 3) * 3, 0],
        }}
        transition={{
          duration: 4 + (index % 2) * 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.2,
        }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center cursor-pointer"
      >
        <span className={`w-8 h-8 ${integration.color} rounded-lg flex items-center justify-center text-white text-sm font-bold`}>
          {integration.text}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function IntegrationsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <FadeInView>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-slate-700" />
              <span className="text-sm font-medium text-slate-600">Integrations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 mb-4">
              Connect your stack
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-md">
              Monitoring, code, observability, cloud, CI/CD systems, messaging, and even homegrown tooling.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-slate-900 text-white rounded-full font-medium text-sm hover:bg-slate-800 transition-colors mb-6"
            >
              Get started
            </motion.button>

            {/* Connected status */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <span className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-xs">▲</span>
              </span>
              <span>Connected Cloudflare account</span>
            </motion.div>
          </FadeInView>

          {/* Right - Orbital icons */}
          <FadeInView delay={0.2} direction="right">
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Orbital paths (decorative) */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3].map((ring) => (
                  <div
                    key={ring}
                    className="absolute border border-slate-200 rounded-full"
                    style={{
                      width: `${ring * 200}px`,
                      height: `${ring * 120}px`,
                    }}
                  />
                ))}
              </div>

              {/* Center element */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 0 0 rgba(59, 130, 246, 0)',
                    '0 0 0 15px rgba(59, 130, 246, 0.1)',
                    '0 0 0 0 rgba(59, 130, 246, 0)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center z-10"
              >
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-slate-800" />
                  ))}
                </div>
              </motion.div>

              {/* Integration icons */}
              {integrations.map((integration, index) => (
                <IntegrationIcon 
                  key={integration.name} 
                  integration={integration} 
                  index={index}
                />
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
