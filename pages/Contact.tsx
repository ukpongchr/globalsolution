import React from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-corporate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-300">Get in touch with our engineering team for inquiries and support.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-corporate-900 mb-6">Headquarters</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 mr-4">
                  <MapPin className="text-industrial-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-corporate-900">Address</h3>
                  <p className="text-slate-600 mt-1">
                    Global Power Solutions Ltd.<br />
                    123 Industrial Park Drive, Suite 400<br />
                    Houston, TX 77002, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 mr-4">
                  <Phone className="text-industrial-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-corporate-900">Phone</h3>
                  <p className="text-slate-600 mt-1">
                    Main: +1 (555) 123-4567<br />
                    Support: +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 mr-4">
                  <Mail className="text-industrial-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-corporate-900">Email</h3>
                  <p className="text-slate-600 mt-1">
                    Sales: sales@globalsolutions.com<br />
                    Support: support@globalsolutions.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 mr-4">
                  <Clock className="text-industrial-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-corporate-900">Working Hours</h3>
                  <p className="text-slate-600 mt-1">
                    Mon - Fri: 8:00 AM - 6:00 PM (CST)<br />
                    24/7 Emergency Support for Contract Clients
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
               <h4 className="font-bold text-corporate-900 mb-2">Need Immediate Technical Assistance?</h4>
               <p className="text-sm text-slate-600 mb-4">
                 Use the AI Chatbot in the bottom right corner for instant answers to technical queries or to troubleshoot basic issues.
               </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-corporate-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full rounded-md border-slate-300 shadow-sm focus:border-corporate-900 focus:ring-corporate-900 p-2.5 border" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full rounded-md border-slate-300 shadow-sm focus:border-corporate-900 focus:ring-corporate-900 p-2.5 border" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full rounded-md border-slate-300 shadow-sm focus:border-corporate-900 focus:ring-corporate-900 p-2.5 border" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <select id="subject" className="w-full rounded-md border-slate-300 shadow-sm focus:border-corporate-900 focus:ring-corporate-900 p-2.5 border">
                  <option>General Inquiry</option>
                  <option>Request for Quote</option>
                  <option>Technical Support</option>
                  <option>Careers</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full rounded-md border-slate-300 shadow-sm focus:border-corporate-900 focus:ring-corporate-900 p-2.5 border" placeholder="How can we help you?"></textarea>
              </div>

              <Button className="w-full" size="lg">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;