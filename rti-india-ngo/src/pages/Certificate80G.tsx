import React from 'react';
import { motion } from 'motion/react';
import { FileCheck, Download, ShieldCheck, Info, CheckCircle2, Award } from 'lucide-react';

const Certificate80G = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-blue-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">80G Tax <span className="text-orange-400">Benefits</span></h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your contribution to transparency is recognized by the government with tax-exemption benefits.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">What is Section 80G?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Section 80G of the Income Tax Act allows Indian taxpayers to claim a deduction for donations made to charitable organizations. RTI India NGO is a registered non-profit organization eligible for these benefits.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">50% Tax Deduction</h3>
                    <p className="text-sm text-gray-600">You can claim a deduction of up to 50% of your donated amount from your taxable income.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <FileCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Instant Receipt</h3>
                    <p className="text-sm text-gray-600">Receive your donation receipt and 80G certificate via email immediately after a successful transaction.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="text-orange-500 mr-2" size={20} />
                  Our Registration Details
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Registration No:</strong> RTI/ND/2024/80G/0045</li>
                  <li><strong>Valid From:</strong> April 1, 2024</li>
                  <li><strong>Valid To:</strong> Perpetual (as per new IT rules)</li>
                  <li><strong>PAN:</strong> AAATR0000X</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-2xl">
                <div className="border-b border-gray-100 pb-6 mb-6 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sample Certificate</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">For Preview Only</p>
                </div>
                <div className="space-y-4 opacity-40 select-none">
                  <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto" />
                  <div className="h-4 bg-gray-100 rounded w-1/2 mx-auto" />
                  <div className="h-32 bg-gray-50 rounded-xl w-full" />
                  <div className="h-4 bg-gray-100 rounded w-full" />
                  <div className="h-4 bg-gray-100 rounded w-5/6" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl flex items-center hover:bg-blue-800 transition-all">
                    <Download className="mr-2" size={20} />
                    Download Sample PDF
                  </button>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3 text-gray-500">
                <Info size={18} className="flex-shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed italic">
                  Note: To claim 80G benefits, you must provide your PAN number during the donation process. The certificate will be issued in the name mentioned on the PAN card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate80G;
