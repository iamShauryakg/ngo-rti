import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, Share2 } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Privacy <span className="text-blue-700">Policy</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we handle and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-blue max-w-none space-y-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Database className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We collect information that you provide directly to us when you use our website, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li><strong>Personal Details:</strong> Name, email address, phone number, and postal address when you file an RTI or donate.</li>
                <li><strong>RTI Information:</strong> Details regarding the public authority and the specific information you are seeking.</li>
                <li><strong>Donation Data:</strong> Transaction details, PAN number (for 80G certificates), and donation amount.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>To assist you in drafting and filing RTI applications.</li>
                <li>To process donations and issue 80G tax-exemption certificates.</li>
                <li>To send you updates about our NGO's activities and campaigns (you can opt-out at any time).</li>
                <li>To improve our website and services based on user feedback.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">Data Security</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data is encrypted and stored on secure servers. Access to personal information is restricted to authorized personnel who need the data to perform their duties.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Share2 className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">Third-Party Sharing</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li><strong>Government Authorities:</strong> When filing an RTI application on your behalf.</li>
                <li><strong>Payment Processors:</strong> To securely process your donations.</li>
                <li><strong>Legal Requirements:</strong> When required by law to comply with a judicial proceeding or court order.</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="text-green-600" size={24} />
                <h2 className="text-xl font-bold text-gray-900 m-0">Your Consent</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                By using our site, you consent to our website's privacy policy. We reserve the right to update this policy at any time, and changes will be posted on this page.
              </p>
              <p className="text-xs text-gray-400 mt-4 italic">Last Updated: March 23, 2026</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
