import React, { useState } from 'react';

import { Users, Megaphone, UserPlus, CheckCircle2, Send } from 'lucide-react';

const GetInvolved = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="bg-blue-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Get <span className="text-blue-400">Involved</span></h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Transparency is a collective effort. Join our community of activists and volunteers to build a better India.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Volunteer", desc: "Help us organize workshops, manage data, or assist in legal research.", icon: <Users className="text-blue-600" size={40} /> },
              { title: "Campaign", desc: "Spread awareness in your local community or on social media.", icon: <Megaphone className="text-orange-500" size={40} /> },
              { title: "Join as Member", desc: "Become a formal member of the NGO and participate in decision making.", icon: <UserPlus className="text-green-600" size={40} /> }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-blue-700 p-12 text-white">
                <h2 className="text-3xl font-black mb-6 tracking-tight">Volunteer With Us</h2>
                <p className="mb-8 opacity-80 leading-relaxed">
                  Fill out the form and our coordinator will reach out to you within 3-5 working days.
                </p>
                <ul className="space-y-4">
                  {[
                    "Flexible working hours",
                    "Certificate of appreciation",
                    "Networking with legal experts",
                    "Real impact on society"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm font-medium">
                      <CheckCircle2 size={18} className="text-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-12">
                {submitted ? (
                  <div className="text-center h-full flex flex-col justify-center">
                    <CheckCircle2 className="text-green-600 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application Received!</h3>
                    <p className="text-gray-600 text-sm">We'll contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Area of Interest</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        <option>Legal Research</option>
                        <option>Field Awareness</option>
                        <option>Social Media</option>
                        <option>Data Entry</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center">
                      Submit Application <Send className="ml-2" size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
