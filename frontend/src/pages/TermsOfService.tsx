import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Terms of <span className="text-blue-500">Service</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the RTI India NGO website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">2. Use of RTI Assistance</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our NGO provides assistance in drafting RTI applications. Please note:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>The assistance provided is for educational and awareness purposes only.</li>
                <li>We do not provide professional legal advice. For complex legal matters, please consult a qualified attorney.</li>
                <li>We do not guarantee that the government will provide the requested information, as it depends on the RTI Act's provisions and the department's response.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">3. Donations & Refunds</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Donations made to RTI India NGO are voluntary and non-refundable.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Donors are responsible for providing accurate information for 80G tax certificates.</li>
                <li>Donations are used solely for the NGO's mission of transparency and citizen empowerment.</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="text-orange-600" size={24} />
                <h2 className="text-xl font-bold text-gray-900 m-0">4. Limitation of Liability</h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mt-4">
                In no event shall RTI India NGO or its members be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Info className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">5. Governing Law</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in New Delhi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
