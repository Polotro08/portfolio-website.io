import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Palette, Sparkles, Eye, ExternalLink, Filter, Youtube, TrendingUp, Users, Clock } from 'lucide-react';

export default function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

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

  // Documentary/History Projects
  const projects = [
    {
      id: 1,
      title: 'Banality of Evil',
      category: 'war-history',
      client: 'Into the Shadows',
      views: '1.4M',
      ctr: '15.8%',
      videoUrl: 'https://www.youtube.com/watch?v=Hyz-drMwzDA',
      image: `${import.meta.env.BASE_URL}public/Banality of Evil.jpg`,
      description: 'Uncover the chilling details of the Wannsee Conference in 1942.',
      tags: ['World War II', 'Holocaust', 'Nazi Germany', 'History', 'Genocide'],
      year: '2023'
    },
    {
      id: 2,
      title: 'The Grisly History of Plastic Surgery',
      category: 'ancient-history',
      client: 'Into the Shadows',
      views: '112k',
      ctr: '18.3%',
      videoUrl: 'https://www.youtube.com/watch?v=b81O3LrECtI',
      image: `${import.meta.env.BASE_URL}images/The Grisly History of Plastic Surgery 3.jpg`,
      description: 'Discover the incredible evolution of plastic surgery in our latest video!',
      tags: ['History of Medicine', 'Plastic Surgery', 'WWI', 'WWII', 'Medical Innovation'],
      year: '2023'
    },
    {
      id: 3,
      title: 'The Underground World of Designer Steroids',
      category: 'ancient-history',
      client: 'Into the Shadows',
      views: '151k',
      ctr: '16.7%',
      videoUrl: 'https://www.youtube.com/watch?v=xzq6XsPErJI',
      image: `${import.meta.env.BASE_URL}images/The Underground World of Designer Steroids.jpg`,
      description: "Uncover the Shocking History of Doping in Sports!",
      tags: ['Sports History', 'Doping', 'Steroids', 'Cheating in Sports', 'BALCO Scandal'],
      year: '2023'
    },
    {
      id: 4,
      title: 'Selby Rail Crash',
      category: 'modern-history',
      client: 'Into the Shadows',
      views: '108k',
      ctr: '14.9%',
      videoUrl: 'https://www.youtube.com/watch?v=ykwJvO6ZuRo',
      image: `${import.meta.env.BASE_URL}images/Selby Rail Crash.jpg`,
      description: "Discover the chilling and heart-wrenching story of the Selby Rail Crash.",
      tags: ['UK Rail Disaster', 'Selby Rail Crash', 'Transportation Accident', 'Modern History', 'Rail Safety'],
      year: '2023'
    },
    {
      id: 5,
      title: 'The Bratva: Russia\'s Global Crime Syndicate',
      category: 'modern-history',
      client: 'Into the Shadows',
      views: '1.2M',
      ctr: '13.2%',
      videoUrl: 'https://www.youtube.com/watch?v=fkciItLCLJ4',
      image: `${import.meta.env.BASE_URL}images/The Bratva--Russia's Global Crime Syndicate.jpg`,
      description: 'Discover the captivating history of the Bratva, the Russian Mafia.',
      tags: ['Russian Mafia', 'Organized Crime', 'Soviet Union', 'History', 'Bratva'],
      year: '2023'
    },
    {
      id: 6,
      title: 'The Real Truth Behind the Ancient Maya Disappearance',
      category: 'ancient-history',
      client: 'Decoding the Unknown',
      views: '380k',
      ctr: '17.1%',
      videoUrl: 'https://www.youtube.com/watch?v=XktJZgxd-AM&t=8s',
      image: `${import.meta.env.BASE_URL}images/The Real Truth Behind the Ancient Maya Disappearance Final 2.jpg`,
      description: 'Discovering the advanced astronomy, mathematics, and culture of the Maya civilization',
      tags: ['Maya', 'Mesoamerica', 'Lost Cities'],
      year: '2023'
    },
    {
      id: 7,
      title: 'The Ortegas Nicaragua\'s Dynasty of Nightmares',
      category: 'dictator-history',
      client: 'Into the Shadows',
      views: '3.9M',
      ctr: '15.4%',
      videoUrl: 'https://www.youtube.com/watch?v=JMQNxuod2Zg',
      image: `${import.meta.env.BASE_URL}images/The Ortegas Nicaragua's Dynasty of Nightmares.jpg`,
      description: "Uncover the shocking and chilling history of Nicaragua's modern dictator.",
      tags: ['Nicaragua', 'Daniel Ortega', 'Dictatorship', 'Modern Politics', 'Latin America'],
      year: '2023'
    },
    {
      id: 8,
      title: "The Trail of Tears: The Genocide of America's Native Americans",
      category: 'ancient-history',
      client: 'Into the Shadows',
      views: '3.3M',
      ctr: '14.6%',
      videoUrl: 'https://www.youtube.com/watch?v=Tkc4PqY6zX0',
      image: `${import.meta.env.BASE_URL}images/The Trail of Tears The Genocide of America's Native Americans.jpg`,
      description: 'Uncover the chilling truth of the 1830s forced removal of Native American tribes from their ancestral lands.',
      tags: ['Native American History', 'Trail of Tears', 'Forced Removal', '19th Century', 'United States'],
      year: '2023'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ancient-history', name: 'Ancient History', count: projects.filter(p => p.category === 'ancient-history').length },
    { id: 'dictator-history', name: 'Dictator History', count: projects.filter(p => p.category === 'dictator-history').length },
    { id: 'modern-history', name: 'Modern History', count: projects.filter(p => p.category === 'modern-history').length },
    { id: 'war-history', name: 'War History', count: projects.filter(p => p.category === 'war-history').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
          <div className="space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/30">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                <span className="text-xs sm:text-sm text-purple-300">My Portfolio</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Explore my collection of documentary and history storytelling projects that have captivated millions of viewers worldwide
              </p>
            </div>

            <div className="flex items-center justify-center space-x-2 animate-fade-in-delay-1">
              <Filter className="w-5 h-5 text-purple-400" />
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg scale-105'
                        : 'bg-white/5 backdrop-blur-sm hover:bg-white/10'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-xs opacity-70">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-delay-2">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23a855f7" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" dy=".3em" fill="white" font-size="24"%3EImage%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    <div className={`absolute inset-0 flex items-center justify-center space-x-3 transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      
                      <button 
                        onClick={() => window.open(project.videoUrl, '_blank')}
                        className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="absolute top-3 right-3 bg-purple-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-purple-400 flex items-center space-x-1">
                        <Youtube className="w-4 h-4" />
                        <span>{project.client}</span>
                      </p>
                    </div>

                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{project.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">{project.ctr} CTR</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/5 rounded-md text-xs text-purple-300 border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Youtube className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-gray-400">Try selecting a different category</p>
              </div>
            )}

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 sm:p-12 border border-white/10 text-center space-y-6 animate-fade-in-delay-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Ready to Tell Your Story?</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Let's create compelling documentary content that educates, inspires, and captivates your audience. 
                Professional storytelling with historical accuracy and engaging visuals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer"
                >
                  Start Your Project
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