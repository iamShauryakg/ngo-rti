import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, CreditCard, Smartphone, Banknote, CheckCircle2, Lock } from 'lucide-react';

const Donate = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('500');
  const [customAmount, setCustomAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    phone: '',
    email: ''
  });

  const amounts = ['100', '500', '1000', '5000'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
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
          className="bg-white p-12 rounded-3xl shadow-xl border border-orange-100"
        >
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="text-orange-600" size={40} />
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Thank You for Your Support!</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you, <span className="font-bold text-gray-900">{userData.firstName}</span>. Your generous contribution of <span className="font-bold text-gray-900">₹{customAmount || amount}</span> will help us continue our mission of bringing transparency to India. We have sent a confirmation email and your 80G tax-exemption certificate to your inbox.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(1); }}
            className="bg-blue-700 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <section className="bg-orange-500 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Support <span className="text-blue-900">Transparency</span></h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your donation helps us provide free legal aid to RTI applicants and conduct awareness workshops across rural India.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Progress Header */}
            <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex justify-between items-center">
              <div className="flex space-x-2">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className={`h-2 w-16 rounded-full transition-all duration-300 ${step >= s ? 'bg-blue-600' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Step {step} of 2</span>
            </div>

            <div className="p-8 md:p-12">
              {step === 1 ? (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handleNext}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Your Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">First Name</label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Last Name</label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">City</label>
                      <input
                        required
                        type="text"
                        name="city"
                        value={userData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="New Delhi"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">State</label>
                      <input
                        required
                        type="text"
                        name="state"
                        value={userData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Delhi"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-black text-lg transition-all shadow-lg shadow-blue-700/20"
                  >
                    Continue to Donation
                  </button>
                </motion.form>
              ) : (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Select Amount</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {amounts.map((a) => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => { setAmount(a); setCustomAmount(''); }}
                          className={`py-4 rounded-2xl font-bold text-lg transition-all border-2 ${amount === a && !customAmount ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 border-gray-100 hover:border-blue-200'}`}
                        >
                          ₹{a}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                      <input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-700 outline-none transition-all font-bold text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-black text-gray-900 mb-6 tracking-tight">Payment Method</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="border-2 border-blue-700 bg-blue-50 p-4 rounded-2xl flex items-center space-x-3 cursor-pointer">
                        <Smartphone className="text-blue-700" />
                        <span className="font-bold text-blue-900">UPI / QR</span>
                      </div>
                      <div className="border-2 border-gray-100 p-4 rounded-2xl flex items-center space-x-3 cursor-pointer hover:border-blue-200">
                        <CreditCard className="text-gray-400" />
                        <span className="font-bold text-gray-700">Card</span>
                      </div>
                      <div className="border-2 border-gray-100 p-4 rounded-2xl flex items-center space-x-3 cursor-pointer hover:border-blue-200">
                        <Banknote className="text-gray-400" />
                        <span className="font-bold text-gray-700">Net Banking</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center"
                    >
                      Donate ₹{customAmount || amount} Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-gray-500 font-bold hover:text-gray-700 transition-all text-sm"
                    >
                      Back to Details
                    </button>
                  </div>

                  <div className="flex items-center justify-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Lock size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Secure Payment</span>
                    </div>
                    <div className="h-1 w-1 bg-gray-300 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">80G Tax Exempt</span>
                  </div>
                </motion.form>
              )}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-6">Why Donate?</h3>
              <ul className="space-y-6">
                {[
                  { title: "Legal Aid", desc: "We provide free legal representation for RTI appeals in high courts." },
                  { title: "Rural Outreach", desc: "Conducting workshops in villages to educate citizens about their rights." },
                  { title: "Research", desc: "Analyzing government data to uncover systemic corruption." }
                ].map((item, i) => (
                  <li key={i} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
                      <CheckCircle2 size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-blue-200 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
              <ShieldCheck className="mx-auto text-green-600 mb-4" size={48} />
              <h3 className="font-bold text-gray-900 mb-2">Tax Benefits</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All donations to RTI India NGO are eligible for 50% tax deduction under Section 80G of the Income Tax Act.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
