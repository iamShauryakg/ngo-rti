import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import FileRTI from './pages/FileRTI';
import Donate from './pages/Donate';
import Members from './pages/Members';
import SuccessStories from './pages/SuccessStories';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Certificate80G from './pages/Certificate80G';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/file-rti" element={<FileRTI />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/members" element={<Members />} />
            <Route path="/stories" element={<SuccessStories />} />
            <Route path="/involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/80g-certificate" element={<Certificate80G />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
