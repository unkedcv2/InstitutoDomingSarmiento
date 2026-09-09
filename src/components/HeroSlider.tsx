import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, BookOpen, Users, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES_HERO } from '../data/colegioData';
import { PageSection } from '../types';
import heroVideo from './video_ok.mp4';

interface HeroSliderProps {
  onNavigate: (section: PageSection) => void;
  onOpenInscripcion: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate, onOpenInscripcion }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay handled if restricted
        });
      }
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES_HERO.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentSlide = SLIDES_HERO[currentIndex];

  const handleCtaClick = () => {
    if (currentSlide.ctaAction === 'inscripcion') {
      onOpenInscripcion();
    } else {
      onNavigate(currentSlide.ctaAction as PageSection);
    }
  };

  const slideIcons = [
    <ShieldCheck key="1" className="w-6 h-6 sm:w-7 sm:h-7 text-[#fac301]" />,
    <BookOpen key="2" className="w-6 h-6 sm:w-7 sm:h-7 text-[#fac301]" />,
    <Users key="3" className="w-6 h-6 sm:w-7 sm:h-7 text-[#fac301]" />,
  ];

  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-[600px] pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-16 md:pb-10 bg-[#000c6b] text-white overflow-hidden flex flex-col justify-between"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Video with Institutional Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#000c6b]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
        >
          <source src="/video_ok.mp4" type="video/mp4" />
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Balanced overlay for prominent video visibility while keeping text perfectly legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000c6b]/85 via-[#000c6b]/50 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000c6b]/90 via-transparent to-[#000c6b]/35" />
      </div>

      {/* Main Slide Content - vertically centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto flex items-center">
        <div className="w-full min-h-[300px] sm:min-h-[340px] md:min-h-[380px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              className="w-full max-w-3xl"
            >
              {/* Element 1: Icon & Badge - Animated with blur */}
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)', y: 12 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(8px)', y: -10 }}
                transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
                className="flex items-center gap-3 mb-4 sm:mb-6"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-white/10 border border-white/15 backdrop-blur-xs">
                  {slideIcons[currentIndex]}
                </div>
                {currentSlide.badge && (
                  <span className="text-xs sm:text-sm tracking-wider uppercase font-semibold text-[#fac301] bg-[#fac301]/10 px-3 py-1 rounded border border-[#fac301]/20">
                    {currentSlide.badge}
                  </span>
                )}
              </motion.div>

              {/* Element 2: Heading Title - Animated with blur */}
              <motion.h1
                initial={{ opacity: 0, filter: 'blur(14px)', y: 14 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(10px)', y: -10 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.15]"
              >
                {currentSlide.title}
              </motion.h1>

              {/* Element 3: Subtitle - Animated with blur */}
              <motion.p
                initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(8px)', y: -8 }}
                transition={{ duration: 0.6, delay: 0.38, ease: 'easeOut' }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl font-normal"
              >
                {currentSlide.subtitle}
              </motion.p>

              {/* Element 4: CTA Buttons - Animated with blur */}
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(6px)', y: -6 }}
                transition={{ duration: 0.55, delay: 0.52, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <button
                  id={`hero-cta-${currentSlide.id}`}
                  onClick={handleCtaClick}
                  className="px-6 py-3.5 bg-[#fac301] hover:bg-[#e5b300] text-[#000c6b] font-bold text-sm sm:text-base rounded-md shadow-lg transition-all flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#fac301] focus:ring-offset-2 focus:ring-offset-[#000c6b]"
                >
                  <span>{currentSlide.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-contact-btn"
                  onClick={() => onNavigate('contacto')}
                  className="px-5 py-3.5 rounded-md border border-white/30 text-white hover:bg-white/10 font-medium text-sm sm:text-base transition-colors backdrop-blur-xs"
                >
                  Vías de Contacto
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Slide Indicators & Scroll Hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {SLIDES_HERO.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir a diapositiva ${idx + 1}: ${slide.title}`}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#fac301] ${
                idx === currentIndex
                  ? 'w-9 sm:w-12 h-2.5 bg-[#fac301]'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Scroll down prompt on desktop */}
        <button
          onClick={() => onNavigate('institucional')}
          className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-[#fac301] transition-colors focus:outline-none group"
        >
          <span>Conocé más</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#fac301]" />
        </button>
      </div>
    </section>
  );
};

