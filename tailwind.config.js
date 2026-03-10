import { motion } from 'framer-motion';
import { FadeInView } from '@/components/FadeInView';
import { FileText, Wrench, Shield, Check, AlertTriangle } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Find the cause header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeInView>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-1">
                  Find the cause of an issue
                </h3>
                <p className="text-slate-600">
                  with data from alerts, logs, metrics, code, and past incidents.
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors self-start"
            >
              Explore
            </motion.button>
          </div>
        </FadeInView>
      </div>

      {/* Fix and Prevent columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Fix Column */}
          <FadeInView delay={0.1}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="text-2xl font-medium text-slate-900">Fix</h3>
              </div>
              <p className="text-slate-600">
                Get production-ready fixes for every issue, so your team can get back to building.
              </p>
            </div>

            {/* Fix UI Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden"
            >
              {/* PR Header */}
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">style: fix spacing inconsistencies</span>
                  <span className="text-xs text-slate-400">#161</span>
                </div>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full flex items-center gap-1">
                  <span>🔀</span>
                  Merged
                </span>
              </div>

              {/* Code diff */}
              <div className="p-4 bg-slate-50">
                <div className="space-y-2">
                  {/* File header */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="text-red-500">−3</span>
                    <span className="text-green-500">+3</span>
                    <span>src/components/Button.tsx</span>
                  </div>

                  {/* Code lines */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-1 font-mono text-xs"
                  >
                    <div className="flex">
                      <span className="w-8 text-slate-300 text-right pr-2">14</span>
                      <span className="w-8 text-right pr-2"></span>
                      <span className="text-slate-700">  const handleClick = () ={'>'} {'{'}</span>
                    </div>
                    <div className="flex bg-red-50">
                      <span className="w-8 text-slate-300 text-right pr-2">15</span>
                      <span className="w-8 text-right pr-2 text-red-500">−</span>
                      <span className="text-red-700">    onClick();</span>
                    </div>
                    <div className="flex bg-green-50">
                      <span className="w-8 text-slate-300 text-right pr-2">15</span>
                      <span className="w-8 text-right pr-2 text-green-500">+</span>
                      <span className="text-green-700">    onClick?.();</span>
                    </div>
                    <div className="flex">
                      <span className="w-8 text-slate-300 text-right pr-2">16</span>
                      <span className="w-8 text-right pr-2"></span>
                      <span className="text-slate-700">  {'}'};</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-1 font-mono text-xs pt-2"
                  >
                    <div className="flex">
                      <span className="w-8 text-slate-300 text-right pr-2">28</span>
                      <span className="w-8 text-right pr-2"></span>
                      <span className="text-slate-700">  return (</span>
                    </div>
                    <div className="flex bg-red-50">
                      <span className="w-8 text-slate-300 text-right pr-2">29</span>
                      <span className="w-8 text-right pr-2 text-red-500">−</span>
                      <span className="text-red-700">    {'<'}button className={`btn primary`}&gt;</span>
                    </div>
                    <div className="flex bg-green-50">
                      <span className="w-8 text-slate-300 text-right pr-2">29</span>
                      <span className="w-8 text-right pr-2 text-green-500">+</span>
                      <span className="text-green-700">    {'<'}button className={`btn btn--primary`}&gt;</span>
                    </div>
                    <div className="flex">
                      <span className="w-8 text-slate-300 text-right pr-2">30</span>
                      <span className="w-8 text-right pr-2"></span>
                      <span className="text-slate-700">      {'{'}children{'}'}</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Status */}
              <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-center">
                <span className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-purple-600" />
                  </span>
                  Fixes merged
                </span>
              </div>
            </motion.div>
          </FadeInView>

          {/* Prevent Column */}
          <FadeInView delay={0.2}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-2xl font-medium text-slate-900">Prevent</h3>
              </div>
              <p className="text-slate-600">
                Uncover blind spots, inefficiencies, and stop issues, before they become incidents.
              </p>
            </div>

            {/* Prevent UI Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative"
            >
              {/* Floating alert tags */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-8 z-10"
              >
                <span className="px-3 py-1.5 bg-white border border-amber-200 rounded-full text-xs text-amber-700 shadow-sm flex items-center gap-1.5">
                  <AlertTriangle className="w-3 h-3" />
                  Orphaned Resources
                </span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-8 -right-4 z-10"
              >
                <span className="px-3 py-1.5 bg-white border border-amber-200 rounded-full text-xs text-amber-700 shadow-sm flex items-center gap-1.5">
                  <AlertTriangle className="w-3 h-3" />
                  Stale Lock
                </span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-16 right-20 z-10"
              >
                <span className="px-3 py-1.5 bg-white border border-amber-200 rounded-full text-xs text-amber-700 shadow-sm flex items-center gap-1.5">
                  <AlertTriangle className="w-3 h-3" />
                  CORS Error
                </span>
              </motion.div>

              {/* Main card */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden pt-12">
                {/* Browser chrome */}
                <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-slate-100 rounded-md px-3 py-1 text-xs text-slate-500 text-center">
                      🔒 antimetal.com
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">Play</span>
                </div>

                {/* Content */}
                <div className="p-8 flex items-center justify-center min-h-[200px]">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(59, 130, 246, 0)',
                        '0 0 0 20px rgba(59, 130, 246, 0.1)',
                        '0 0 0 0 rgba(59, 130, 246, 0)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <Shield className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
