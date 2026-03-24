import React from 'react';
import { motion } from 'motion/react';
import MemberCard from '../components/MemberCard';
import { members } from '../data/mockData';

const Members = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our <span className="text-blue-500">Activists</span> & Team</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Meet the dedicated professionals and volunteers working tirelessly to make India more transparent.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Want to join our mission?</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            We are always looking for passionate RTI activists, legal experts, and volunteers to join our growing network across India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-700 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition-all">
              Apply as Activist
            </button>
            <button className="bg-white border-2 border-gray-200 text-gray-900 px-10 py-4 rounded-full font-bold hover:border-blue-700 hover:text-blue-700 transition-all">
              Volunteer with Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
