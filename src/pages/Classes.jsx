import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Calendar, MapPin, Tag, User, Video, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Classes() {
  const [selectedDay, setSelectedDay] = useState('All');
  const [selectedInstructor, setSelectedInstructor] = useState('All');

  const daysOfWeek = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const instructors = ['All', 'Nidhi', 'Meerra', 'Jhalak', 'Khadija', 'Praseeth', 'Priya'];

  const inPersonClasses = [
    { id: 1, name: "Kids Weekday", instructor: "Meerra", days: ["Tuesday", "Wednesday"], time: "6-7pm", level: "Age 7-12", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Bolly Beginners Weekend", instructor: "Nidhi", days: ["Saturday", "Sunday"], time: "2-3pm", level: "Beginner", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Freestyle Teens", instructor: "Nidhi", days: ["Sunday", "Monday"], time: "Sun 7-8pm, Mon 6-7pm", level: "Teens", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Bolly Intermediate", instructor: "Nidhi", days: ["Wednesday", "Sunday"], time: "8-9pm", level: "Intermediate", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Semi-classical Weekend", instructor: "Meerra", days: ["Saturday", "Sunday"], time: "2-3pm", level: "All Levels", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Semi-classical Weekday", instructor: "Meerra", days: ["Monday", "Thursday"], time: "7-8pm", level: "All Levels", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Bolly Beginners Weekday", instructor: "Meerra", days: ["Monday", "Thursday"], time: "8-9pm", level: "Beginner", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Girly Hop", instructor: "Jhalak", days: ["Thursday", "Friday"], time: "7-8pm", level: "All Levels", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Hip Hop Advanced", instructor: "Jhalak", days: ["Tuesday", "Thursday"], time: "6-7pm", level: "Advanced", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Bolly Fit", instructor: "Jhalak", days: ["Tuesday", "Saturday"], time: "Tue 7-8pm, Sat 5-6pm", level: "Fitness", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Kids Batch Weekend", instructor: "Khadija", days: ["Saturday", "Sunday"], time: "10-11am", level: "Age 7-12", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
    { id: 12, name: "Lachak Ladies", instructor: "Khadija", days: ["Friday", "Saturday"], time: "Fri 10-11am, Sat 12-1pm", level: "Ladies Only", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80" },
    { id: 13, name: "Fusion Beginners", instructor: "Jhalak", days: ["Saturday", "Sunday"], time: "4-5pm", level: "Beginner", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" },
    { id: 14, name: "Bhangra Beginners", instructor: "Khadija", days: ["Friday", "Saturday"], time: "Fri 7-8pm, Sat 6-7pm", level: "Beginner", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
    { id: 15, name: "Contemporary", instructor: "Praseeth", days: ["Thursday", "Saturday"], time: "Thu 8-9pm, Sat 7-8pm", level: "All Levels", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80" },
    { id: 16, name: "Belly Dancing", instructor: "Priya", days: ["Sunday"], time: "10-11am", level: "All Levels", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" },
    { id: 17, name: "Kids Juniors", instructor: "Khadija", days: ["Saturday", "Sunday"], time: "11-12pm", level: "Age 3-6", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" }
  ];

  const onlineClasses = [
    { id: 101, name: "Semi Classical", instructor: "Meerra", days: ["Monday", "Saturday"], time: "Mon & Sat IST 1:30-2:30pm", price: "75", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80" },
    { id: 102, name: "Hip Hop", instructor: "Jhalak", days: ["Tuesday", "Sunday"], time: "Tue & Sun IST 2:30-3:30pm", price: "60", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
    { id: 103, name: "Lachak Ladies", instructor: "Khadija", days: ["Thursday", "Sunday"], time: "Thu IST 11:30-12:30pm, Sun IST 1:30-2:30pm", price: "70", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" }
  ];

  const filteredInPerson = useMemo(() => {
    return inPersonClasses.filter(cls => {
      const dayMatch = selectedDay === 'All' || cls.days.includes(selectedDay);
      const instructorMatch = selectedInstructor === 'All' || cls.instructor === selectedInstructor;
      return dayMatch && instructorMatch;
    });
  }, [selectedDay, selectedInstructor]);

  const filteredOnline = useMemo(() => {
    return onlineClasses.filter(cls => {
      const dayMatch = selectedDay === 'All' || cls.days.includes(selectedDay);
      const instructorMatch = selectedInstructor === 'All' || cls.instructor === selectedInstructor;
      return dayMatch && instructorMatch;
    });
  }, [selectedDay, selectedInstructor]);

  return (
    <div className="bg-white min-h-screen text-gray-900 pb-24">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 mb-16 flex flex-col items-center justify-center text-center overflow-hidden min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1920&q=80"
            alt="Classes Hero"
            className="w-full h-full object-cover grayscale mix-blend-overlay"
          />
        </div>
        <div className="relative z-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-light text-white mb-6 uppercase tracking-tight">
            Schedule & <span className="font-semibold text-nkd-purple">Batches</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg font-light">
            Find the perfect class for your style and schedule. Filter by day or your favorite instructor.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Pricing Info Banner */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-16 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <h3 className="text-2xl font-heading font-medium text-gray-900 mb-4">In-Studio Pricing</h3>
            <p className="text-gray-600 font-light mb-3 text-sm sm:text-base">
              <span className="font-semibold text-nkd-purple text-xl mr-1">AED 400</span> / single person (8 classes)
            </p>
            <p className="text-gray-600 font-light text-sm sm:text-base">
              <span className="font-semibold text-nkd-purple text-xl mr-1">AED 350</span> / per person if you bring a friend (8 classes)
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 max-w-sm">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2 text-sm"><Info className="w-4 h-4 text-nkd-purple" /> Please Note</h4>
            <ul className="text-sm text-gray-500 font-light space-y-1">
              <li>1. Once signed up, no refunds will be issued.</li>
              <li>2. All classes are valid for 3 months.</li>
            </ul>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white sticky top-[80px] z-30 py-6 mb-12 border-b border-gray-100">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-900">Filters</span>
            </div>

            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              {/* Day Filter */}
              <div className="relative">
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 pl-4 pr-10 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-nkd-purple/20 focus:border-nkd-purple transition-all cursor-pointer"
                >
                  <option value="All" disabled className="hidden">Day</option>
                  {daysOfWeek.map(day => <option key={day} value={day}>{day === 'All' ? 'All Days' : day}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>

              {/* Instructor Filter */}
              <div className="relative">
                <select
                  value={selectedInstructor}
                  onChange={(e) => setSelectedInstructor(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 pl-4 pr-10 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-nkd-purple/20 focus:border-nkd-purple transition-all cursor-pointer"
                >
                  <option value="All" disabled className="hidden">Instructor</option>
                  {instructors.map(inst => <option key={inst} value={inst}>{inst === 'All' ? 'All Instructors' : inst}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>

              {/* Reset */}
              {(selectedDay !== 'All' || selectedInstructor !== 'All') && (
                <button
                  onClick={() => { setSelectedDay('All'); setSelectedInstructor('All'); }}
                  className="text-nkd-purple text-sm font-medium hover:underline ml-2"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* IN-PERSON BATCHES */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="text-nkd-purple w-6 h-6" />
            <h2 className="text-3xl font-heading font-light text-gray-900 uppercase">In-Studio <span className="font-medium">Batches</span></h2>
          </div>

          {filteredInPerson.length > 0 ? (
            <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
              <AnimatePresence>
                {filteredInPerson.map((cls) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={cls.id}
                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="h-32 md:h-48 relative overflow-hidden bg-gray-100">
                      <img src={cls.image} alt={cls.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold text-nkd-purple uppercase tracking-wider md:tracking-widest shadow-sm">
                        {cls.level}
                      </div>
                    </div>
                    
                    <div className="p-3 md:p-6 flex-grow flex flex-col">
                      <h3 className="text-base md:text-xl font-heading font-medium text-gray-900 mb-3 md:mb-4 leading-tight">{cls.name}</h3>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <div className="flex items-center text-gray-600 text-xs md:text-sm font-light">
                          <User className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 md:mr-3 text-gray-400 shrink-0" />
                          {cls.instructor}
                        </div>
                        <div className="flex items-start text-gray-600 text-xs md:text-sm font-light">
                          <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 md:mr-3 text-gray-400 shrink-0 mt-0.5" />
                          <span>{cls.time} <br/> <span className="text-[10px] md:text-xs text-gray-400">({cls.days.join(', ')})</span></span>
                        </div>
                      </div>
                      
                      <a href="https://wa.me/971585991012" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-gray-50 hover:bg-nkd-purple text-gray-900 hover:text-white py-2 md:py-3 rounded-full text-[10px] md:text-sm font-medium transition-colors border border-gray-200 hover:border-nkd-purple">
                        Inquire
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-500 font-light">No in-studio classes found for these filters.</p>
            </div>
          )}
        </div>

        {/* ONLINE BATCHES */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Video className="text-nkd-purple w-6 h-6" />
            <h2 className="text-3xl font-heading font-light text-gray-900 uppercase">Online <span className="font-medium">Schedule 2026</span></h2>
          </div>

          {filteredOnline.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredOnline.map((cls) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={cls.id}
                    className="group bg-gradient-to-br from-gray-900 to-nkd-deep rounded-3xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col text-white"
                  >
                    <div className="h-48 relative overflow-hidden bg-gray-800">
                      <img src={cls.image} alt={cls.name} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-red-500/90 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div> Live
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-heading font-medium mb-4">{cls.name}</h3>

                      <div className="space-y-3 mb-6 flex-grow">
                        <div className="flex items-center text-gray-300 text-sm font-light">
                          <User className="w-4 h-4 mr-3 text-gray-400 shrink-0" />
                          {cls.instructor}
                        </div>
                        <div className="flex items-start text-gray-300 text-sm font-light">
                          <Calendar className="w-4 h-4 mr-3 text-gray-400 shrink-0 mt-0.5" />
                          <span>{cls.time} <br /> <span className="text-xs text-gray-500">({cls.days.join(', ')})</span></span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400">Price</span>
                          <span className="font-semibold text-lg">AED {cls.price}</span>
                        </div>
                        <Link to={`/checkout/${cls.id}`} className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-500 font-light">No online classes found for these filters.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
