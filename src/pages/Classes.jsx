import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';

const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const instructors = ['All', 'Instructor 1', 'Instructor 2', 'Instructor 3', 'Instructor 4'];

const classesData = [
  { id: 1, name: "Bollywood Basics", instructor: "Instructor 1", day: "Monday", time: "6:00 PM", duration: "60 min", level: "Beginner", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Hip Hop Groove", instructor: "Instructor 2", day: "Monday", time: "7:30 PM", duration: "60 min", level: "Intermediate", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Bhangra Beats", instructor: "Instructor 3", day: "Tuesday", time: "6:00 PM", duration: "60 min", level: "Beginner", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Semi Classical", instructor: "Instructor 4", day: "Tuesday", time: "7:30 PM", duration: "60 min", level: "Advanced", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Bollywood Advanced", instructor: "Instructor 1", day: "Wednesday", time: "6:00 PM", duration: "60 min", level: "Advanced", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Kids Dance", instructor: "Instructor 2", day: "Wednesday", time: "4:00 PM", duration: "45 min", level: "Beginner", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Sangeet Special", instructor: "Instructor 3", day: "Thursday", time: "6:00 PM", duration: "60 min", level: "Intermediate", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Hip Hop Advanced", instructor: "Instructor 4", day: "Thursday", time: "7:30 PM", duration: "60 min", level: "Advanced", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "Bollywood Fusion", instructor: "Instructor 1", day: "Friday", time: "6:00 PM", duration: "60 min", level: "Intermediate", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80" },
  { id: 10, name: "Bhangra Advanced", instructor: "Instructor 2", day: "Friday", time: "7:30 PM", duration: "60 min", level: "Advanced", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" },
  { id: 11, name: "Kids Bollywood", instructor: "Instructor 3", day: "Saturday", time: "10:00 AM", duration: "45 min", level: "Beginner", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
  { id: 12, name: "Teen Hip Hop", instructor: "Instructor 4", day: "Saturday", time: "11:30 AM", duration: "60 min", level: "Intermediate", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80" },
  { id: 13, name: "Bollywood Masterclass", instructor: "Instructor 1", day: "Saturday", time: "2:00 PM", duration: "90 min", level: "Advanced", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" },
  { id: 14, name: "Semi Classical Basics", instructor: "Instructor 2", day: "Saturday", time: "4:00 PM", duration: "60 min", level: "Beginner", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
  { id: 15, name: "Sunday Groove", instructor: "Instructor 3", day: "Sunday", time: "10:00 AM", duration: "60 min", level: "Intermediate", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80" },
  { id: 16, name: "Family Dance", instructor: "Instructor 4", day: "Sunday", time: "11:30 AM", duration: "60 min", level: "Beginner", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" },
  { id: 17, name: "Online Bollywood", instructor: "Instructor 1", day: "Sunday", time: "6:00 PM", duration: "60 min", level: "All Levels", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
];

export default function Classes() {
  const [activeDay, setActiveDay] = useState('All');
  const [activeInstructor, setActiveInstructor] = useState('All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredClasses = useMemo(() => {
    return classesData.filter(cls => {
      const matchDay = activeDay === 'All' || cls.day === activeDay;
      const matchInstructor = activeInstructor === 'All' || cls.instructor === activeInstructor;
      return matchDay && matchInstructor;
    });
  }, [activeDay, activeInstructor]);

  return (
    <div className="bg-nkd-dark min-h-screen text-nkd-white pb-24">
      
      {/* Hero Section */}
      <section className="bg-nkd-dark pt-20 pb-12 section-container text-center border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-lg md:text-5xl font-heading font-bold uppercase mb-4">Our <span className="text-nkd-purple">Schedule</span></h1>
          <div className="w-24 h-1 bg-nkd-purple mx-auto"></div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="bg-nkd-offwhite py-4 md:py-8 px-6 md:px-12 lg:px-20 border-y md:border border-gray-200 sticky top-[72px] z-30 md:mx-8 lg:mx-12 md:rounded-[2.5rem] md:mt-8">
        <div className="max-w-[1920px] mx-auto">
          
          {/* Mobile Filter Toggle */}
          <div className="flex lg:hidden justify-between items-center">
            <span className="font-bold text-gray-700 uppercase">Filters</span>
            <button 
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="p-2 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-300 transition"
            >
              {isMobileFilterOpen ? <X size={20} /> : <Filter size={20} />}
            </button>
          </div>

          <div className={`${isMobileFilterOpen ? 'flex mt-6' : 'hidden'} lg:flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center`}>
          
          <div className="w-full lg:w-auto">
            <p className="text-sm font-bold uppercase text-gray-500 mb-2">Filter by Day</p>
            <div className="flex flex-wrap gap-2">
              {days.map(day => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    activeDay === day 
                    ? 'bg-nkd-purple text-[#ffffff]' 
                    : 'bg-[#ffffff] text-gray-600 hover:border-nkd-purple hover:text-nkd-purple border border-gray-200 shadow-sm'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <p className="text-sm font-bold uppercase text-gray-500 mb-2">Filter by Instructor</p>
            <div className="flex flex-wrap gap-2">
              {instructors.map(instructor => (
                <button
                  key={instructor}
                  onClick={() => setActiveInstructor(instructor)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    activeInstructor === instructor 
                    ? 'bg-nkd-purple text-[#ffffff]' 
                    : 'bg-[#ffffff] text-gray-600 hover:border-nkd-purple hover:text-nkd-purple border border-gray-200 shadow-sm'
                  }`}
                >
                  {instructor}
                </button>
              ))}
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="px-6 md:px-0 max-w-[1920px] mx-auto mt-12 md:mx-8 lg:mx-12">
        <AnimatePresence mode="popLayout">
          {filteredClasses.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredClasses.map((cls, idx) => (
                <motion.div
                  layout
                  key={cls.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden group shadow-md"
                >
                  <img src={cls.image} alt={cls.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none"></div>
                  
                  <div className="absolute top-4 right-4 z-20 bg-white/30 backdrop-blur-md text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/20">
                    {cls.level}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold font-heading text-white mb-1 tracking-wide">{cls.name}</h3>
                    <p className="text-white/80 text-sm mb-3">{cls.day} <span className="mx-1">|</span> {cls.time}</p>
                    
                    <div className="flex items-center text-white text-xs font-medium mb-4">
                      <svg className="w-4 h-4 text-red-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                      Inst: {cls.instructor}
                    </div>

                    <Link to={`/checkout/${cls.id}`} className="w-full bg-white/10 hover:bg-nkd-purple border border-white/30 backdrop-blur-md text-white text-center py-2.5 rounded-xl font-bold transition-all text-sm shadow-md">
                      Book Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-lg font-heading font-bold uppercase text-gray-400 mb-2">No Classes Found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more options.</p>
              <button 
                onClick={() => { setActiveDay('All'); setActiveInstructor('All'); }}
                className="mt-6 text-nkd-purple font-bold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

    </div>
  );
}
