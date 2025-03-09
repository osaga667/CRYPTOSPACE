
import React, { useEffect, useRef } from 'react';

const Testimonial = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'scale-100');
            entry.target.classList.remove('opacity-0', 'scale-95');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-primary text-primary-foreground opacity-0 scale-95 transition-all duration-1000 ease-custom"
    >
      <div className="max-w-4xl mx-auto text-center">
        <svg className="w-12 h-12 mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        
        <p className="text-xl md:text-2xl font-light mb-10 leading-relaxed">
          "The attention to detail is unparalleled. Every interaction feels intentional, every design choice purposeful. It's rare to find products that so perfectly balance form and function."
        </p>
        
        <div>
          <div className="h-12 w-12 rounded-full bg-primary-foreground/10 mx-auto mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=120&h=120" 
              alt="User avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <h4 className="font-medium">Sarah Chen</h4>
          <p className="text-sm opacity-70">Design Director, Visionary Studios</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
