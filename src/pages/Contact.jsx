import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = (fieldName) => `
    w-full bg-gray-50 rounded-2xl px-5 py-4 text-[#1e1e1e] placeholder-gray-400 font-medium text-sm
    border-2 transition-all duration-300 outline-none
    ${focusedField === fieldName ? 'border-[#813f98] bg-white shadow-[0_0_15px_rgba(129,63,152,0.1)]' : 'border-transparent'}
  `;

  return (
    <div className="bg-[#ffffff] min-h-screen text-[#1e1e1e] pb-10">
      
      {/* Hero Banner (Matching Home Page Style) */}
      <section className="relative h-[45vh] md:h-[55vh] flex flex-col items-center justify-center text-center mx-4 md:mx-8 mb-20 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-gray-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1920&q=80" 
            alt="NKD Studios Contact" 
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div 
          className="z-20 max-w-4xl px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl uppercase leading-none mb-6 text-white drop-shadow-2xl tracking-tighter">
            GET IN <span className="text-[#813f98]">TOUCH</span>
          </h1>
          <p className="font-body text-sm md:text-base font-medium text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Ready to dance? Have questions about our classes, studio rentals, or event choreography? Drop us a message or visit our studio in Dubai.
          </p>
        </motion.div>
      </section>

      {/* Info Cards Section */}
      <section className="py-10 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <MapPin className="w-7 h-7" />, title: "Location", desc: "Mandarin Building, Office 118, Oud Metha, Dubai, UAE" },
            { icon: <Phone className="w-7 h-7" />, title: "WhatsApp", desc: "+971 58 599 1012" },
            { icon: <Mail className="w-7 h-7" />, title: "Email", desc: "hello@nkdstudios.com" },
            { icon: <Clock className="w-7 h-7" />, title: "Hours", desc: "Mon - Sun: 10:00 AM - 10:00 PM" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-[#f0efef] p-8 rounded-[2rem] flex flex-col items-center text-center group border border-transparent hover:border-[#813f98]/30 transition-all cursor-default shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#1e1e1e] group-hover:text-[#813f98] group-hover:bg-[#813f98]/10 transition-colors duration-300 mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-bold font-heading uppercase text-xl text-[#1e1e1e] mb-2 tracking-wide">{item.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          
          {/* Left Side: Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-[#1e1e1e] mb-8 tracking-tight">
              Send A <span className="text-[#813f98]">Message</span>
            </h2>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#f0efef] border-l-4 border-[#813f98] text-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center text-center h-full justify-center"
                >
                  <div className="w-16 h-16 bg-[#813f98]/10 rounded-full flex items-center justify-center text-[#813f98] mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-2xl font-bold font-heading uppercase mb-2">Thank You!</h4>
                  <p className="text-gray-500 font-medium mb-8">Your message has been received. We'll be in touch shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#813f98] font-bold uppercase text-sm tracking-wider flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    Send another message <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('name')}
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('phone')}
                      />
                    </div>
                  </div>

                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('email')}
                    />
                  </div>

                  <div className="relative">
                    <select 
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('interest')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses('interest')} appearance-none cursor-pointer ${!formData.interest ? 'text-gray-400' : 'text-[#1e1e1e]'}`}
                    >
                      <option value="" disabled hidden>Inquiry Type</option>
                      <option value="Dance Classes" className="text-[#1e1e1e]">Dance Classes</option>
                      <option value="Wedding Choreography" className="text-[#1e1e1e]">Wedding Choreography</option>
                      <option value="Studio Rental" className="text-[#1e1e1e]">Studio Rental</option>
                      <option value="Private Sessions" className="text-[#1e1e1e]">Private Sessions</option>
                      <option value="Other" className="text-[#1e1e1e]">Other Inquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  <div>
                    <textarea 
                      name="message" 
                      placeholder="Your Message..."
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses('message')} resize-none`}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#1e1e1e] hover:bg-[#813f98] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    Submit Inquiry 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: Map */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-gray-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7297078318995!2d55.31295247610669!3d25.246039577681342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d21c97a7e87%3A0xc3b8a6a68cdceb0!2sMandarin%20Building!5e0!3m2!1sen!2sae!4v1705609340325!5m2!1sen!2sae" 
              className="absolute inset-0 w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NKD Studios Location"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}
