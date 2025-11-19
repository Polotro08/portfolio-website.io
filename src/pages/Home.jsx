import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';
//Home.jsx
const InteractiveAvatar = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef(null);
  const startAngleRef = useRef(0);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    if (!isDragging) {
      const animate = () => {
        const currentTime = Date.now();
        const deltaTime = currentTime - lastTimeRef.current;
        lastTimeRef.current = currentTime;

        setRotation(prev => {
          const newRotation = prev + (direction * 0.05 * deltaTime);
          return newRotation % 360;
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      const directionInterval = setInterval(() => {
        setDirection(prev => -prev);
      }, 1500);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        clearInterval(directionInterval);
      };
    }
  }, [isDragging, direction]);

  const handleStart = (clientX, clientY) => {
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    startAngleRef.current = angle - (rotation * Math.PI / 180);
  };

  const handleMove = (clientX, clientY) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    const newRotation = ((angle - startAngleRef.current) * 180 / Math.PI) % 360;
    setRotation(newRotation);
  };

  const handleEnd = () => {
    setIsDragging(false);
    lastTimeRef.current = Date.now();
  };

  const handleMouseDown = (e) => {
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleEnd);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, rotation]);

  return (
    <div className="relative flex items-center justify-center">
      <div 
        ref={containerRef}
        className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        
        <div 
          className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none"
          style={{ transform: `rotate(${rotation}deg)` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            
            <circle
              cx="100"
              cy="100"
              r="95"
              fill="none"
              stroke="url(#ringGradient)"
              strokeWidth="3"
              opacity="0.6"
            />
            
            <circle cx="100" cy="5" r="4" fill="#a855f7">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="195" cy="100" r="4" fill="#ec4899">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="195" r="4" fill="#a855f7">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="5" cy="100" r="4" fill="#ec4899">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
            </circle>
            
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-10">
          <img 
            src={`${import.meta.env.BASE_URL}ralfh.jpg`}
            alt="Profile" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23a855f7" width="200" height="200"/%3E%3Ctext x="100" y="100" text-anchor="middle" dy=".3em" fill="white" font-size="20"%3EPhoto%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>

        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20 animate-bounce z-20">
          <p className="text-xs sm:text-sm font-semibold">💼 Available</p>
        </div>
        
        <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20 z-20">
          <p className="text-xs sm:text-sm font-semibold">🚀 5+ Projects</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 50%)`
        }}
      />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 relative group cursor-pointer"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 md:order-1">
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/30">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                <span className="text-xs sm:text-sm text-purple-300">Welcome to my portfolio</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Creative
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                  Crafting exceptional digital experiences through clean code and innovative design. 
                  Specializing in modern web technologies and user-centric solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 text-center cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Get In Touch</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link
                  to="/resume"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center cursor-pointer"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Download Resume</span>
                  </span>
                </Link>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <span className="text-gray-400 text-xs sm:text-sm">Connect:</span>
                <div className="flex space-x-3">
                  <a href="https://github.com/Polotro08" target="_blank" rel="noopener noreferrer" 
                     className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/ralfh-herrera-806b9b349" target="_blank" rel="noopener noreferrer"
                     className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a href="mailto:calcalan3@gmail.com"
                     className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <InteractiveAvatar />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-24">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '15+', label: 'Technologies' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}