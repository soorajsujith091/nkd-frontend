import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamCard = ({ member, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);
  
  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [member.bio]);

  const initial = member.name ? member.name.charAt(0).toUpperCase() : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-[#ffffff] rounded-2xl p-6 border border-[#e5e5e5] shadow-sm hover:border-[#813f98] hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-[#813f98]/10 text-[#813f98] flex items-center justify-center text-xl font-bold shrink-0">
          {initial}
        </div>
        <div>
          <h3 className="font-bold text-[#1e1e1e] text-lg font-['Helvetica'] leading-tight">{member.name}</h3>
          <p className="text-[#813f98] text-xs mt-1 font-light font-['General_Sans']">{member.role}</p>
        </div>
      </div>
      
      <div className="relative flex-grow">
        <div 
          ref={textRef}
          className={`text-[#444444] text-sm font-light font-['General_Sans'] leading-relaxed ${isExpanded ? 'hidden' : 'line-clamp-3'}`}
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
              <div className="text-[#444444] text-sm font-light font-['General_Sans'] leading-relaxed">
                {member.bio}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isOverflowing && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-[#813f98] text-sm font-medium cursor-pointer self-start focus:outline-none transition-opacity hover:opacity-80 border-none bg-transparent p-0"
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
    </motion.div>
  );
};

export default TeamCard;
