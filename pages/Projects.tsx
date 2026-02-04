import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Combined Cycle Power Plant",
      location: "Thailand",
      category: "Power Gen",
      desc: "Full electrical system design and commissioning for a 500MW CCPP.",
      img: "https://picsum.photos/600/400?random=1"
    },
    {
      id: 2,
      title: "Offshore Platform Maintenance",
      location: "North Sea",
      category: "Maintenance",
      desc: "Annual shutdown maintenance for gas compression turbines.",
      img: "https://picsum.photos/600/400?random=2"
    },
    {
      id: 3,
      title: "Solar Farm Grid Integration",
      location: "Arizona, USA",
      category: "Renewable",
      desc: "Grid stability study and substation construction for 100MW solar farm.",
      img: "https://picsum.photos/600/400?random=3"
    },
    {
      id: 4,
      title: "Steel Mill Modernization",
      location: "Germany",
      category: "Automation",
      desc: "Retrofitting legacy drive systems with modern variable frequency drives (VFD).",
      img: "https://picsum.photos/600/400?random=4"
    },
    {
      id: 5,
      title: "Hospital Backup Systems",
      location: "Singapore",
      category: "Electrical",
      desc: "Installation of redundant diesel generators and ATS for critical care units.",
      img: "https://picsum.photos/600/400?random=5"
    },
    {
      id: 6,
      title: "Hydro Plant Turbine Overhaul",
      location: "Canada",
      category: "Mechanical",
      desc: "Complete refurbishment of Francis turbine runners and guide vanes.",
      img: "https://picsum.photos/600/400?random=6"
    }
  ];

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-extrabold text-corporate-900 mb-4">Our Projects</h1>
        <p className="text-xl text-slate-600 max-w-3xl">
          Discover how we solve complex engineering challenges across the globe.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-industrial-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-corporate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <button className="text-corporate-900 font-semibold text-sm hover:text-industrial-600 transition-colors">
                  View Case Study &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;