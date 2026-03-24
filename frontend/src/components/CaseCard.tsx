import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface CaseCardProps {
  story: {
    title: string;
    description: string;
    outcome: string;
    tag: string;
  };
}

const CaseCard: React.FC<CaseCardProps> = ({ story }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
      <div className="mb-4">
        <span className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-100">
          {story.tag}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{story.title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{story.description}</p>
      <div className="pt-6 border-t border-gray-50 mt-auto">
        <div className="flex items-center text-green-600 font-bold text-sm">
          <CheckCircle2 size={18} className="mr-2" />
          <span>{story.outcome}</span>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
