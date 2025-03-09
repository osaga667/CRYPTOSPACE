
import React, { useEffect, useRef } from 'react';

const Product = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            
            if (entry.target === imageRef.current) {
              entry.target.classList.add('translate-x-0');
              entry.target.classList.remove('-translate-x-10');
            }
            
            if (entry.target === contentRef.current) {
              entry.target.classList.add('translate-x-0');
              entry.target.classList.remove('translate-x-10');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200&h=800"
              alt="Elegant product showcase"
              className="rounded-2xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] opacity-0 -translate-x-10 transition-all duration-1000 ease-out-expo"
            />
          </div>
          
          <div 
            ref={contentRef}
            className="order-1 md:order-2 opacity-0 translate-x-10 transition-all duration-1000 ease-out-expo delay-300"
          >
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
              Essential
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Experience perfection in every detail</h2>
            <p className="text-muted-foreground mb-8">
              Crafted with meticulous attention to detail, our products seamlessly blend innovation with simplicity. From the materials we select to the technology we develop, every aspect is designed to elevate your experience.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Ultra-responsive interface",
                "Sustainable materials",
                "Precision engineering",
                "Intuitive interaction"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/10 hover:scale-105 active:scale-100">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
