import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { ArrowDown, CheckCircle, ArrowRight } from 'lucide-react';
import TestimonialsEditorial from '../components/ui/editorial-testimonial';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const classesScrollRef = useRef(null);

  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const mockClasses = [
    { id: 1, name: "Kids Weekday", instructor: "Meerra", time: "Tue/Wed 6-7pm", level: "Ages 7-12", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Bolly Beginners", instructor: "Nidhi", time: "Sat/Sun 2-3pm", level: "Beginner", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Hip Hop Advanced", instructor: "Jhalak", time: "Tue/Thu 6-7pm", level: "Advanced", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Bhangra Beginners", instructor: "Khadija", time: "Fri 7-8pm", level: "Beginner", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Contemporary", instructor: "Praseeth", time: "Thu 8-9pm", level: "All Levels", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
  ];

  const onlineClasses = [
    { id: 101, name: "Semi Classical", instructor: "Meerra", time: "Mon/Sat IST 1:30-2:30pm", price: "75", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" },
    { id: 102, name: "Hip Hop", instructor: "Jhalak", time: "Tue/Sun IST 2:30-3:30pm", price: "60", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
    { id: 103, name: "Lachak Ladies", instructor: "Khadija", time: "Thu IST 11:30am / Sun IST 1:30pm", price: "70", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80" }
  ];

  const team = [
    { name: "Nidhi Kumar", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" },
    { name: "Meerra", role: "Lead Instructor | Semi-Classical", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" },
    { name: "Jhalak", role: "Lead Instructor | Hip-Hop", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
    { name: "Khadija", role: "Lead Instructor | Kids & Bhangra", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" },
    { name: "Sarah", role: "Studio Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
    { name: "Riya", role: "Social Media Manager", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
  ];

  const faqs = [
    { q: "1. Do I need prior dance experience to join NKD Studios?", a: "Not at all! Our classes are open to everyone, from complete beginners to advanced dancers." },
    { q: "2. What dance styles do you offer?", a: "We offer a variety of styles including Bollywood, Hip-Hop, Semi-Classical, Bhangra, Kids Dance, and special workshops with guest instructors." },
    { q: "3. What age groups can join?", a: "NKD Studios welcomes dancers of all ages. We have dedicated batches for kids, teens, and adults." },
    { q: "4. Can I attend a trial class?", a: "Yes! We offer free trial classes so you can experience the studio and find the batch that suits you best." },
    { q: "5. Do you offer wedding choreography?", a: "Absolutely! We provide customized choreography for weddings, sangeets, engagements, and other special occasions." },
    { q: "6. Do you perform at corporate events and private functions?", a: "Yes, we offer performances and choreography services for corporate events, private parties, and special celebrations." },
    { q: "7. How do I register for classes?", a: "You can register by contacting us via WhatsApp, Instagram, or through the contact form on our website." },
    { q: "8. Do you host workshops and events?", a: "Yes! We regularly host workshops, pop up workshops and special events featuring talented artists and instructors." },
    { q: "9. Are classes available for beginners?", a: "Yes, we have beginner-friendly batches designed to help you learn and progress at your own pace." },
    { q: "10. Where is NKD Studios located?", a: "NKD Studios, Mandarin Building, Office 118, Oud Metha, Dubai, UAE." },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 font-body overflow-hidden">
      
      {/* 1. Minimalist Hero Banner */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 md:px-12 mt-4 mx-4 md:mx-8 mb-24 rounded-3xl overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1920&q=80" 
            alt="NKD Studios Dance" 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </div>

        <motion.div 
          className="z-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading font-light text-[clamp(3rem,8vw,8rem)] uppercase leading-tight mb-6 tracking-tight text-gray-900">
            Movement & <br/> <span className="font-semibold text-nkd-purple">Expression</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Dubai’s fastest-growing dance and content creation space, built on a passion for creativity and community.
          </p>
          <div className="flex justify-center">
            <Link to="/classes" className="group flex items-center gap-3 bg-nkd-purple text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-nkd-deep transition-all">
              Explore Classes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. NKD Batches Preview */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-light text-gray-900 mb-4">In-Studio <span className="font-medium text-nkd-purple">Batches</span></h2>
            <p className="text-gray-500 font-light max-w-md">Join our vibrant community. We offer styles for all ages and levels across the week.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-2">
              <button onClick={() => scrollCarousel(classesScrollRef, 'left')} className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors" aria-label="Scroll left">
                <ArrowRight className="w-5 h-5 rotate-180 text-gray-600" />
              </button>
              <button onClick={() => scrollCarousel(classesScrollRef, 'right')} className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors" aria-label="Scroll right">
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <Link to="/classes" className="text-nkd-purple font-medium hover:text-nkd-deep transition-colors flex items-center gap-2">
              View Schedule <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div ref={classesScrollRef} className="flex overflow-x-auto pb-8 gap-8 snap-x hide-scrollbar scroll-smooth">
          {mockClasses.map((cls, idx) => (
            <motion.div 
              key={cls.id}
              className="relative min-w-[300px] md:min-w-[350px] aspect-[4/5] rounded-2xl overflow-hidden snap-start shrink-0 group cursor-pointer bg-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={cls.image} alt={cls.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="text-xs font-semibold uppercase tracking-widest text-nkd-purple mb-2 bg-white/90 backdrop-blur-sm w-fit px-3 py-1 rounded-full">{cls.level}</div>
                <h3 className="text-2xl font-heading font-medium text-white mb-2">{cls.name}</h3>
                <p className="text-white/80 text-sm font-light">With {cls.instructor} • {cls.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Online Classes */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-light text-gray-900 mb-6">Online <span className="font-medium text-nkd-purple">Schedule 2026</span></h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg">Dance from anywhere. Instant Zoom access upon booking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {onlineClasses.map((cls, idx) => (
              <motion.div 
                key={cls.id}
                className="bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="h-64 relative overflow-hidden rounded-2xl mb-6">
                  <img src={cls.image} alt={cls.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-heading font-medium text-gray-900 mb-2">{cls.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 font-light">With {cls.instructor} <br/> {cls.time}</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="font-semibold text-lg text-gray-900">AED {cls.price}</span>
                  <Link to={`/checkout/${cls.id}`} className="bg-nkd-purple hover:bg-nkd-deep text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center">
             <div className="bg-white border border-gray-200 rounded-full px-6 py-3 text-sm text-gray-500 flex items-center gap-3 shadow-sm">
                <CheckCircle className="text-nkd-purple w-5 h-5" />
                Zoom link sent immediately upon payment
             </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Collaborations */}
      <section className="py-20 border-y border-gray-100 overflow-hidden bg-white">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">Trusted By Global Brands</p>
        <div className="relative flex overflow-x-hidden opacity-60 hover:opacity-100 transition-opacity">
          <motion.div 
            className="flex whitespace-nowrap gap-24 items-center px-12"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {["Pepsi", "Samsung", "Papa Johns", "Sharaf DG", "Jashanmal", "Pepsi", "Samsung", "Papa Johns", "Sharaf DG", "Jashanmal"].map((brand, i) => (
              <span key={i} className="text-2xl md:text-3xl font-heading font-light text-gray-800 uppercase tracking-widest cursor-default select-none">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Services */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-light text-center mb-20 text-gray-900">Our <span className="font-medium text-nkd-purple">Services</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: "Wedding Choreography", desc: "Customized choreography for weddings, sangeets, and celebrations." },
            { title: "Stage Performances", desc: "Spectacular events, corporate shows, and large-scale productions." },
            { title: "Brand Activations", desc: "Bringing creativity and movement to campaigns and events." },
            { title: "Private Celebrations", desc: "Intimate family functions and special occasions made memorable." }
          ].map((service, i) => (
             <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 rounded-full bg-nkd-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 bg-nkd-purple rounded-full"></div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed">{service.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* 6. Meet the Team */}
      <section className="py-32 bg-gray-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-light text-gray-900 mb-6">Meet the <span className="font-medium text-nkd-purple">Team</span></h2>
            <p className="text-gray-500 font-light text-lg">The passionate artists behind NKD Studios.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 text-center absolute bottom-0 left-0 w-full bg-gradient-to-t from-white via-white to-transparent pt-12">
                  <h3 className="text-xl font-heading font-medium text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-nkd-purple text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 Testimonials */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-light text-center mb-4 text-gray-900">What Our <span className="font-medium text-nkd-purple">Students Say</span></h2>
        <p className="text-center text-gray-500 font-light text-lg mb-16">Hear from our community of dancers.</p>
        <TestimonialsEditorial />
      </section>

      {/* 7. FAQs */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-light text-center mb-16 text-gray-900">Frequently Asked <span className="font-medium text-nkd-purple">Questions</span></h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-medium text-gray-900 group-hover:text-nkd-purple transition-colors">{faq.q}</span>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                  <ArrowDown className="w-5 h-5 text-gray-400 group-hover:text-nkd-purple" />
                </div>
              </button>
              
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-gray-500 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
