import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function EmployerHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <span className="text-brand-teal">embrace</span>
              <span className="text-brand-orange">health</span>
              <span className="text-gray-600">.ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="#" className="text-sm font-medium text-brand-dark-blue hover:text-brand-teal transition-colors">Solutions</Link>
            <Link to="#" className="text-sm font-medium text-brand-dark-blue hover:text-brand-teal transition-colors">Program Tracks</Link>
            <Link to="#" className="text-sm font-medium text-brand-dark-blue hover:text-brand-teal transition-colors">For Brokers</Link>
            <Link to="#" className="text-sm font-medium text-brand-dark-blue hover:text-brand-teal transition-colors">Resources</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.embracehealth.ai/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-brand-teal hover:underline"
            >
              Back to Consumer Site
            </a>
            <button className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-orange-200">
              Request a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-dark-blue p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-xl">
          <Link to="#" className="block text-base font-medium text-brand-dark-blue">Solutions</Link>
          <Link to="#" className="block text-base font-medium text-brand-dark-blue">Program Tracks</Link>
          <Link to="#" className="block text-base font-medium text-brand-dark-blue">For Brokers</Link>
          <Link to="#" className="block text-base font-medium text-brand-dark-blue">Resources</Link>
          <hr className="border-gray-100" />
          <a 
            href="https://www.embracehealth.ai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-base font-medium text-brand-teal"
          >
            Back to Consumer Site
          </a>
          <button className="w-full bg-brand-orange text-white px-6 py-3 rounded-full text-base font-semibold">
            Request a Demo
          </button>
        </div>
      )}
    </header>
  );
}
