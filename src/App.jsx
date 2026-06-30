import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Checkout from './pages/Checkout';
import Policies from './pages/Policies';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-body bg-nkd-dark text-nkd-white min-h-screen flex flex-col relative">
        
        {/* Global Navigation */}
        <header className="sticky top-0 z-50 bg-white w-full border-b border-gray-100 shadow-sm">
          <div className="px-4 md:px-8 py-5 flex justify-between items-center w-full max-w-[1920px] mx-auto">
            {/* Logo */}
            <Link to="/" className="shrink-0 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo.png" alt="NKD Studios Logo" className="h-10 md:h-14 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-gray-800 hover:text-nkd-purple font-medium transition-colors text-base">Home</Link>
              <Link to="/classes" className="text-gray-800 hover:text-nkd-purple font-medium transition-colors text-base">Classes</Link>
              <Link to="/services" className="text-gray-800 hover:text-nkd-purple font-medium transition-colors text-base">Services</Link>
              <Link to="/gallery" className="text-gray-800 hover:text-nkd-purple font-medium transition-colors text-base">Gallery</Link>
              <Link to="/about" className="text-gray-800 hover:text-nkd-purple font-medium transition-colors text-base">About Us</Link>
              <Link to="/contact" className="text-gray-800 hover:text-nkd-purple font-medium transition-colors text-base">Contact Us</Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4 shrink-0">
               {/* Search Bar matching image */}
               <div className="bg-gray-100 rounded-full px-5 py-3 flex items-center w-72 border border-transparent focus-within:border-gray-300 transition-colors">
                 <input type="text" placeholder="Search for classes, events..." className="bg-transparent border-none outline-none text-base w-full text-gray-800 placeholder-gray-500" />
                 <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
               </div>
               <Link to="/classes" className="bg-nkd-deep hover:bg-nkd-purple text-white px-8 py-3.5 rounded-full font-medium transition-all text-base shadow-md hover:shadow-lg">Book now</Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button className="lg:hidden text-gray-800 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-nkd-white z-[60] flex flex-col h-screen w-full px-6 py-8 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center w-full mb-12">
                <span className="text-[#ffffff] font-heading font-bold text-xl uppercase tracking-widest">NKD Studios&trade;</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center text-nkd-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex flex-col gap-6 text-left text-[40px] font-body text-[#ffffff] font-normal leading-tight flex-grow">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nkd-purple transition-colors">Home</Link>
                <Link to="/classes" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nkd-purple transition-colors">Classes</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nkd-purple transition-colors">About</Link>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nkd-purple transition-colors">Services</Link>
                <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nkd-purple transition-colors">Gallery</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nkd-purple transition-colors">Contact</Link>
              </nav>

              {/* Menu Footer */}
              <div className="mt-12 flex flex-col gap-8 text-[#ffffff]/70 text-sm">
                <div>
                  <p className="uppercase tracking-widest font-bold text-xs mb-1">Dubai Digital Park,</p>
                  <p className="uppercase tracking-widest font-bold text-xs mb-1">A1 Building</p>
                  <p className="uppercase tracking-widest font-bold text-xs mb-4">Dubai, UAE</p>
                  <a href="mailto:info@nkdstudios.com" className="uppercase tracking-widest font-bold text-xs border-b border-[#ffffff]/50 pb-1">Email Us</a>
                </div>

                <div className="flex justify-between items-end border-t border-[#ffffff]/20 pt-4 text-[10px] uppercase tracking-wider text-[#ffffff]/50">
                  <div>
                    <p className="mb-1">Legal Notice</p>
                    <p>&copy;2024 NKD Studios</p>
                  </div>
                  <div className="text-right">
                    <p className="mb-1">Website By</p>
                    <p>NKD</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/checkout/:classId" element={<Checkout />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies/:policyId?" element={<Policies />} />
            <Route path="*" element={<div className="pt-32 text-center text-2xl font-heading font-bold h-[60vh]">Page Not Found</div>} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="bg-white border-t border-gray-200 py-16 mt-10 md:mt-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12 md:gap-8">
            <div className="md:max-w-xs">
              <Link to="/" className="inline-block mb-4">
                <img src="/logo.png" alt="NKD Studios Logo" className="h-12 md:h-16 w-auto object-contain" />
              </Link>
              <p className="text-gray-500 font-light text-sm">The UAE's first and largest dance & content creation studio. Nach Ke Dikha!</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-heading font-medium text-lg mb-2 text-gray-900 uppercase">Quick Links</h3>
              <Link to="/about" className="text-gray-500 font-light hover:text-nkd-purple transition-colors w-fit text-sm">About Us</Link>
              <Link to="/classes" className="text-gray-500 font-light hover:text-nkd-purple transition-colors w-fit text-sm">Classes</Link>
              <Link to="/services" className="text-gray-500 font-light hover:text-nkd-purple transition-colors w-fit text-sm">Services</Link>
              <Link to="/gallery" className="text-gray-500 font-light hover:text-nkd-purple transition-colors w-fit text-sm">Gallery</Link>
              <Link to="/contact" className="text-gray-500 font-light hover:text-nkd-purple transition-colors w-fit text-sm">Contact Us</Link>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-heading font-medium text-lg mb-2 text-gray-900 uppercase">Policies</h3>
              <Link to="/policies/privacy" className="text-gray-500 font-light hover:text-nkd-purple transition-colors w-fit text-sm">Privacy Policy</Link>
              <Link to="/policies/terms" className="text-gray-500 font-light hover:text-nkd-purple transition-colors w-fit text-sm">Terms of Service</Link>
              <Link to="/policies/refunds" className="text-gray-500 font-light hover:text-nkd-purple transition-colors w-fit text-sm">Refund Policy</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-heading font-medium text-lg mb-2 text-gray-900 uppercase">Connect</h3>
              <div className="flex gap-4 mb-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-nkd-purple hover:text-white transition-colors border border-gray-100">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-nkd-purple hover:text-white transition-colors border border-gray-100">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-nkd-purple hover:text-white transition-colors border border-gray-100">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
              </div>
              <a href="tel:+971585991012" className="text-gray-500 font-light hover:text-nkd-purple text-sm">+971 58 599 1012</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs font-light tracking-wide">
            <p>&copy; {new Date().getFullYear()} NKD Studios. All Rights Reserved.</p>
          </div>
        </footer>

        {/* Sticky WhatsApp Button */}
        <a 
          href="https://wa.me/971585991012" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-14 h-14 bg-nkd-purple rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-nkd-deep transition-all duration-300 animate-[pulse_2s_infinite]"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M12.031 0C5.385 0 0 5.386 0 12.032c0 2.123.551 4.195 1.597 6.01L.004 24l6.104-1.6c1.761.954 3.751 1.458 5.922 1.458 6.648 0 12.034-5.385 12.034-12.031C24.064 5.386 18.679 0 12.031 0zm3.834 17.274c-.161.453-.943.864-1.353.916-.395.051-1.041.077-3.153-.795-2.585-1.07-4.238-3.696-4.364-3.866-.127-.17-1.042-1.385-1.042-2.641 0-1.256.657-1.879.888-2.133.232-.255.503-.318.67-.318.167 0 .334.001.482.008.152.008.358-.061.56.425.211.511.716 1.748.778 1.875.061.127.102.276.019.444-.082.169-.126.275-.252.424-.127.149-.269.324-.383.435-.126.113-.263.24-.121.483.141.243.629 1.041 1.349 1.684.93.83 1.705 1.084 1.95 1.206.244.122.387.102.531-.061.144-.163.629-.731.796-.983.167-.252.333-.21.558-.126.225.084 1.428.673 1.671.795.244.122.408.183.468.286.06.103.06.602-.101 1.055z"/>
          </svg>
        </a>

    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
