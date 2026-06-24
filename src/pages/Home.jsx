import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowDown, CheckCircle, Star } from 'lucide-react';
import TestimonialsEditorial from '../components/ui/editorial-testimonial';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const mockClasses = [
    { id: 1, name: "Bollywood Basics", instructor: "Nidhi", time: "6:00 PM", level: "Beginner", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Hip Hop Groove", instructor: "Jhalak", time: "7:30 PM", level: "Intermediate", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Semi Classical", instructor: "Meerra", time: "6:00 PM", level: "Advanced", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Bhangra Beats", instructor: "Khadija", time: "5:00 PM", level: "All Levels", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Kids Dance", instructor: "Khadija", time: "4:00 PM", level: "Beginner", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Bollywood Pro", instructor: "Nidhi", time: "8:00 PM", level: "Advanced", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80" }
  ];

  const onlineClasses = [
    { id: 101, name: "Virtual Bollywood", price: "75", duration: "60 mins", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" },
    { id: 102, name: "Online Hip Hop", price: "60", duration: "60 mins", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
    { id: 103, name: "Semi Classical Basics", price: "70", duration: "60 mins", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80" }
  ];

  const brandLogos = [
    "Sony", "MAC Cosmetics", "TikTok", "Expo 2020", "Red Bull", "Spotify", "Netflix", "Pepsi"
  ];

  const testimonials = [
    { id: 1, name: "Sarah M.", quote: "NKD Studios completely changed my confidence. The instructors are world-class!", rating: 5, image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Rahul K.", quote: "The energy in Nidhi's classes is unmatched. Highly recommend to everyone in Dubai.", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Aisha T.", quote: "Best place to learn dance and meet amazing people. The studio vibe is premium.", rating: 5, image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 4, name: "Omar F.", quote: "Incredible choreography for my sister's wedding. They made it so easy and fun.", rating: 5, image: "https://randomuser.me/api/portraits/men/46.jpg" },
    { id: 5, name: "Priya S.", quote: "My daughter loves the kids classes. The instructors are so patient and talented.", rating: 5, image: "https://randomuser.me/api/portraits/women/22.jpg" }
  ];

  const faqs = [
    { q: "Do I need prior dance experience?", a: "Not at all! Our classes are open to everyone, from complete beginners to advanced dancers." },
    { q: "How do I book a class?", a: "You can book directly through our website by navigating to the Classes page and selecting your preferred batch." },
    { q: "How do online classes work?", a: "Once you book and pay for an online class, a Zoom link will be sent automatically to your registered email address." },
    { q: "What should I wear to class?", a: "Wear comfortable athletic clothing and clean indoor sneakers. Bring a water bottle!" },
    { q: "Can I do a trial class?", a: "Yes, we offer a trial class for new students. Contact us on WhatsApp to arrange it." },
    { q: "Do you offer private lessons?", a: "Absolutely. We offer private sessions for individuals, couples, and small groups." }
  ];

  return (
    <div className="bg-nkd-dark min-h-screen text-nkd-white overflow-hidden pb-20">
      
      {/* 1. Hero Banner */}
      <section className="relative h-[calc(100vh-100px)] flex flex-col items-center justify-center text-center mx-4 md:mx-8 mt-4 mb-20 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1920&q=80" 
            alt="NKD Studios Dance" 
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div 
          className="z-20 max-w-5xl px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading font-black text-[clamp(4rem,12vw,14rem)] uppercase leading-none mb-4 text-white drop-shadow-2xl tracking-tighter flex items-baseline justify-center">
            NKD<span className="text-[clamp(1.5rem,3vw,3rem)] ml-2 text-white font-medium tracking-normal drop-shadow-lg">STUDIOS</span>
          </h1>
          <p className="font-body text-sm md:text-base font-medium mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Welcome to the UAE's first and largest boutique dance & content creation studio. Experience curated routines, professional insights, and a premium atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/classes" className="bg-white text-nkd-deep px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-gray-100 hover:scale-105 transition-all">
              Book a Class
            </Link>
            <Link to="/classes" className="bg-transparent border border-white text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-white/20 hover:scale-105 transition-all">
              Explore Classes
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. NKD Batches / Classes Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24 max-w-[1920px] bg-gray-50 rounded-[2.5rem] md:rounded-[3rem] my-10 shadow-sm border border-gray-100 mx-4 md:mx-8 lg:mx-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 capitalize">Our <span className="text-nkd-purple">Classes</span></h2>
          <p className="text-gray-500 max-w-sm text-sm">From beginner basics to advanced choreography, discover where your next dance journey will take you.</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-6 gap-6 snap-x hide-scrollbar">
          {mockClasses.map((cls, idx) => (
            <motion.div 
              key={cls.id}
              className="relative min-w-[280px] md:min-w-[320px] h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden snap-start shrink-0 group cursor-pointer shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={cls.image} alt={cls.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute top-4 right-4 z-20 bg-white/30 backdrop-blur-md text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/20">
                {cls.level}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-2xl font-bold font-heading text-white mb-1 tracking-wide">{cls.name}</h3>
                <p className="text-white/80 text-sm mb-3">Instructor: {cls.instructor} <span className="mx-1">|</span> Time: {cls.time}</p>
                <div className="flex items-center text-white text-xs font-medium">
                  <svg className="w-4 h-4 text-red-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  NKD Studios, Dubai
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <Link to="/classes" className="bg-nkd-deep hover:bg-nkd-purple text-white px-8 py-3 rounded-full font-medium transition-all text-sm shadow-md">
            View more
          </Link>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors bg-transparent"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors bg-transparent"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
          </div>
        </div>
      </section>

      {/* 3. Online Classes */}
      <section className="py-24 bg-gradient-to-b from-nkd-deep to-nkd-purple px-8 md:px-16 lg:px-24">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-lg md:text-4xl font-heading font-bold uppercase mb-4 text-[#ffffff]">Online <span className="text-nkd-dark">Classes</span></h2>
            <p className="text-[#f0efef] max-w-2xl mx-auto">Dance from anywhere in the world. Join our live interactive virtual sessions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {onlineClasses.map((cls, idx) => (
              <motion.div 
                key={cls.id}
                className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col group border-0 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="h-72 md:h-80 lg:h-96 relative overflow-hidden rounded-t-[1.5rem] m-2">
                  <img src={cls.image} alt={cls.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-[1.2rem]" />
                </div>
                <div className="px-5 pb-5 pt-3 flex justify-between items-center bg-white">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1 tracking-tight">{cls.name}</h3>
                    <p className="text-gray-900 font-bold text-base">
                      {cls.price} AED <span className="text-gray-500 font-normal text-xs">/class</span>
                    </p>
                  </div>
                  
                  <Link to={`/checkout/${cls.id}`} className="w-11 h-11 rounded-full bg-gray-900 hover:bg-nkd-purple text-white flex items-center justify-center shrink-0 transition-all shadow-md hover:scale-105">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mb-12">
            <Link to="/classes" className="border border-white/50 text-white hover:bg-white hover:text-nkd-purple px-10 py-3 rounded-full font-bold text-sm transition-colors">
              See all
            </Link>
          </div>
          
          <div className="bg-[#ffffff]/20 border border-[#ffffff]/50 rounded-2xl p-4 text-center max-w-3xl mx-auto flex items-center justify-center gap-3">
            <CheckCircle className="text-[#ffffff] w-6 h-6 shrink-0" />
            <p className="text-sm md:text-base text-[#ffffff]">After payment, your unique Zoom link will be sent to your email automatically.</p>
            {/* // TODO: Connect payment gateway + Zoom link webhook */}
          </div>
        </div>
      </section>



      {/* 5. Services / What We Offer */}
      <section className="py-24 px-8 md:px-16 lg:px-24 max-w-[1920px] bg-white mx-4 md:mx-8 lg:mx-12 rounded-[2.5rem] md:rounded-[3rem]">
        <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-center mb-20 text-gray-900">What We <span className="text-nkd-purple">Offer</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {[
            { 
              title: "Wedding Choreography", 
              desc: "Bespoke routines and personalized training for your special day.",
              icon: <svg className="w-6 h-6 text-nkd-deep group-hover:text-nkd-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            },
            { 
              title: "Performances", 
              desc: "Professional dance crews ready to elevate your corporate events.",
              icon: <svg className="w-6 h-6 text-nkd-deep group-hover:text-nkd-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            },
            { 
              title: "Studio Rental", 
              desc: "Premium, fully-equipped space available for creators and rehearsals.",
              icon: <svg className="w-6 h-6 text-nkd-deep group-hover:text-nkd-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            },
            { 
              title: "Private Sessions", 
              desc: "Exclusive 1-on-1 coaching to perfect your dance skills quickly.",
              icon: <svg className="w-6 h-6 text-nkd-deep group-hover:text-nkd-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-5 group-hover:bg-nkd-purple/10 transition-colors duration-300 shadow-sm border border-gray-100">
                {service.icon}
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-2 tracking-wide">{service.title}</h3>
              <p className="text-[13px] font-medium text-gray-400 max-w-[200px] leading-relaxed mx-auto">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials - Editorial Style */}
      <section className="py-24 bg-nkd-offwhite px-8 md:px-16 lg:px-24 mx-4 md:mx-8 lg:mx-12 rounded-[2.5rem] md:rounded-[3rem]">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-lg md:text-4xl font-heading font-bold uppercase text-center mb-4">What Our <span className="text-nkd-purple">Students Say</span></h2>
          <p className="text-center text-gray-500 max-w-xl mx-auto mb-8 text-sm">Hear from our community of dancers who've transformed their skills and confidence at NKD Studios.</p>
          <TestimonialsEditorial />
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-24 px-8 md:px-16 lg:px-24 mx-4 md:mx-8 lg:mx-12 max-w-[1920px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Side: FAQs */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-lg md:text-4xl font-heading font-bold uppercase text-left mb-10">Frequently Asked <span className="text-nkd-purple">Questions</span></h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-nkd-offwhite rounded-2xl overflow-hidden border border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-lg text-nkd-white">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-nkd-dark p-2 rounded-full text-nkd-purple shrink-0 ml-4 shadow-sm"
                    >
                      <ArrowDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Side: Image (Hidden on Mobile) */}
          <div className="hidden lg:block w-full lg:w-1/2 sticky top-24">
            <img 
              src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80"
              alt="Dance Class"
              className="w-full h-[600px] object-cover rounded-[2.5rem] shadow-xl border border-gray-100"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
