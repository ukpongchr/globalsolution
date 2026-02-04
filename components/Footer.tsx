import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-corporate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Global Solutions</h3>
            <p className="text-sm text-slate-400">
              Leading provider of power generation, electrical engineering, and industrial machinery maintenance services worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-industrial-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-industrial-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-industrial-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Power Plant Operations</li>
              <li>Predictive Maintenance</li>
              <li>Electrical Grid Systems</li>
              <li>Mechanical Overhaul</li>
              <li>Automation & Control</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-industrial-500 flex-shrink-0" />
                <span>123 Industrial Park Dr,<br />Suite 400, Houston, TX</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-industrial-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-industrial-500 flex-shrink-0" />
                <span>info@globalsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Global Power Solutions. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;