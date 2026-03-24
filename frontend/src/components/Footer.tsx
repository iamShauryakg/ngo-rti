
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white tracking-tight">RTI INDIA NGO</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering Indian citizens through transparency and Right to Information awareness. We help you hold the government accountable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About RTI Act</Link></li>
              <li><Link to="/file-rti" className="hover:text-white transition-colors">File an RTI</Link></li>
              <li><Link to="/stories" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/members" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/donate" className="hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-500 mt-0.5" />
                <span>123, Janpath Road, Connaught Place, New Delhi, 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-500" />
                <span>+91 11 2345 6789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-500" />
                <span>contact@rti-india-ngo.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest campaigns and success stories.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded text-sm transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 RTI India NGO. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/80g-certificate" className="hover:text-white">80G Certificate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
