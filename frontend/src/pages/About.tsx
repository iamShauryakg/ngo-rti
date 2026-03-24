import { motion } from 'framer-motion';
import { Shield, BookOpen, CheckCircle, HelpCircle, FileText, Send, Clock, AlertCircle } from 'lucide-react';
import { faqs } from '../data/mockData';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Understanding the <span className="text-blue-700">RTI Act</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Right to Information Act 2005 is the most powerful tool in the hands of Indian citizens to ensure transparency and accountability in governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Citizen Rights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Your Rights as a Citizen</h2>
              <div className="space-y-6">
                {[
                  { title: "Right to Ask", desc: "You have the right to ask for information from any public authority.", icon: <HelpCircle className="text-blue-600" /> },
                  { title: "Right to Inspect", desc: "You can inspect government works, documents, and records.", icon: <Shield className="text-green-600" /> },
                  { title: "Right to Samples", desc: "You can take certified samples of material used in government projects.", icon: <CheckCircle className="text-orange-600" /> },
                  { title: "Right to Copies", desc: "You can obtain information in the form of diskettes, floppies, tapes, video cassettes or in any other electronic mode.", icon: <BookOpen className="text-purple-600" /> }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-700 rounded-3xl p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Who is a Public Authority?</h3>
                <p className="mb-6 leading-relaxed opacity-90">
                  Any body or institution of self-government established or constituted:
                </p>
                <ul className="space-y-4 opacity-90">
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 h-1.5 w-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                    <span>By or under the Constitution</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 h-1.5 w-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                    <span>By any other law made by Parliament</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 h-1.5 w-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                    <span>By any other law made by State Legislature</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1.5 h-1.5 w-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                    <span>By notification issued or order made by the appropriate Government</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">How RTI Works</h2>
            <p className="text-gray-400">A simple 3-step process to get the information you need.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Write Application", desc: "Draft your request clearly in English, Hindi or the official language of the area.", icon: <FileText size={40} /> },
              { step: "02", title: "Submit to Dept", desc: "Submit your application to the Public Information Officer (PIO) with the prescribed fee.", icon: <Send size={40} /> },
              { step: "03", title: "Wait for Response", desc: "The PIO must provide the information within 30 days (48 hours for life/liberty).", icon: <Clock size={40} /> }
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                <div className="mb-8 flex justify-center">
                  <div className="w-24 h-24 bg-gray-800 rounded-3xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
                <span className="text-6xl font-black text-white/5 absolute top-0 left-1/2 -translate-x-1/2 -z-0 select-none">{item.step}</span>
                <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <AlertCircle className="text-orange-600" size={32} />
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Important Guidelines</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 h-1.5 w-1.5 bg-orange-600 rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-700">Be specific about the information you need. Avoid asking vague questions.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 h-1.5 w-1.5 bg-orange-600 rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-700">Mention the period for which the information is required.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 h-1.5 w-1.5 bg-orange-600 rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-700">Always keep a copy of your application and the proof of submission.</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 h-1.5 w-1.5 bg-orange-600 rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-700">If the PIO refuses or gives incomplete info, you can file a First Appeal.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 h-1.5 w-1.5 bg-orange-600 rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-700">No fee is required for BPL (Below Poverty Line) cardholders.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1.5 h-1.5 w-1.5 bg-orange-600 rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-700">Information that cannot be denied to Parliament/Legislature cannot be denied to you.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180">
                    <HelpCircle size={20} className="text-blue-500" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
