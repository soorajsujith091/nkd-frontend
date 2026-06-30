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
    <div className="bg-white min-h-screen text-gray-900 pb-24 font-body overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80" 
            alt="Services Hero" 
            className="w-full h-full object-cover grayscale mix-blend-overlay"
          />
        </div>
        <motion.div
          className="relative z-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-light text-white uppercase mb-6 tracking-tight">Our <span className="font-semibold text-nkd-purple">Services</span></h1>
          <p className="text-gray-200 text-lg font-light leading-relaxed">Beyond our daily classes, NKD Studios offers a range of premium services to elevate your events and creative projects.</p>
        </motion.div>
      </section>

      {/* Alternating Service Sections */}
      <div className="space-y-0">
        {services.map((service, idx) => (
          <section key={service.id} className={`py-24 px-6 md:px-12 ${idx % 2 !== 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}`}>
            <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? '' : 'lg:flex-row-reverse'}`}>
              
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 group ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <img src={service.img} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-white/5"></div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`w-full lg:w-1/2 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <h4 className="text-nkd-purple font-semibold uppercase tracking-widest text-sm mb-3">{service.subtitle}</h4>
                <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6 text-gray-900">{service.title}</h2>
                <p className="text-gray-500 font-light text-lg leading-relaxed mb-8">{service.desc}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                      <div className="w-1.5 h-1.5 bg-nkd-purple rounded-full shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={service.link} className="inline-flex items-center justify-center bg-nkd-purple text-white hover:bg-nkd-deep px-8 py-3.5 rounded-full font-medium tracking-wide transition-all shadow-sm">
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
