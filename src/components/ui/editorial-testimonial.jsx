import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "NKD Studios completely transformed my confidence. The instructors are world-class and the energy is unmatched!",
    author: "Sarah M.",
    role: "Dance Student",
    company: "NKD Studios",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    quote: "The choreography for my sister's wedding was incredible. They made it so easy, fun, and absolutely unforgettable.",
    author: "Rahul K.",
    role: "Wedding Client",
    company: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    quote: "Best place to learn dance and meet amazing people. The studio vibe is premium and the classes are always energizing.",
    author: "Aisha T.",
    role: "Regular Student",
    company: "NKD Studios",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
  },
]

export default function TestimonialsEditorial() {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleChange = (index) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1
    handleChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1
    handleChange(newIndex)
  }

  const current = testimonials[active]

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-12 md:py-16">
      {/* Large index number */}
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
        <span
          className="text-[80px] md:text-[120px] font-light leading-none text-gray-900/10 select-none transition-all duration-500"
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {String(active + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 pt-2 md:pt-6">
          {/* Quote */}
          <blockquote
            className={`text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-900 tracking-tight transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            "{current.quote}"
          </blockquote>

          {/* Author info with hover reveal */}
          <div
            className={`mt-8 md:mt-10 group cursor-default transition-all duration-300 delay-100 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-900/10 group-hover:ring-nkd-purple/50 transition-all duration-300">
                <img
                  src={current.image}
                  alt={current.author}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">{current.author}</p>
                <p className="text-sm text-gray-500">
                  {current.role}
                  <span className="mx-2 text-gray-300">/</span>
                  <span className="group-hover:text-nkd-purple transition-colors duration-300">{current.company}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - vertical line selector */}
      <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => handleChange(index)} className="group relative py-4">
                <span
                  className={`block h-px transition-all duration-500 ease-out ${
                    index === active
                      ? "w-10 md:w-12 bg-gray-900"
                      : "w-4 md:w-6 bg-gray-900/20 group-hover:w-6 md:group-hover:w-8 group-hover:bg-gray-900/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-500 tracking-widest uppercase">
            {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-1 self-end sm:self-auto">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full text-gray-400 hover:text-nkd-purple hover:bg-nkd-purple/5 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full text-gray-400 hover:text-nkd-purple hover:bg-nkd-purple/5 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
