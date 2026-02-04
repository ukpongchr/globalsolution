import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, BatteryCharging, ArrowRight, Activity, Cpu, CheckCircle2, Factory, Clock, Shield, Star } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center bg-corporate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img
            src="https://picsum.photos/1920/1080?grayscale&blur=2"
            alt="Industrial Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-900 via-corporate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-industrial-500/20 border border-industrial-500/50 px-3 py-1 text-sm font-semibold text-industrial-500 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-industrial-500 animate-pulse"></span>
              ISO 9001:2015 Certified Engineering
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Engineering <br/>
              <span className="text-industrial-500">Resilience.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Global Power Solutions delivers end-to-end electrical and mechanical engineering services. We ensure your critical infrastructure operates with maximum efficiency, safety, and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/quote">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto font-bold shadow-lg shadow-industrial-500/20">
                  Request a Consultation
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-slate-600 hover:bg-white/10 hover:text-white hover:border-white">
                  View Our Work
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-slate-400 border-t border-slate-700/50 pt-6">
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="text-industrial-500 h-5 w-5" />
                 <span>24/7 Emergency Response</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="text-industrial-500 h-5 w-5" />
                 <span>Turnkey Implementation</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="text-industrial-500 h-5 w-5" />
                 <span>Global Compliance</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Intro / Value Prop - NEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-industrial-600 font-bold uppercase tracking-wider mb-2 text-sm">Who We Are</h2>
                <h3 className="text-4xl font-extrabold text-corporate-900 mb-6 leading-tight">
                  We Solve The Industry's Toughest Challenges
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Downtime is expensive. Inefficiency is wasteful. At Global Power Solutions, we combine decades of field experience with cutting-edge diagnostics to keep your plant running. 
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  From <strong>high-voltage substation commissioning</strong> to <strong>predictive turbine maintenance</strong>, our multidisciplinary teams are ready to deploy worldwide.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: "Safety First", desc: "Zero-harm safety culture with strict adherence to OSHA & ISO standards." },
                    { title: "Rapid Mobilization", desc: "Teams available to deploy within 24 hours for critical breakdowns." },
                    { title: "Data-Driven Decisions", desc: "We use AI and advanced telemetry for predictive maintenance." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-industrial-50 text-industrial-600 flex items-center justify-center font-bold">
                          {i + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-corporate-900">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-4 bg-industrial-500/10 rounded-2xl transform rotate-3"></div>
                 <img 
                   src="https://picsum.photos/800/600?random=10" 
                   alt="Engineers discussing blueprints" 
                   className="relative rounded-lg shadow-2xl w-full object-cover h-[500px]"
                 />
                 <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl border border-slate-100 max-w-xs hidden md:block">
                    <div className="flex items-center gap-4 mb-3">
                       <div className="p-3 bg-green-100 text-green-600 rounded-full">
                         <Activity size={24} />
                       </div>
                       <div>
                         <div className="text-2xl font-bold text-corporate-900">99.8%</div>
                         <div className="text-xs text-slate-500 uppercase">Uptime Guarantee</div>
                       </div>
                    </div>
                    <p className="text-sm text-slate-600">For clients on our premium maintenance contracts.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-corporate-900 mb-4">Comprehensive Industrial Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Single-source responsibility for your most complex engineering needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BatteryCharging size={40} strokeWidth={1.5} />,
                title: 'Power Generation',
                desc: 'Turnkey solutions for thermal, hydro, and renewable power plants. We handle installation, commissioning, and lifecycle management.',
                features: ['Turbine Overhaul', 'Generator Rewinding', 'Control Systems']
              },
              {
                icon: <Cpu size={40} strokeWidth={1.5} />,
                title: 'Electrical Engineering',
                desc: 'Advanced grid stability analysis and high-voltage system design ensuring your facility meets all regulatory and operational standards.',
                features: ['Substation Design', 'Relay Protection', 'Harmonic Analysis']
              },
              {
                icon: <Settings size={40} strokeWidth={1.5} />,
                title: 'Machinery Maintenance',
                desc: 'Predictive maintenance programs utilizing AI-driven vibration and thermal analysis to prevent catastrophic failures before they happen.',
                features: ['Vibration Analysis', 'Laser Alignment', 'Oil Analysis']
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-200 flex flex-col">
                <div className="p-8 flex-1">
                  <div className="w-16 h-16 bg-corporate-50 text-industrial-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-industrial-500 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-corporate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {feature.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-industrial-500 mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100">
                  <Link to="/services" className="flex items-center justify-between text-corporate-900 font-semibold text-sm hover:text-industrial-600 transition-colors">
                    Explore Solutions <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="primary" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Visual Update */}
      <section className="py-20 bg-corporate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute transform -rotate-45 -left-40 -top-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute transform rotate-45 -right-40 -bottom-40 w-96 h-96 bg-industrial-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '25+', label: 'Years Experience', icon: <Clock className="text-industrial-500 mb-4 h-8 w-8" /> },
              { num: '500+', label: 'Projects Delivered', icon: <Factory className="text-industrial-500 mb-4 h-8 w-8" /> },
              { num: '100%', label: 'Safety Record', icon: <Shield className="text-industrial-500 mb-4 h-8 w-8" /> },
              { num: '50+', label: 'Countries Served', icon: <Activity className="text-industrial-500 mb-4 h-8 w-8" /> },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-white mb-2">{stat.num}</div>
                <div className="text-sm text-slate-300 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - NEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-bold text-corporate-900 mb-2">Recent Projects</h2>
               <p className="text-slate-600">See how we deliver value across the globe.</p>
             </div>
             <Link to="/projects" className="hidden md:flex items-center text-industrial-600 font-semibold hover:text-industrial-700">
                View All Case Studies <ArrowRight size={20} className="ml-2" />
             </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               {
                 img: "https://picsum.photos/600/400?random=1",
                 title: "500MW CCPP Commissioning",
                 loc: "Thailand",
                 tag: "Power Gen"
               },
               {
                 img: "https://picsum.photos/600/400?random=2",
                 title: "Offshore Platform Maintenance",
                 loc: "North Sea",
                 tag: "Maintenance"
               },
               {
                 img: "https://picsum.photos/600/400?random=3",
                 title: "Solar Grid Integration",
                 loc: "USA",
                 tag: "Renewable"
               }
             ].map((proj, i) => (
               <div key={i} className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer">
                 <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-industrial-400 text-xs font-bold uppercase tracking-wider mb-2">{proj.tag}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                    <p className="text-slate-300 text-sm">{proj.loc}</p>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="mt-8 text-center md:hidden">
              <Link to="/projects" className="text-industrial-600 font-semibold">View All Projects &rarr;</Link>
           </div>
        </div>
      </section>

      {/* Testimonials - NEW */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-corporate-900 mb-12">Trusted by Industry Leaders</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Global Solutions reduced our downtime by 40% within the first year of their predictive maintenance contract.",
                  author: "James Wilson",
                  role: "Plant Manager, PetroChem Inc."
                },
                {
                  quote: "Their engineering team's expertise during our turbine overhaul was unmatched. Delivered on time and under budget.",
                  author: "Sarah Chen",
                  role: "Director of Operations, EnergyOne"
                },
                {
                  quote: "We rely on their electrical engineering insights for all our grid stability needs. A true partner in every sense.",
                  author: "Miguel Rodriguez",
                  role: "Chief Engineer, SolarGrid Systems"
                }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-center mb-6 text-industrial-500">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-corporate-900">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-corporate-800 rounded-3xl p-10 md:p-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             
             <div className="relative z-10 mb-10 md:mb-0 max-w-2xl">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to optimize your operations?</h2>
               <p className="text-slate-300 text-lg mb-8">
                 Don't wait for a failure. Schedule a consultation with our engineering experts today and discover how we can improve your plant's efficiency.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/quote">
                      <Button size="lg" variant="secondary" className="w-full sm:w-auto font-bold">
                        Get a Free Quote
                      </Button>
                  </Link>
                  <button 
                      onClick={() => document.querySelector<HTMLButtonElement>('button[aria-label="Chat"]')?.click()}
                      className="inline-flex items-center justify-center px-8 py-3 border border-slate-500 bg-white/5 text-white rounded-md hover:bg-white hover:text-corporate-900 transition-colors font-medium backdrop-blur-sm"
                  >
                    Chat with AI Engineer
                  </button>
               </div>
             </div>

             <div className="relative z-10 hidden lg:block">
                <div className="bg-white p-6 rounded-xl shadow-xl transform rotate-3 max-w-xs">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                        <img src="https://picsum.photos/100/100?random=50" alt="Agent" />
                      </div>
                      <div>
                        <div className="font-bold text-corporate-900">Need Help?</div>
                        <div className="text-xs text-slate-500">Talk to our experts</div>
                      </div>
                   </div>
                   <p className="text-sm text-slate-600 mb-4">"Hi! I can help you find the right maintenance plan for your facility."</p>
                   <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-green-500"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;