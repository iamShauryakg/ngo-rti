import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

interface MemberCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    bio: string;
    social: { twitter: string; linkedin: string };
  };
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
          <div className="flex space-x-4">
            <a href={member.social.twitter} className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
              <Twitter size={18} className="text-white" />
            </a>
            <a href={member.social.linkedin} className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors">
              <Linkedin size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-blue-600 font-semibold text-sm mb-3 uppercase tracking-wider">{member.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
};

export default MemberCard;
