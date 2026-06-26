import { motion } from 'framer-motion';
import { useRef } from 'react';
import HomeTeamCard, { cardThemes } from '../components/ui/HomeTeamCard';

export default function About() {
  const teamScrollRef = useRef(null);
  
  const scrollCarousel = (direction) => {
    if (teamScrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      teamScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const team = [
    { id: 1, name: "Nidhi Kumar", role: "Founder & CEO", bio: "A woman entrepreneur building her dream in the UAE. Content creator, dance teacher, choreographer, business owner, and creative director with 4M+ followers. She transformed her passion into one of Dubai's most vibrant dance and creative spaces.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Meerra Jjairaj", role: "Lead Instructor | Semi-Classical Specialist", bio: "Brings grace and expression to every class with expertise in semi-classical dance. Focuses on technique, storytelling, and helping students build confidence through movement.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Jhalak Sharma", role: "Lead Instructor | Hip-Hop Specialist", bio: "Known for dynamic energy and powerful choreography. Inspires students to explore creativity and performance with confidence.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Khadija Fakhruddin", role: "Lead Instructor | Kids & Bhangra", bio: "Leads kids and Bhangra batches with enthusiasm and positivity. Creates a fun and supportive environment where dancers can learn and grow.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Dev", role: "Lead Instructor", bio: "Brings energy and passion to every class at NKD Studios.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Sarrah Hakim", role: "Studio Manager", bio: "Oversees day-to-day operations ensuring a seamless and welcoming experience for every student and family.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Khushi Popat", role: "Social Media Manager", bio: "Leads creative and digital presence across all social platforms bringing the studio energy and vision to life.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
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

      {/* Meet the Team Carousel */}
      <section className="py-16 bg-[#f0efef] px-6 md:px-12 lg:px-24 mx-4 md:mx-8 lg:mx-12 rounded-[2.5rem] md:rounded-[3rem] my-10 overflow-hidden">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold uppercase text-[#1e1e1e]"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              MEET THE <br className="hidden md:block" /><span className="text-[#813f98]">TEAM</span>
            </motion.h2>
            <p className="text-gray-500 max-w-sm text-sm font-body">Our talented instructors and staff are here to help you express yourself and achieve your dance goals.</p>
          </div>

          <div ref={teamScrollRef} className="flex overflow-x-auto pb-10 gap-6 md:gap-8 snap-x hide-scrollbar">
            {team.map((member, idx) => {
              const theme = cardThemes[idx % cardThemes.length];
              return <HomeTeamCard key={member.id} member={member} theme={theme} idx={idx} />;
            })}
          </div>
          
          <div className="flex justify-end gap-3 mt-4 pr-4">
            <button onClick={() => scrollCarousel('left')} className="w-12 h-12 rounded-full border-2 border-[#1e1e1e] flex items-center justify-center text-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-white transition-colors bg-transparent"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
            <button onClick={() => scrollCarousel('right')} className="w-12 h-12 rounded-full border-2 border-[#1e1e1e] flex items-center justify-center text-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-white transition-colors bg-transparent"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
          </div>
        </div>
      </section>

    </div>
  );
}
