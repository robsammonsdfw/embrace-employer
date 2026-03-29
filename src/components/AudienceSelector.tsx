import { motion } from 'motion/react';
import { Building2, Briefcase, Users2, Landmark, HeartPulse, ArrowRight } from 'lucide-react';

const audiences = [
  {
    title: 'Employers',
    description: 'Customizable health solutions that reduce costs and boost employee productivity.',
    icon: Building2,
    color: 'text-brand-teal',
    bg: 'bg-brand-teal/5'
  },
  {
    title: 'Brokers & Consultants',
    description: 'Value-added clinical programs to differentiate your portfolio and delight clients.',
    icon: Briefcase,
    color: 'text-brand-orange',
    bg: 'bg-brand-orange/5'
  },
  {
    title: 'Unions & Taft-Hartley',
    description: 'Member-centric care designed for the unique needs of labor organizations.',
    icon: Users2,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'Payors',
    description: 'Scalable population health management that improves HEDIS scores and member outcomes.',
    icon: Landmark,
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  {
    title: 'Health Systems',
    description: 'Digital health extensions that bridge the gap between clinic visits and daily life.',
    icon: HeartPulse,
    color: 'text-red-600',
    bg: 'bg-red-50'
  }
];

export default function AudienceSelector() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue mb-4">
            Tailored solutions for <span className="text-brand-teal">every partner</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand that one size doesn't fit all. Our platform adapts to your specific organizational goals and member demographics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all flex flex-col">
                <div className={`w-12 h-12 rounded-xl ${audience.bg} ${audience.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <audience.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark-blue mb-3">{audience.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                  {audience.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-brand-dark-blue group-hover:text-brand-teal transition-colors">
                  Learn More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
