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

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-nkd-purple/20 focus:border-nkd-purple";

  return (
    <div className="bg-white min-h-screen text-gray-900 pb-20 font-body">
      
      {/* Header Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 mb-16 flex flex-col items-center justify-center text-center overflow-hidden min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1920&q=80" 
            alt="Contact Hero" 
            className="w-full h-full object-cover grayscale mix-blend-overlay"
          />
        </div>
        <div className="relative z-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-light text-white mb-6 uppercase tracking-tight">
            Get In <span className="font-semibold text-nkd-purple">Touch</span>
          </h1>
          <p className="text-lg text-gray-200 font-light leading-relaxed">
            Ready to dance? Have questions about our classes, studio rentals, or event choreography? Drop us a message or visit our studio in Dubai.
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <MapPin className="w-6 h-6" />, title: "Location", desc: "Mandarin Building, Office 118, Oud Metha, Dubai, UAE" },
            { icon: <Phone className="w-6 h-6" />, title: "WhatsApp", desc: "+971 58 599 1012" },
            { icon: <Mail className="w-6 h-6" />, title: "Email", desc: "info@nkdstudios.com" },
            { icon: <Clock className="w-6 h-6" />, title: "Hours", desc: "Mon - Sun: 10:00 AM - 10:00 PM" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-3xl flex flex-col items-center text-center group border border-gray-100 hover:border-gray-200 transition-all cursor-default shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-nkd-purple mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-medium font-heading text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Left Side: Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-heading font-light text-gray-900 mb-8 tracking-tight">
              Send A <span className="font-medium text-nkd-purple">Message</span>
            </h2>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-50 border border-gray-100 p-8 rounded-3xl flex flex-col items-center text-center justify-center py-16"
                >
                  <div className="w-16 h-16 bg-nkd-purple/10 rounded-full flex items-center justify-center text-nkd-purple mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-2xl font-medium font-heading text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-500 font-light mb-8">Your message has been received. We'll be in touch shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-nkd-purple font-medium text-sm flex items-center gap-2 hover:text-nkd-deep transition-colors"
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
                    <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className={inputClasses} />
                    <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} className={inputClasses} />
                  </div>
                  <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className={inputClasses} />
                  
                  <div className="relative">
                    <select name="interest" required value={formData.interest} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer ${!formData.interest ? 'text-gray-400' : 'text-gray-900'}`}>
                      <option value="" disabled hidden>Inquiry Type</option>
                      <option value="Dance Classes" className="text-gray-900">Dance Classes</option>
                      <option value="Wedding Choreography" className="text-gray-900">Wedding Choreography</option>
                      <option value="Studio Rental" className="text-gray-900">Studio Rental</option>
                      <option value="Private Sessions" className="text-gray-900">Private Sessions</option>
                      <option value="Other" className="text-gray-900">Other Inquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  <textarea name="message" placeholder="Your Message..." rows="4" required value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`}></textarea>

                  <button type="submit" className="w-full bg-nkd-purple hover:bg-nkd-deep text-white py-4 rounded-2xl font-medium tracking-wide transition-colors flex items-center justify-center gap-2 group">
                    Submit Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: Map */}
          <div className="w-full lg:w-1/2 min-h-[400px] bg-gray-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7297078318995!2d55.31295247610669!3d25.246039577681342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d21c97a7e87%3A0xc3b8a6a68cdceb0!2sMandarin%20Building!5e0!3m2!1sen!2sae!4v1705609340325!5m2!1sen!2sae" 
              className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border-0"
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
