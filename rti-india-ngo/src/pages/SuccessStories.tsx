import React from 'react';
import { motion } from 'motion/react';
import CaseCard from '../components/CaseCard';
import { successStories } from '../data/mockData';

const SuccessStories = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Impact & <span className="text-blue-700">Success Stories</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrating the victories of common citizens who used the RTI Act to bring about systemic change.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <CaseCard key={story.id} story={story} />
            ))}
            {/* Adding more dummy stories for the dedicated page */}
            {[
              { id: 4, title: "Pension Fund Recovery", description: "A retired teacher used RTI to find out why her pension was delayed for 18 months despite all paperwork being complete.", outcome: "Full Arrears Paid", tag: "Social Justice" },
              { id: 5, title: "Police Station Transparency", description: "RTI revealed that a local police station was charging 'processing fees' for FIRs, which is illegal.", outcome: "Officer Suspended", tag: "Law & Order" },
              { id: 6, title: "Hospital Equipment Audit", description: "Query revealed that life-saving ventilators in a government hospital were lying unboxed for 3 years.", outcome: "Equipment Installed", tag: "Healthcare" }
            ].map((story) => (
              <CaseCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6 tracking-tight">Have an RTI success story?</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Your story can inspire thousands of others to take action. Share your experience with us and we'll feature it on our platform.
          </p>
          <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all">
            Share Your Story
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
