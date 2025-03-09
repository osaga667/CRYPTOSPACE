
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-8 transition-all duration-500 ease-custom",
        scrolled 
          ? "backdrop-blur-xl bg-black/40 border-b border-purple-500/20" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/home" 
          className="text-lg font-orbitron font-medium tracking-tight text-white hover:text-cyan-400 transition-colors"
        >
          SpaceCrypto
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Explore", "Planets", "Technologies", "Mission"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-sm font-exo font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          {location.pathname !== "/" && (
            <Link
              to="/"
              className="px-4 py-2 bg-gradient-to-r from-space-purple/80 to-space-cyan/80 text-white rounded-full text-sm font-exo transition-all hover:from-space-purple hover:to-space-cyan"
            >
              Login
            </Link>
          )}
          
          {location.pathname !== "/app" && (
            <Link
              to="/app"
              className={cn(
                "px-4 py-2 rounded-full text-sm font-exo transition-all",
                location.pathname === "/" 
                  ? "bg-black/30 text-white hover:bg-black/50" 
                  : "bg-gradient-to-r from-space-purple/80 to-space-cyan/80 text-white hover:from-space-purple hover:to-space-cyan"
              )}
            >
              Dashboard
            </Link>
          )}
          
          <button className="p-2 rounded-full text-gray-300 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="md:hidden p-2 rounded-full text-gray-300 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
