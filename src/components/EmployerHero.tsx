import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Activity, TrendingUp } from 'lucide-react';

export default function EmployerHero() {
  return (
    <section className="pt-32 pb-20 bg-[#F9F7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-wider mb-6">
              <Activity size={14} />
              <span>B2B Telehealth Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-blue leading-tight mb-6">
              Drive healthier participation with one <span className="text-brand-teal">connected platform</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Empower your workforce with personalized care tracks that deliver measurable outcomes. From metabolic health to mental well-being, we bridge the gap between clinical excellence and employee engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-orange-200 group">
                Request a Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border-2 border-brand-dark-blue/10 hover:border-brand-teal text-brand-dark-blue px-8 py-4 rounded-full text-lg font-bold transition-all">
                View Solutions
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-teal" />
                <span>Clinical Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-teal" />
                <span>ROI Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-teal" />
                <span>Seamless Integration</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Mock Browser UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-grow mx-4 bg-white border border-gray-200 rounded py-1 px-3 text-[10px] text-gray-400 truncate">
                  admin.embracehealth.ai/dashboard/population-health
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-gray-50/50">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <div className="text-gray-400 text-[10px] uppercase font-bold mb-1">Population Activation</div>
                    <div className="text-3xl font-bold text-brand-teal">78%</div>
                    <div className="flex items-center gap-1 text-green-500 text-[10px] mt-1 font-medium">
                      <TrendingUp size={10} />
                      <span>+12% vs last quarter</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <div className="text-gray-400 text-[10px] uppercase font-bold mb-1">Active Members</div>
                    <div className="text-3xl font-bold text-brand-dark-blue">12,480</div>
                    <div className="text-gray-400 text-[10px] mt-1">Across 4 program tracks</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs font-bold text-brand-dark-blue">Engagement by Track</div>
                    <div className="text-[10px] text-brand-teal font-medium">View Detailed Report</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Metabolic Health', value: 85, color: 'bg-brand-teal' },
                      { label: 'Sleep & Recovery', value: 64, color: 'bg-brand-orange' },
                      { label: 'Mental Well-being', value: 92, color: 'bg-blue-500' }
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="font-medium text-gray-600">{item.label}</span>
                          <span className="font-bold">{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                          <div className={`${item.color} h-1.5 rounded-full`} style={{ width: `${item.value}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 bg-brand-dark-blue text-white p-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-brand-teal" />
                      <div className="text-[10px] font-medium">New Enrollments</div>
                    </div>
                    <div className="text-sm font-bold">+240</div>
                  </div>
                  <div className="flex-1 bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-between">
                    <div className="text-[10px] font-medium text-gray-500">Avg. ROI</div>
                    <div className="text-sm font-bold text-brand-dark-blue">3.4x</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
