import React from 'react';
import { Zap, Wrench, BarChart3, Activity, Battery, PenTool } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Power Generation Solutions",
      description: "Comprehensive services for thermal, hydro, and renewable energy plants.",
      items: [
        { icon: <Zap />, name: "Turbine Installation & Overhaul", desc: "Complete lifecycle support for gas and steam turbines." },
        { icon: <Battery />, name: "Backup Power Systems", desc: "Industrial UPS and diesel generator integration." },
        { icon: <BarChart3 />, name: "Plant Efficiency Audits", desc: "Thermodynamic analysis to optimize fuel consumption." }
      ]
    },
    {
      title: "Electrical Engineering",
      description: "High-voltage design, grid analysis, and distribution safety.",
      items: [
        { icon: <Activity />, name: "Grid Stability Analysis", desc: "Harmonic analysis and load flow studies." },
        { icon: <Zap />, name: "Substation Design", desc: "Turnkey AIS and GIS substation engineering up to 500kV." },
        { icon: <Wrench />, name: "Switchgear Maintenance", desc: "Testing, retrofitting, and modernization of switchgear." }
      ]
    },
    {
      title: "Machinery Maintenance",
      description: "Keep your heavy industry moving with our expert maintenance teams.",
      items: [
        { icon: <PenTool />, name: "Vibration Analysis", desc: "Early fault detection for rotating machinery." },
        { icon: <Wrench />, name: "Laser Alignment", desc: "Precision alignment for shafts and couplings." },
        { icon: <Activity />, name: "Thermal Imaging", desc: "Non-destructive testing for electrical and mechanical hotspots." }
      ]
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-corporate-900 py-20 text-white">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Technical Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We provide the expertise and manpower to solve complex industrial challenges.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="space-y-16">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-8 border-b border-slate-100 bg-slate-50">
                 <h2 className="text-2xl font-bold text-corporate-900">{category.title}</h2>
                 <p className="text-slate-600 mt-2">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {category.items.map((item, i) => (
                  <div key={i} className="p-8 hover:bg-blue-50/30 transition-colors">
                    <div className="w-12 h-12 bg-corporate-100 text-corporate-900 rounded-lg flex items-center justify-center mb-4">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <h3 className="text-lg font-bold text-corporate-900 mb-2">{item.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;