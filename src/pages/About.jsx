import { motion } from 'framer-motion';

export default function About() {
  const team = [
    { name: "Nidhi Kumar", role: "Founder & Creative Director", bio: "Nidhi Kumar is the founder and driving force behind NKD Studios. What began as a passion for dance and a small community she started over 10 years ago has grown into one of Dubai’s most vibrant dance and creative spaces. A woman entrepreneur building her dream in the UAE, Nidhi wears many hats - content creator, dance teacher, choreographer, business owner, and creative director.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" },
    { name: "Meerra", role: "Lead Instructor | Semi-Classical Specialist", bio: "Meerra brings grace and expression to every class with her expertise in semi-classical dance. Her teaching style focuses on technique, storytelling, and helping students build confidence through movement.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" },
    { name: "Jhalak", role: "Lead Instructor | Hip-Hop Specialist", bio: "Known for her dynamic energy and powerful choreography, Jhalak specializes in hip-hop styles. She inspires students to explore creativity and performance with confidence.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" },
    { name: "Khadija", role: "Lead Instructor | Kids & Bhangra", bio: "Khadija leads our kids’ and Bhangra batches with enthusiasm and positivity. Her vibrant teaching style creates a fun and supportive environment where dancers can learn and grow.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" },
    { name: "Sarah", role: "Studio Manager", bio: "Sarah oversees the day-to-day operations of NKD Studios, ensuring everything runs smoothly. She is dedicated to creating a seamless and welcoming experience for every student and family.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
    { name: "Riya", role: "Social Media Manager", bio: "Riya leads the creative and digital presence of NKD Studios. From content creation to community engagement, she brings the studio’s energy and vision to life across all social platforms.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 font-body overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 mb-16 flex flex-col items-center justify-center text-center overflow-hidden min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1920&q=80" 
            alt="About Hero" 
            className="w-full h-full object-cover grayscale mix-blend-overlay"
          />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-light text-white mb-6 uppercase tracking-tight">
            About <span className="font-semibold text-nkd-purple">NKD Studios</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
            Founded in 2021 by Nidhi Kumar, NKD Studios is one of Dubai’s fastest-growing dance and content creation spaces, built on a passion for movement, creativity, and community.
          </p>
        </div>
      </section>

      {/* 2. Story Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden h-[600px] shadow-sm bg-gray-50"
          >
            <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80" alt="Studio Community" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-heading font-medium text-gray-900 mb-4">Beyond the Classroom</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Powered by a dedicated team, the studio offers multiple dance styles, workshops, and experiences for dancers and creators of all levels. Beyond the classroom, NKD Studios brings dance to life across the UAE through spectacular events, wedding choreographies, sangeets, corporate shows, stage performances, brand activations, and private celebrations.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-heading font-medium text-gray-900 mb-4">Dance is for Everyone</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                From intimate family functions to large-scale productions, we create unforgettable experiences that blend entertainment, creativity, and storytelling. At NKD Studios, we believe dance is for everyone. Our space is designed not only to train dancers but also to inspire creators, performers, and artists to express themselves with confidence.
              </p>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <p className="text-gray-600 italic font-light">
                "With a vision to become one of the biggest dance and creative communities in the UAE, we aim to connect people through movement and bring together artists and dance forms from around the world under one roof."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Meet the Team (Full Bios) */}
      <section className="py-12 md:py-24 bg-gray-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-light text-gray-900 mb-6">Meet the <span className="font-medium text-nkd-purple">Team</span></h2>
            <p className="text-gray-500 font-light text-lg">The passionate artists behind NKD Studios.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row gap-8 items-start group"
              >
                <div className="w-full sm:w-2/5 aspect-[4/5] shrink-0 rounded-2xl overflow-hidden bg-white shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="w-full sm:w-3/5 pt-2">
                  <h3 className="text-2xl font-heading font-medium text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-nkd-purple text-sm font-semibold tracking-wide uppercase mb-4">{member.role}</p>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Milestones & Achievements */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center border-t border-gray-100">
        <h2 className="text-3xl md:text-5xl font-heading font-light text-gray-900 mb-16">Studio <span className="font-medium text-nkd-purple">Milestones</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-heading font-light text-nkd-purple mb-4">150+</h3>
            <p className="text-gray-600 font-medium mb-3">Weddings & Sangeets</p>
            <p className="text-gray-400 font-light text-sm">Choreographed creating unforgettable moments for families across the UAE and beyond.</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-heading font-light text-nkd-purple mb-4">Top</h3>
            <p className="text-gray-600 font-medium mb-3">Global Brands</p>
            <p className="text-gray-400 font-light text-sm">Collaborated with Pepsi, Samsung, Papa Johns, Sharaf DG, Jashanmal, and more.</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-5xl font-heading font-light text-nkd-purple mb-4">10+</h3>
            <p className="text-gray-600 font-medium mb-3">Showcases & Events</p>
            <p className="text-gray-400 font-light text-sm">Hosted our own showcases, spotlighting the incredible talent of our community.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
