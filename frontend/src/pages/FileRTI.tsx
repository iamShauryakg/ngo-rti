import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, User, Building2, Info, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

const FileRTI = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    department: '',
    subject: '',
    details: '',
    mode: 'online'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-green-100"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-green-600" size={40} />
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Application Submitted!</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you, <span className="font-bold text-gray-900">{formData.fullName}</span>. Your RTI application draft has been generated. Our team will review it and get back to you within 24-48 hours with the next steps for official submission.
          </p>
          <div className="bg-gray-50 p-6 rounded-2xl text-left mb-8">
            <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Reference ID: #RTI-2026-{(Math.random() * 10000).toFixed(0)}</h3>
            <p className="text-xs text-gray-500">A copy of this draft has been sent to {formData.email}.</p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-700 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-all"
          >
            File Another RTI
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <section className="bg-blue-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">File an <span className="text-orange-400">RTI</span></h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Fill out the form below to draft your RTI application. Our experts will help you refine and submit it to the correct department.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex justify-between items-center">
            <div className="flex space-x-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 w-12 rounded-full transition-all duration-300 ${step >= s ? 'bg-blue-600' : 'bg-gray-200'}`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Step {step} of 3</span>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 mb-8">
                  <User className="text-blue-600" size={24} />
                  <h2 className="text-2xl font-black text-gray-900 tracking-tight">Personal Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="yourname@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <div className="flex">
                      <span className="bg-gray-100 border border-r-0 border-gray-200 px-4 py-3 rounded-l-xl text-gray-500 font-medium">+91</span>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className="w-full px-4 py-3 rounded-r-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Mode of Filing</label>
                    <select
                      name="mode"
                      value={formData.mode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                    >
                      <option value="online">Online Submission</option>
                      <option value="offline">Offline (By Post)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Residential Address</label>
                  <textarea
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Enter your complete postal address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="flex justify-end pt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-blue-700 text-white px-10 py-3 rounded-full font-bold hover:bg-blue-800 transition-all flex items-center"
                  >
                    Next Step <Send className="ml-2" size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 mb-8">
                  <Building2 className="text-blue-600" size={24} />
                  <h2 className="text-2xl font-black text-gray-900 tracking-tight">Department Details</h2>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Department / Public Authority</label>
                  <input
                    required
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    placeholder="e.g., Ministry of Health, Municipal Corporation of Delhi"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Tip: Be as specific as possible with the department name.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Subject of Request</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g., Information regarding road repair funds in Ward 12"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-gray-500 font-bold hover:text-gray-700 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-blue-700 text-white px-10 py-3 rounded-full font-bold hover:bg-blue-800 transition-all flex items-center"
                  >
                    Next Step <Send className="ml-2" size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 mb-8">
                  <Info className="text-blue-600" size={24} />
                  <h2 className="text-2xl font-black text-gray-900 tracking-tight">Information Required</h2>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Detailed Description</label>
                  <textarea
                    required
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="List the specific questions or documents you are requesting. Use bullet points for clarity."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Supporting Document (Optional)</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-blue-500 transition-all cursor-pointer">
                    <FileText className="mx-auto text-gray-400 mb-2" size={32} />
                    <p className="text-sm text-gray-500 font-medium">Click to upload or drag and drop</p>
                    <p className="text-[10px] text-gray-400 mt-1">PDF, JPG or PNG (Max 5MB)</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl flex items-start space-x-3 border border-blue-100">
                  <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
                  <p className="text-xs text-blue-800 leading-relaxed">
                    By submitting this form, you are requesting our NGO to assist you in drafting your RTI. We do not charge any professional fees for this service. Official government fees (₹10) will still apply during final submission.
                  </p>
                </div>
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-gray-500 font-bold hover:text-gray-700 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all flex items-center shadow-lg shadow-orange-500/20"
                  >
                    Generate Application <Send className="ml-2" size={18} />
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>

        {/* Help Text */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <HelpCircle className="text-blue-600 mr-2" size={20} />
              Need help with the form?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you're unsure about which department to address or how to frame your questions, don't worry. Just provide the basic details and our legal team will guide you through the process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <ShieldCheck className="text-green-600 mr-2" size={20} />
              Is my data secure?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We take your privacy seriously. Your personal information and RTI details are encrypted and only accessible to our authorized legal advisors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShieldCheck = ({ className, size }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default FileRTI;
