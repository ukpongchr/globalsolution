import React, { useState } from 'react';
import { Zap, Activity, Settings, CheckCircle2, ArrowRight, ChevronLeft, Building2, Briefcase, Calendar, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Quote: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    serviceType: '',
    urgency: '',
    description: '',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleSelection = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    // Basic validation
    if (step === 1 && !formData.serviceType) return;
    if (step === 2 && !formData.urgency) return;
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl w-full text-center border border-slate-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-corporate-900 mb-4">Request Received Successfully!</h2>
          <p className="text-lg text-slate-600 mb-8">
            Thank you, {formData.firstName}. Our engineering team has received your details regarding the <span className="font-semibold text-corporate-900">{formData.serviceType}</span> project.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-corporate-900 mb-2 flex items-center">
              <Info className="w-5 h-5 text-industrial-500 mr-2" />
              What happens next?
            </h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-1">
              <li>A lead engineer will review your technical requirements.</li>
              <li>We will contact you at <strong>{formData.email}</strong> within 24 hours.</li>
              <li>An initial site assessment or virtual consultation will be scheduled.</li>
            </ul>
          </div>
          <Link to="/">
            <Button size="lg">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-slate-500 hover:text-corporate-900 mb-6 transition-colors">
            <ChevronLeft size={16} className="mr-1" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-corporate-900 mb-6">Get Your Engineering Solution</h1>
          
          <div className="relative">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-200">
              <div 
                style={{ width: `${(step / 3) * 100}%` }} 
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-industrial-500 transition-all duration-500 ease-out"
              ></div>
            </div>
            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className={`${step >= 1 ? 'text-corporate-900' : ''}`}>1. Service Type</span>
              <span className={`${step >= 2 ? 'text-corporate-900' : ''}`}>2. Project Details</span>
              <span className={`${step >= 3 ? 'text-corporate-900' : ''}`}>3. Contact Info</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          
          {/* STEP 1: Service Selection */}
          {step === 1 && (
            <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-corporate-900 mb-6">What type of service do you require?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { id: 'Power Generation', icon: <Zap size={32} />, desc: 'Turbines, Generators, Solar' },
                  { id: 'Electrical Engineering', icon: <Activity size={32} />, desc: 'Grid Stability, High Voltage' },
                  { id: 'Machinery Maintenance', icon: <Settings size={32} />, desc: 'Vibration Analysis, Repair' },
                  { id: 'General Consulting', icon: <Briefcase size={32} />, desc: 'Audits, Feasibility Studies' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelection('serviceType', item.id)}
                    className={`flex items-start p-6 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md ${
                      formData.serviceType === item.id 
                        ? 'border-industrial-500 bg-orange-50/30 ring-1 ring-industrial-500' 
                        : 'border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className={`p-3 rounded-lg mr-4 ${formData.serviceType === item.id ? 'bg-industrial-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-1 ${formData.serviceType === item.id ? 'text-corporate-900' : 'text-slate-700'}`}>{item.id}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <Button 
                  onClick={nextStep} 
                  disabled={!formData.serviceType}
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Continue <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: Project Details */}
          {step === 2 && (
            <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-corporate-900 mb-6">Tell us about your project</h2>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-3">Project Urgency</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Emergency (24h)', 'Urgent (< 1 Month)', 'Planned (> 1 Month)'].map((opt) => (
                     <button
                        key={opt}
                        type="button"
                        onClick={() => handleSelection('urgency', opt)}
                        className={`py-3 px-4 rounded-lg border text-sm font-semibold transition-all ${
                          formData.urgency === opt
                           ? 'bg-corporate-900 text-white border-corporate-900'
                           : 'bg-white text-slate-600 border-slate-300 hover:border-slate-400'
                        }`}
                     >
                       {opt}
                     </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Description / Technical Requirements
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-industrial-500 focus:ring-industrial-500 p-3 border resize-none"
                  placeholder="Please describe the equipment, issue, or scope of work..."
                ></textarea>
              </div>

              <div className="flex justify-between items-center">
                <button onClick={prevStep} className="text-slate-500 font-medium hover:text-corporate-900">
                  Back
                </button>
                <Button 
                  onClick={nextStep} 
                  disabled={!formData.urgency}
                  size="lg"
                >
                  Next Step <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact Info */}
          {step === 3 && (
            <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-corporate-900 mb-6">Final Step: Contact Information</h2>
              <p className="text-slate-600 mb-8">Where should we send the proposal?</p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                    <input 
                      required
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-industrial-500 focus:ring-industrial-500 p-2.5 border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                    <input 
                      required
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-industrial-500 focus:ring-industrial-500 p-2.5 border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Work Email *</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-industrial-500 focus:ring-industrial-500 p-2.5 border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-industrial-500 focus:ring-industrial-500 p-2.5 border"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company / Organization</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 shadow-sm focus:border-industrial-500 focus:ring-industrial-500 p-2.5 pl-10 border"
                      placeholder="e.g. Acme Industries"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <button type="button" onClick={prevStep} className="text-slate-500 font-medium hover:text-corporate-900">
                    Back
                  </button>
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="min-w-[150px]"
                  >
                    {isSubmitting ? 'Sending...' : 'Request Quote'}
                  </Button>
                </div>
              </form>
            </div>
          )}

        </div>
        
        {/* Trust Elements below form */}
        <div className="mt-8 flex justify-center space-x-8 text-slate-500 text-sm">
           <div className="flex items-center"><CheckCircle2 size={16} className="mr-2 text-green-500" /> Secure SSL Data Transfer</div>
           <div className="flex items-center"><CheckCircle2 size={16} className="mr-2 text-green-500" /> NDA Compliant</div>
        </div>
      </div>
    </div>
  );
};

export default Quote;