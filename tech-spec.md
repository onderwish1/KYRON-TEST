import { motion } from 'framer-motion';
import { FadeInView } from '@/components/FadeInView';
import { 
  AlertCircle, 
  Clock, 
  Bell, 
  Server, 
  Settings, 
  MessageSquare,
  User,
  CheckCircle2,
  Map,
  BellRing,
  Rocket,
  Plus,
  ArrowUp
} from 'lucide-react';

export function IssueTrackerSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-20 h-20 opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-40 right-20 w-24 h-24 opacity-20">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInView className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 mb-4">
            Ship more, break less
          </h2>
          <p className="text-lg text-slate-600 max-w-xl">
            Antimetal helps keep your infrastructure <span className="font-medium text-slate-900">reliable</span>, <span className="font-medium text-slate-900">efficient</span>, and <span className="font-medium text-slate-900">secure</span>.
          </p>
        </FadeInView>

        {/* Issue Tracker Mockup */}
        <FadeInView delay={0.2} direction="right">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-sm">7</span>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-sm text-slate-700">
                  <span className="text-slate-400">‹</span>
                  All issues
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-600">Disk pressure on node worker-5</span>
                <span className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-500">#138</span>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-amber-200 border-2 border-white" />
                  <div className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white" />
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Resolved
                </span>
                <button className="text-slate-400 hover:text-slate-600">
                  <span className="text-lg">↗</span>
                </button>
              </div>
            </div>

            <div className="flex">
              {/* Left Sidebar */}
              <div className="w-14 border-r border-slate-100 py-4 flex flex-col items-center gap-4">
                <button className="p-2 text-slate-400 hover:text-slate-600"><AlertCircle className="w-5 h-5" /></button>
                <button className="p-2 text-slate-900 bg-slate-100 rounded-lg"><MessageSquare className="w-5 h-5" /></button>
                <button className="p-2 text-slate-400 hover:text-slate-600"><Clock className="w-5 h-5" /></button>
                <button className="p-2 text-slate-400 hover:text-slate-600"><Server className="w-5 h-5" /></button>
                <button className="p-2 text-slate-400 hover:text-slate-600"><Settings className="w-5 h-5" /></button>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex">
                {/* Chat Area */}
                <div className="flex-1 p-4 border-r border-slate-100">
                  {/* Tabs */}
                  <div className="flex gap-6 mb-6 text-sm">
                    <button className="flex items-center gap-2 text-slate-900 font-medium pb-2 border-b-2 border-slate-900">
                      <MessageSquare className="w-4 h-4" />
                      Investigation
                    </button>
                    <button className="flex items-center gap-2 text-slate-400 pb-2">
                      <span className="text-xs">📄</span>
                      Report
                    </button>
                    <button className="flex items-center gap-2 text-slate-400 pb-2">
                      <span className="text-xs">🔧</span>
                      Fixes
                    </button>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-2 text-sm text-slate-500"
                    >
                      <User className="w-4 h-4" />
                      Brian joined the investigation
                    </motion.div>

                    {/* Brian's message */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-200 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Brian</div>
                        <div className="bg-slate-100 rounded-lg rounded-tl-none px-4 py-2 text-sm text-slate-700">
                          Okay if I go and fix this?
                        </div>
                      </div>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full self-start"
                      >
                        You
                      </motion.span>
                    </motion.div>

                    {/* Shreyas's message */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-200 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Shreyas</div>
                        <div className="bg-slate-100 rounded-lg rounded-tl-none px-4 py-2 text-sm text-slate-700 max-w-md">
                          Looks safe, just double check that nothing downstream will break.
                        </div>
                      </div>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full self-start"
                      >
                        Brian
                      </motion.span>
                    </motion.div>

                    {/* Reply indicator */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="flex justify-end"
                    >
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        Replied
                      </span>
                    </motion.div>

                    {/* Antimetal AI message */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">✦</span>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Antimetal</div>
                        <div className="bg-slate-100 rounded-lg rounded-tl-none px-4 py-2 text-sm text-slate-700 max-w-md">
                          There are no downstream impacts.
                          <br />
                          The fixes are safe to apply!
                        </div>
                      </div>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="px-2 py-0.5 bg-purple-500 text-white text-xs rounded-full self-start"
                      >
                        Shreyas
                      </motion.span>
                    </motion.div>

                    {/* Steps dropdown */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="flex justify-end"
                    >
                      <button className="text-xs text-slate-500 flex items-center gap-1">
                        4 steps <span className="text-xs">▼</span>
                      </button>
                    </motion.div>

                    {/* Fixed notification */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      className="flex items-center gap-2 text-sm text-slate-700 bg-green-50 rounded-lg px-4 py-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Issued fixed</span>
                      <span className="text-slate-500">in 1 minute 13 seconds</span>
                    </motion.div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-6">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-xs text-slate-600">
                      <Map className="w-3 h-3" />
                      Impact map
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-xs text-slate-600">
                      <BellRing className="w-3 h-3" />
                      Related alerts
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-xs text-slate-600">
                      <Rocket className="w-3 h-3" />
                      Recent deploys
                    </button>
                  </div>

                  {/* Input */}
                  <div className="mt-4 relative">
                    <input 
                      type="text" 
                      placeholder="Ask anything"
                      className="w-full px-4 py-3 bg-slate-50 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-slate-600">
                        <Plus className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 bg-slate-200 rounded-lg text-slate-600">
                        <ArrowUp className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Issue Details */}
                <div className="w-80 p-4 hidden lg:block">
                  <h3 className="text-lg font-medium text-slate-900 mb-3">
                    Disk pressure on node worker-5
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Urgent
                    </span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      5m
                    </span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full flex items-center gap-1">
                      <Bell className="w-3 h-3" />
                      4 alerts
                    </span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full flex items-center gap-1">
                      <Server className="w-3 h-3" />
                      Production
                    </span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full flex items-center gap-1">
                      <Settings className="w-3 h-3" />
                      Service
                    </span>
                    <span className="px-2 py-1 text-slate-400 text-xs">
                      Show all ›
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 mb-2">What's going on</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        At 10:30 UTC, node <code className="bg-slate-100 px-1 rounded">worker-5</code> exceeded its disk usage and is under pressure. The node is at risk of dropping workloads, breaking observability, and causing downstream blind spots.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-900 mb-2">Why it happened</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        The CI job named <code className="bg-slate-100 px-1 rounded">build-artifact-prod</code> ran on the node and wrote a large amount of build files to disk specifically to <code className="bg-slate-100 px-1 rounded">/tmp</code> and <code className="bg-slate-100 px-1 rounded">/var/lib/docker</code>. There was no cleanup step, so the files piled up quickly.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-slate-900 mb-2 flex items-center gap-2">
                        <span className="text-slate-400">📋</span>
                        Findings
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-slate-400 mt-1">•</span>
                          The job wrote to the local disk instead of a separate volume or cloud bucket.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-400 mt-1">•</span>
                          No cleanup job or lifecycle hook on the pod.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-400 mt-1">•</span>
                          Within 10 minutes disk usage jumped from 52% to 92%.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
