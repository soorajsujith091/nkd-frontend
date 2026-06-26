import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const cardThemes = [
  { bg: "bg-[#813f98]", text: "text-white", subtext: "text-white/80", fill: "fill-[#813f98]" },
  { bg: "bg-white", text: "text-[#1e1e1e]", subtext: "text-gray-600", fill: "fill-white" },
  { bg: "bg-[#1e1e1e]", text: "text-white", subtext: "text-gray-400", fill: "fill-[#1e1e1e]" },
];

const HomeTeamCard = ({ member, theme, idx }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [member.bio]);

  return (
    <motion.div
      className="relative min-w-[260px] w-[260px] md:min-w-[320px] md:w-[320px] rounded-3xl overflow-hidden snap-start shrink-0 group flex flex-col shadow-xl cursor-pointer bg-gray-200"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      {/* Top Image Section */}
      <div className="relative h-[292px] md:h-[325px] w-full overflow-hidden shrink-0">
        <img 
          src={member.image || member.img || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'} 
          alt={`NKD Studios team member ${member.name}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        {/* SVG Curve Divider */}
        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className={`absolute bottom-0 left-0 w-full h-12 md:h-16 z-10 ${theme.fill}`}>
          <path d="M0,50 L0,20 C30,20 60,0 100,0 L100,50 Z" />
        </svg>
      </div>

      {/* Bottom Text Section */}
      <div className={`relative flex-grow w-full ${theme.bg} p-6 pt-2 flex flex-col z-20`}>
        <div>
          <h3 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-1 leading-none uppercase tracking-tight`} style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            {member.name.split(' ').map((n, i) => (
              <span key={i} className="block">{n}</span>
            ))}
          </h3>
          <p className={`${theme.subtext} text-sm mt-3 font-medium`} style={{ fontFamily: 'General Sans, sans-serif' }}>{member.role}</p>
        </div>
        
        <div className="relative mt-4 z-30">
          <div 
            ref={textRef}
            className={`${theme.subtext} text-xs leading-relaxed ${isExpanded ? 'hidden' : 'line-clamp-2'}`} style={{ fontFamily: 'General Sans, sans-serif' }}
          >
            {member.bio}
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className={`${theme.subtext} text-xs leading-relaxed`} style={{ fontFamily: 'General Sans, sans-serif' }}>
                  {member.bio}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {isOverflowing && (
            <button
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
              className={`mt-2 text-xs font-bold uppercase tracking-wider ${theme.text} hover:opacity-80 transition-opacity flex items-center gap-1 focus:outline-none`}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isExpanded ? 'less' : 'more'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </motion.span>
              </AnimatePresence>
            </button>
          )}
        </div>
        
        {/* Decorative abstract logo shape */}
        <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 100 100" className={theme.text}>
            <path fill="currentColor" d="M70,30 C70,13.431 56.569,0 40,0 C23.431,0 10,13.431 10,30 C10,37.337 12.631,44.062 17.025,49.256 C8.411,54.402 2.668,64.249 3.018,75.459 C3.606,94.341 19.349,109.28 38.231,108.692 C46.126,108.446 53.376,105.109 58.744,100 C63.938,104.394 70.663,107.025 78,107.025 C94.569,107.025 108,93.594 108,77.025 C108,60.456 94.569,47.025 78,47.025 C75.253,47.025 72.593,47.394 70.088,48.077 C70.03,42.133 70,36.111 70,30 Z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeTeamCard;
