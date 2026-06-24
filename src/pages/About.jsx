import { motion } from 'framer-motion';

export default function About() {
  const team = [
    { 
      name: 'Nidhi Kumar', 
      role: 'Founder & Head Choreographer', 
      desc: 'Nidhi wears many hats - content creator, dance teacher, choreographer, business owner, and creative director. Through dedication and the power of social media, she transformed her vision into a thriving community.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      name: 'Meerra', 
      role: 'Lead Instructor | Semi-Classical', 
      desc: 'Meerra brings grace and expression to every class. Her teaching focuses on technique, storytelling, and building confidence through movement.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      name: 'Jhalak', 
      role: 'Lead Instructor | Hip-Hop', 
      desc: 'Known for dynamic energy and powerful choreography, Jhalak specializes in hip-hop styles, inspiring creativity and performance.',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      name: 'Khadija', 
      role: 'Lead Instructor | Kids & Bhangra', 
      desc: 'Khadija leads our kids’ batches with enthusiasm and positivity. Her vibrant style creates a supportive environment for growth.',
      img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80' 
    }
  ];

  const milestones = [
    { year: "2021", title: "The Beginning", desc: "NKD Studios was officially founded by Nidhi Kumar with just a small group of passionate dancers." },
    { year: "2022", title: "Growing Community", desc: "Expanded our offerings to include kids classes, hip-hop, and semi-classical batches as our student base tripled." },
    { year: "2023", title: "100+ Events", desc: "Crossed the milestone of choreographing over 100 weddings and corporate events across the UAE." },
    { year: "2024", title: "The Next Level", desc: "Relocated to our current premium boutique studio space to accommodate our massive community of 50k+ students." }
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
          <h1 className="text-lg md:text-5xl font-heading font-bold uppercase mb-4">About <span className="text-nkd-purple">Us</span></h1>
          <div className="w-24 h-1 bg-nkd-purple mx-auto"></div>
        </motion.div>
      </section>

      {/* Story & Vision */}
      <section className="max-w-[1920px] mx-auto section-container mt-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-lg md:text-3xl font-heading font-bold uppercase text-nkd-purple">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2021 by Nidhi Kumar, NKD Studios is Dubai’s fastest-growing premium boutique dance and content creation space, built on a passion for movement, creativity, and community.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Beyond the classroom, we bring dance to life across the UAE through spectacular events, wedding choreographies, sangeets, corporate shows, stage performances, and private celebrations. We create unforgettable experiences that blend entertainment, creativity, and storytelling.
            </p>
            <div className="bg-nkd-offwhite p-8 rounded-3xl border-l-4 border-nkd-purple border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold font-heading uppercase text-nkd-white mb-4">Our Vision</h3>
              <p className="text-gray-600 italic">
                "To become the biggest and most vibrant dance and creative community in the UAE, connecting artists and dance forms from around the world under one roof."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-lg border border-gray-200"
          >
            <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80" alt="NKD Community" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-nkd-dark/10"></div>
          </motion.div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="bg-nkd-offwhite py-24 section-container border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg md:text-3xl font-heading font-bold uppercase text-center mb-16 text-nkd-white">The <span className="text-nkd-purple">Journey</span></h2>
          
          <div className="space-y-12 relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform md:-translate-x-1/2"></div>
            
            {milestones.map((m, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center md:justify-between relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-nkd-purple rounded-full transform -translate-x-1/2 mt-1 md:mt-0 shadow-md z-10"></div>
                
                {/* Content */}
                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`bg-[#ffffff] p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-nkd-purple/30 hover:shadow-md transition-all ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-nkd-purple font-bold text-xl mb-2 block">{m.year}</span>
                    <h3 className="text-lg font-bold font-heading uppercase text-nkd-white mb-3">{m.title}</h3>
                    <p className="text-gray-600">{m.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 section-container max-w-[1920px] mx-auto">
        <h2 className="text-lg md:text-3xl font-heading font-bold uppercase text-center mb-16">Meet The <span className="text-nkd-purple">Team</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-nkd-offwhite rounded-3xl overflow-hidden group border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-80 overflow-hidden relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold font-heading uppercase text-nkd-white mb-1">{member.name}</h3>
                <p className="text-nkd-purple font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
