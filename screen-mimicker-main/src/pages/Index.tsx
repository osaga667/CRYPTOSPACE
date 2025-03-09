
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  // State for the stars in the background
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; delay: string }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; top: string; left: string; delay: string }[]>([]);

  useEffect(() => {
    // Create stars for the background
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        delay: `${Math.random() * 5}s`
      }));
      setStars(newStars);
      
      // Generate fewer shooting stars
      const newShootingStars = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 70}%`,
        left: `${Math.random() * 70}%`,
        delay: `${Math.random() * 15 + 5}s`
      }));
      setShootingStars(newShootingStars);
    };

    generateStars();
    
    // Smooth scroll behavior for entire page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Add scroll-based animations
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.documentElement.style.setProperty('--scroll', `${scrollPosition}`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen antialiased overflow-x-hidden relative bg-gradient-to-b from-[#0a1128] via-[#1a1b4b] to-[#3c1053]">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animation: `twinkle 5s infinite ${star.delay}`
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animation: `shooting-star 3s linear infinite ${star.delay}`
          }}
        />
      ))}
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Space Crypto
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 font-exo mb-12">
              Explore the universe of cryptocurrency with our next-generation platform
            </p>
            
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-500/10 mb-16">
              <h2 className="text-2xl font-orbitron text-white mb-6">Enter the Crypto Universe</h2>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-100">
                  Launch App
                </button>
                <button className="px-8 py-4 bg-transparent border border-purple-500 text-white rounded-full font-medium transition-all hover:bg-purple-500/20 active:bg-purple-500/10">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              {['Security', 'Innovation', 'Community'].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <span className="text-cyan-400 text-2xl">✦</span>
                  </div>
                  <h3 className="text-xl font-orbitron text-white mb-3">{item}</h3>
                  <p className="text-gray-400 font-exo">
                    Experience the next generation of cosmic crypto technology.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
