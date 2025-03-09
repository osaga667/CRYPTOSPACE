
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10', 'opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(248, 248, 248, 0.8) 0%, rgba(240, 240, 240, 0.9) 80%)', 
          backgroundSize: 'cover',
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center space-y-12 md:space-y-16">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200&h=800"
            alt="Sophisticated technology"
            className="w-full max-w-3xl rounded-2xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.2)] transform opacity-0 translate-y-10 transition-all duration-1000 ease-out-expo"
          />
          
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight opacity-0 translate-y-10 transition-all duration-1000 ease-out-expo delay-300"
          >
            <span className="block">Minimalism meets innovation</span>
            <span className="block mt-2">in perfect harmony.</span>
          </h1>
          
          <p
            ref={subheadingRef}
            className="max-w-2xl mx-auto text-base md:text-lg text-primary/70 opacity-0 translate-y-10 transition-all duration-1000 ease-out-expo delay-500"
          >
            Designed with intention. Crafted with precision. Experience technology that seamlessly integrates into your life while elevating every interaction.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out-expo delay-700"
          >
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/10 hover:scale-105 active:scale-100">
              Explore Products
            </button>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium transition-all hover:shadow-lg hover:bg-secondary/80 active:bg-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
