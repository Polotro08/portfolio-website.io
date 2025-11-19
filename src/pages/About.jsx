import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, BookOpen, Briefcase, Heart, Sparkles, Award, GraduationCap, CookingPot, Music, Monitor, Gamepad2 } from 'lucide-react';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const skills = [
    { name: 'Photoshop', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Typography', level: 90, color: 'from-yellow-500 to-orange-500' },
    { name: 'Color Theory', level: 92, color: 'from-purple-500 to-pink-500' },
    { name: 'Composition', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'Illustrator', level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'Canva', level: 93, color: 'from-pink-500 to-purple-500' }
  ];

  const education = [
    {
      degree: 'Graphic Design Certificate',
      institution: 'Online Design Academy',
      year: '2021',
      description: 'Specialized in digital design and visual communication'
    },
    {
      degree: 'YouTube Thumbnail Mastery Course',
      institution: 'Professional Learning Platform',
      year: '2022',
      description: 'Advanced techniques for high-converting thumbnail design'
    }
  ];

  const hobbies = [
    { icon: CookingPot, name: 'Cooking', description: 'Exploring different Recipes' },
    { icon: Music, name: 'Chilling with tunes', description: 'Listening to Jpop' },
    { icon: Monitor, name: 'Watching Anime', description: 'Watching Waifus Run' },
    { icon: Gamepad2, name: 'Gaming', description: 'Strategy, horror and puzzle games' }
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
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/30">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                <span className="text-xs sm:text-sm text-purple-300">Get to know me</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8 animate-fade-in-delay-1">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">My Story</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate freelance YouTube thumbnail designer dedicated to helping content creators stand out and grow their channels. My journey into design started when I discovered how crucial first impressions are in the digital space.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Over the years, I've worked with diverse YouTube creators across different niches, crafting eye-catching thumbnails that boost click-through rates and engagement. I believe in creating designs that not only look stunning but also tell a story and connect with the target audience.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not designing, you'll find me studying trending content, analyzing what makes thumbnails perform well, and staying updated with the latest design trends to give my clients the competitive edge they need.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">What I Do</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-purple-300">YouTube Thumbnail Design</h3>
                      <p className="text-gray-400 text-sm">Creating scroll-stopping thumbnails that maximize click-through rates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-pink-300">Brand Identity Design</h3>
                      <p className="text-gray-400 text-sm">Developing consistent visual styles that make channels memorable</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-purple-300">A/B Testing & Analytics</h3>
                      <p className="text-gray-400 text-sm">Optimizing designs based on performance data and viewer psychology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-pink-300">Fast Turnaround</h3>
                      <p className="text-gray-400 text-sm">Delivering high-quality designs quickly to keep content schedules on track</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-delay-2">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Skills & Expertise</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 space-y-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-delay-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 space-y-3 group"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-lg text-purple-300 group-hover:text-pink-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-delay-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Hobbies & Interests</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {hobbies.map((hobby, index) => {
                  const Icon = hobby.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group text-center space-y-3"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-purple-400 group-hover:text-pink-400 transition-colors" />
                      </div>
                      <h3 className="font-semibold text-lg">{hobby.name}</h3>
                      <p className="text-gray-400 text-sm">{hobby.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 sm:p-12 border border-white/10 text-center space-y-6 animate-fade-in-delay-5">
              <h2 className="text-3xl sm:text-4xl font-bold">Let's Work Together</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ready to take your YouTube channel to the next level? I'm always excited to work with new creators. 
                Whether you need a single thumbnail or ongoing design support, let's chat!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer"
                >
                  Get In Touch
                </Link>
                <div className="flex space-x-3">
                  <a href="https://github.com/Polotro08" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/ralfh-herrera-806b9b349" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:calcalan3@gmail.com"
                     className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}