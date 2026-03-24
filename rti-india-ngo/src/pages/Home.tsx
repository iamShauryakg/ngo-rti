import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Heart, Users, ShieldCheck, Info, ChevronRight } from 'lucide-react';
import StatSection from '../components/StatSection';
import CaseCard from '../components/CaseCard';
import MemberCard from '../components/MemberCard';
import { successStories, members } from '../data/mockData';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1532375811400-24b21d28c30a?q=80&w=2070&auto=format&fit=crop"
            alt="Indian Parliament"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-1 w-12 bg-orange-500" />
                <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">Right to Information Act, 2005</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter">
                Empowering Citizens Through <span className="text-blue-700">Transparency</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                We are a non-profit dedicated to helping every Indian citizen exercise their fundamental right to know. Join us in building a more accountable India.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/file-rti"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all group"
                >
                  File an RTI <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/donate"
                  className="bg-white border-2 border-gray-200 hover:border-orange-500 hover:text-orange-600 text-gray-900 px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all"
                >
                  Support Our Cause <Heart className="ml-2 text-orange-500" size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatSection />

      {/* What is RTI Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Introduction
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">What is the Right to Information?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                The RTI Act 2005 is a landmark legislation that empowers citizens to request information from public authorities. It is a powerful tool to combat corruption and ensure that the government remains answerable to the people.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Promotes transparency and accountability",
                  "Empowers citizens to question the government",
                  "Reduces corruption and administrative delays",
                  "Ensures public participation in governance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                    <ShieldCheck className="text-green-500 h-5 w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-blue-700 font-bold flex items-center hover:underline">
                Learn more about your rights <ChevronRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <FileText className="text-blue-600 mb-4" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Easy Filing</h3>
                  <p className="text-xs text-gray-500">Step-by-step guidance for your applications.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <Users className="text-orange-500 mb-4" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Expert Help</h3>
                  <p className="text-xs text-gray-500">Consult with experienced RTI activists.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <ShieldCheck className="text-green-500 mb-4" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Legal Support</h3>
                  <p className="text-xs text-gray-500">Assistance for appeals and legal hurdles.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <Info className="text-purple-500 mb-4" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Awareness</h3>
                  <p className="text-xs text-gray-500">Workshops and seminars across India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Impact</span>
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Real Stories of Real Change</h2>
              <p className="text-gray-600">See how common citizens used RTI to bring about extraordinary results.</p>
            </div>
            <Link to="/stories" className="mt-6 md:mt-0 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-full font-bold text-sm transition-colors">
              View All Stories
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.slice(0, 3).map((story) => (
              <CaseCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Members Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Team</span>
          <h2 className="text-4xl font-black text-gray-900 mb-16 tracking-tight">Meet Our Activists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.slice(0, 4).map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
          <Link to="/members" className="inline-block mt-12 text-blue-700 font-bold hover:underline">
            View all members & advisors
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                Ready to make a difference? <br /> Start your RTI journey today.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/file-rti" className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-4 rounded-full font-bold transition-all">
                  File Your First RTI
                </Link>
                <Link to="/involved" className="bg-orange-500 text-white hover:bg-orange-600 px-10 py-4 rounded-full font-bold transition-all">
                  Join as a Member
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
