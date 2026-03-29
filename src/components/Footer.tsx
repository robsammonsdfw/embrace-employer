import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#002534] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold flex items-center gap-1">
              <span className="text-brand-teal">embrace</span>
              <span>health.ai</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              The connected platform for population health. We combine clinical excellence with human-centric design to drive healthier participation across your organization.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Twitter size={18} />
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Facebook size={18} />
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-brand-teal transition-colors">For Employers</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">For Brokers & Consultants</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">For Unions</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">For Payors</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">For Health Systems</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-brand-teal transition-colors">Case Studies</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">Resource Library</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">Blog & Insights</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">Webinars</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors flex items-center gap-1">
                Help Center <ArrowUpRight size={14} />
              </Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-brand-teal transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">HIPAA Compliance</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">Accessibility</Link></li>
              <li><Link to="#" className="hover:text-brand-teal transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © 2026 Embrace Health AI. All rights reserved.
          </p>
          
          {/* LegitScript Disclaimer */}
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <div className="text-[10px] text-gray-400 max-w-[200px] leading-tight">
              LegitScript Certified: This application meets the standards for healthcare services and telehealth.
            </div>
            <img 
              src="/legitscript-certified.png" 
              alt="LegitScript Certified" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
