import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Contact Us</span>
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">Get in <span className="text-blue-700">Touch</span></h1>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  Have questions about RTI? Need help with an application? Or just want to say hello? We're here to help.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Our Office</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">123, Janpath Road, Connaught Place,<br />New Delhi, 110001, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 flex-shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600 text-sm">+91 11 2345 6789</p>
                      <p className="text-gray-400 text-xs mt-1">Mon-Fri, 9am - 6pm</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 text-sm">contact@rti-india-ngo.org</p>
                      <p className="text-gray-600 text-sm">support@rti-india-ngo.org</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-600" size={40} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Message Sent!</h2>
                  <p className="text-gray-600 mb-8">We've received your message and will get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-blue-700 font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Subject</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                    <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white" />
                  </div>
                  <button type="submit" className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center">
                    Send Message <Send className="ml-2" size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative border border-gray-200">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col">
              <MapPin size={48} className="mb-4" />
              <p className="font-bold uppercase tracking-widest text-sm">Interactive Map Placeholder</p>
              <p className="text-xs mt-2">New Delhi, India</p>
            </div>
            {/* In a real app, you'd embed a Google Map here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
