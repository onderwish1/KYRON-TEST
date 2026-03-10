import { useScrollPosition } from '@/hooks/useScrollPosition';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Resources', href: '#resources' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Careers', href: '#careers' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="grid grid-cols-2 gap-0.5">
                <div className={`w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-slate-900' : 'bg-white'}`} />
                <div className={`w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-slate-900' : 'bg-white'}`} />
                <div className={`w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-slate-900' : 'bg-white'}`} />
                <div className={`w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-slate-900' : 'bg-white'}`} />
              </div>
              <div className="grid grid-cols-2 gap-0.5 ml-0.5">
                <div className={`w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-slate-900' : 'bg-white'}`} />
                <div className={`w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-slate-900' : 'bg-white'}`} />
                <div className={`w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-slate-900' : 'bg-white'}`} />
                <div className={`w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-slate-900' : 'bg-white'}`} />
              </div>
            </div>
            <span className={`font-semibold text-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Antimetal
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isScrolled
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              Book a demo
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-slate-700 hover:text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium">
              Book a demo
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
