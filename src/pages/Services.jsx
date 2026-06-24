import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "wedding",
      title: "Wedding Choreography",
      subtitle: "Make your special day unforgettable",
      desc: "From elegant couple dances to massive family sangeet performances, our expert choreographers will create bespoke routines tailored to your style, song choices, and skill level. We handle everything from conceptualization to final rehearsals.",
      features: ["Sangeet Performances", "Couple First Dance", "Bridal Entrances", "Virtual Rehearsals Available"],
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      link: "/contact"
    },
    {
      id: "performances",
      title: "Corporate Performances",
      subtitle: "Elevate your next event",
      desc: "Looking for high-energy entertainment? Our professional dance crews deliver spectacular performances for corporate galas, brand launches, and award ceremonies. We can customize our acts to align perfectly with your brand's message and theme.",
      features: ["Flash Mobs", "Themed Productions", "Brand Activations", "Interactive Workshops"],
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
      link: "/contact"
    },
    {
      id: "rental",
      title: "Studio Rental",
      subtitle: "Your creative playground",
      desc: "Our premium, fully-equipped studios are available for rent. Perfect for independent creators, videographers, photographers, and dance crews needing a professional space to rehearse or shoot content.",
      features: ["Professional Lighting", "Sound Systems", "Sprung Dance Floors", "Changing Rooms"],
      img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1000&q=80",
      link: "/contact"
    },
    {
      id: "private",
      title: "Private Sessions",
      subtitle: "One-on-one focused training",
      desc: "Fast-track your progress with personalized attention. Whether you're preparing for an audition, wanting to master a specific style, or simply prefer learning in a private setting, our instructors will design a curriculum just for you.",
      features: ["Flexible Scheduling", "Customized Curriculum", "All Skill Levels", "Progress Tracking"],
      img: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1000&q=80",
      link: "/contact"
    }
  ];

  return (
    <div className="bg-nkd-dark min-h-screen text-nkd-white pb-24">
      
      {/* Hero Section */}
      <section className="bg-nkd-dark pt-20 pb-16 section-container text-center border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-lg md:text-5xl font-heading font-bold uppercase mb-4">Our <span className="text-nkd-purple">Services</span></h1>
          <div className="w-24 h-1 bg-nkd-purple mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Beyond our daily classes, NKD Studios offers a range of premium services to elevate your events and creative projects.</p>
        </motion.div>
      </section>

      {/* Alternating Service Sections */}
      <div className="max-w-[1920px] mx-auto space-y-0">
        {services.map((service, idx) => (
          <section key={service.id} className={`py-20 section-container ${idx % 2 !== 0 ? 'bg-nkd-offwhite' : 'bg-nkd-dark border-b border-gray-100'}`}>
            <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? '' : 'lg:flex-row-reverse'}`}>
              
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-nkd-dark/5"></div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <h4 className="text-nkd-purple font-bold uppercase tracking-widest mb-2">{service.subtitle}</h4>
                <h2 className="text-lg md:text-4xl font-heading font-bold uppercase mb-6 text-nkd-white">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.desc}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-nkd-white font-medium">
                      <div className="w-2 h-2 bg-nkd-purple rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={service.link} className="inline-block border-2 border-nkd-purple text-nkd-purple hover:bg-nkd-purple hover:text-[#ffffff] px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all">
                  Inquire Now
                </Link>
              </motion.div>

            </div>
          </section>
        ))}
      </div>

    </div>
  );
}
