import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      {/* Header */}
      <div className="bg-slate-50 py-16 mb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-corporate-900 mb-4">About Global Solutions</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Engineering excellence delivered through innovation, safety, and reliability since 1998.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-corporate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              To empower industries worldwide with sustainable, efficient, and cutting-edge power and engineering solutions. We strive to reduce downtime, enhance safety, and optimize performance through rigorous engineering standards.
            </p>
            <ul className="space-y-4">
              {[
                'Commitment to Safety & Compliance',
                'Innovation in Sustainable Energy',
                'Client-Centric Problem Solving',
                'Global Operational Excellence'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-corporate-800 font-medium">
                  <Target className="mr-3 text-industrial-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/800/600?random=1" 
              alt="Engineering Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-corporate-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-slate-100 rounded-xl bg-white shadow-sm">
              <div className="w-16 h-16 mx-auto bg-blue-50 text-corporate-900 rounded-full flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Excellence</h3>
              <p className="text-slate-600">ISO 9001 certified operations with a team of licensed Professional Engineers (PE).</p>
            </div>
            <div className="text-center p-8 border border-slate-100 rounded-xl bg-white shadow-sm">
              <div className="w-16 h-16 mx-auto bg-amber-50 text-industrial-600 rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-slate-600">Over 150 dedicated specialists in electrical, mechanical, and civil engineering disciplines.</p>
            </div>
            <div className="text-center p-8 border border-slate-100 rounded-xl bg-white shadow-sm">
              <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-slate-600">Successfully delivered projects in over 30 countries across 5 continents.</p>
            </div>
          </div>
        </div>

        {/* Team Section (Placeholder) */}
        <div>
           <h2 className="text-3xl font-bold text-corporate-900 mb-12 text-center">Leadership Team</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
                 <img src={`https://picsum.photos/300/300?random=${i+10}`} className="w-full h-64 object-cover" alt="Team Member" />
                 <div className="p-6">
                   <h3 className="font-bold text-lg text-corporate-900">Engineer Name</h3>
                   <p className="text-industrial-600 text-sm font-medium mb-2">Senior Consultant</p>
                   <p className="text-slate-500 text-sm">20+ years in power generation systems.</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;