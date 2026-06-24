import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
    // Mock submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-nkd-dark min-h-screen text-nkd-white pb-24">
      
      {/* Hero Section */}
      <section className="bg-nkd-dark pt-20 pb-12 section-container text-center border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-lg md:text-5xl font-heading font-bold uppercase mb-4">Contact <span className="text-nkd-purple">Us</span></h1>
          <div className="w-24 h-1 bg-nkd-purple mx-auto"></div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1920px] mx-auto section-container mt-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-lg font-heading font-bold uppercase mb-6 text-nkd-purple">Get In Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Ready to dance? Have questions about our classes, studio rentals, or event choreography? We'd love to hear from you. Drop us a message or visit our studio in Dubai.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-nkd-offwhite p-4 rounded-full text-nkd-purple shrink-0 border border-gray-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1 text-nkd-white">Studio Location</h4>
                  <p className="text-gray-600">Mandarin Building, Office 118<br/>Oud Metha, Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nkd-offwhite p-4 rounded-full text-nkd-purple shrink-0 border border-gray-200">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1 text-nkd-white">Phone / WhatsApp</h4>
                  <p className="text-gray-600">+971 58 599 1012</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nkd-offwhite p-4 rounded-full text-nkd-purple shrink-0 border border-gray-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1 text-nkd-white">Email</h4>
                  <p className="text-gray-600">hello@nkdstudios.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-nkd-offwhite p-4 rounded-full text-nkd-purple shrink-0 border border-gray-200">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1 text-nkd-white">Working Hours</h4>
                  <p className="text-gray-600">Monday - Sunday: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-nkd-offwhite p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-heading font-bold uppercase mb-8 text-center text-nkd-white">Send A Message</h3>
              
              {isSubmitted ? (
                <div className="bg-nkd-purple/10 border border-nkd-purple text-nkd-white p-6 rounded-2xl text-center">
                  <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                  <p>Your message has been sent successfully. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 border-b border-nkd-white hover:border-nkd-purple hover:text-nkd-purple pb-1 transition-colors font-bold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold uppercase text-gray-500">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple focus:ring-1 focus:ring-nkd-purple transition-colors shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold uppercase text-gray-500">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple focus:ring-1 focus:ring-nkd-purple transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase text-gray-500">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple focus:ring-1 focus:ring-nkd-purple transition-colors shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-bold uppercase text-gray-500">Class Interest / Inquiry Type</label>
                    <select 
                      id="interest" 
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple focus:ring-1 focus:ring-nkd-purple transition-colors shadow-sm"
                    >
                      <option value="">Select an option</option>
                      <option value="Dance Classes">Dance Classes</option>
                      <option value="Wedding Choreography">Wedding Choreography</option>
                      <option value="Studio Rental">Studio Rental</option>
                      <option value="Private Sessions">Private Sessions</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold uppercase text-gray-500">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple focus:ring-1 focus:ring-nkd-purple transition-colors resize-none shadow-sm"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-nkd-purple hover:bg-nkd-deep text-[#ffffff] py-4 rounded-xl font-bold uppercase tracking-wider transition-colors mt-4"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] md:h-[500px] w-full border-t border-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7297078318995!2d55.31295247610669!3d25.246039577681342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d21c97a7e87%3A0xc3b8a6a68cdceb0!2sMandarin%20Building!5e0!3m2!1sen!2sae!4v1705609340325!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="NKD Studios Location"
          className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        ></iframe>
      </section>

    </div>
  );
}
