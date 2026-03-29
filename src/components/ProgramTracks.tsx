import { motion } from 'motion/react';
import { Zap, Moon, Dumbbell, Brain, Check } from 'lucide-react';

const tracks = [
  {
    title: 'Metabolic Health & GLP-1 Support',
    description: 'Comprehensive weight management combining clinical oversight with lifestyle coaching for sustainable results.',
    icon: Zap,
    features: ['GLP-1 Companion Program', 'Nutritional Counseling', 'Biometric Tracking'],
    color: 'border-brand-teal'
  },
  {
    title: 'Sleep Health & Recovery',
    description: 'Evidence-based sleep optimization programs to improve cognitive function and reduce workplace fatigue.',
    icon: Moon,
    features: ['CBT-I Based Protocols', 'Sleep Hygiene Coaching', 'Recovery Monitoring'],
    color: 'border-brand-orange'
  },
  {
    title: 'MSK & Movement',
    description: 'Personalized musculoskeletal care and physical therapy tracks to reduce pain and prevent surgery.',
    icon: Dumbbell,
    features: ['Virtual PT Consults', 'Guided Exercise Plans', 'Ergonomic Assessments'],
    color: 'border-blue-500'
  },
  {
    title: 'Behavior Change & Mental Health',
    description: 'Holistic support for stress management, resilience, and long-term behavioral health improvements.',
    icon: Brain,
    features: ['1:1 Coaching Sessions', 'Resilience Workshops', 'Crisis Support Access'],
    color: 'border-purple-500'
  }
];

export default function ProgramTracks() {
  return (
    <section className="py-24 bg-[#002534] text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00B6A0_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized <span className="text-brand-teal">Program Tracks</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Our clinical pathways are designed by experts to address the most prevalent and costly health challenges facing modern workforces.
            </p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full text-sm font-bold transition-all">
            Explore All Tracks
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm border-l-4 ${track.color} p-8 rounded-r-2xl hover:bg-white/10 transition-all group`}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all">
                  <track.icon size={28} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3">{track.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {track.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {track.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check size={14} className="text-brand-teal" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-brand-teal/10 rounded-3xl border border-brand-teal/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-brand-teal flex items-center justify-center text-white shadow-lg shadow-brand-teal/20">
              <Zap size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Ready to see the impact?</h4>
              <p className="text-gray-400 text-sm">Join 500+ organizations driving better health outcomes.</p>
            </div>
          </div>
          <button className="w-full md:w-auto bg-brand-orange hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-orange-200">
            Get a Custom ROI Analysis
          </button>
        </div>
      </div>
    </section>
  );
}
