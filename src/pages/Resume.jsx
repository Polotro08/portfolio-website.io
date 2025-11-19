import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, Palette, Sparkles, Briefcase, GraduationCap, Award, Star, TrendingUp, Zap, Target } from 'lucide-react';
//Resume.jsx
export default function Resume() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const resumeRef = useRef(null);

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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume_Polo.pdf';   // make sure Resume_Polo.pdf is in your public/ folder
    link.download = 'Resume_Polo.pdf'; // suggested filename
    link.click();
  };


  useEffect(() => {
    if (!window.html2pdf) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // EDIT YOUR PERSONAL INFO HERE
  const personalInfo = {
    name: ' RALFH ROLAN CO HERRERA', 
    title: 'Freelance YouTube Thumbnail Designer',
    email: 'calcalan3@gmail.com',
    phone: ' 09947091817',
    location: '3128 molave St. Manuguit Ext. Brgy. 202 Tondo NCR, city of Manila, First District.',
    profileImage: '/ralfh.jpg' // Path to your image in public folder (e.g., '/profile.jpg' or '/assets/profile.jpg')
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPersonalInfo(prev => ({ ...prev, profileImage: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImagePathEdit = () => {
    setIsEditingImage(true);
    setTempImagePath(personalInfo.profileImage);
  };

  const handleImagePathSave = () => {
    setPersonalInfo(prev => ({ ...prev, profileImage: tempImagePath }));
    setIsEditingImage(false);
  };

  const handleImagePathCancel = () => {
    setTempImagePath(personalInfo.profileImage);
    setIsEditingImage(false);
  };

  const handleNameEdit = () => {
    setIsEditing(true);
    setTempName(personalInfo.name);
  };

  const handleNameSave = () => {
    setPersonalInfo(prev => ({ ...prev, name: tempName }));
    setIsEditing(false);
  };

  const handleNameCancel = () => {
    setTempName(personalInfo.name);
    setIsEditing(false);
  };

  const professionalSummary = `Creative and results-driven YouTube Thumbnail Designer with 3+ years of experience creating high-converting thumbnails for content creators across various niches. Specialized in designing eye-catching visuals that increase click-through rates by an average of 40%. Proven track record of helping channels grow from 1K to 100K+ subscribers through strategic visual branding and thumbnail optimization.`;

  const experience = [
    {
      title: 'Freelance YouTube Thumbnail Designer',
      company: 'Self-Employed',
      period: '2021 - Present',
      location: 'Remote',
      achievements: [
        'Designed 500+ thumbnails for 50+ YouTube creators across tech, gaming, lifestyle, and educational niches',
        'Increased average client CTR by 40% through data-driven design and A/B testing strategies',
        'Developed consistent brand identities that helped channels gain 2M+ collective subscribers',
        'Maintained 98% client satisfaction rate with fast turnaround times (24-48 hours)',
        'Implemented analytics-based design improvements resulting in 25% higher engagement rates'
      ]
    },
    {
      title: 'Graphic Designer',
      company: 'Digital Marketing Agency',
      period: '2020 - 2021',
      location: 'Remote',
      achievements: [
        'Created social media graphics and marketing materials for 30+ clients',
        'Collaborated with content teams to develop cohesive visual campaigns',
        'Improved client social media engagement by 35% through strategic design',
        'Managed multiple projects simultaneously while meeting tight deadlines'
      ]
    }
  ];

  const skills = {
    design: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Canva Pro',
      'Figma',
      'Typography',
      'Color Theory'
    ],
    specialized: [
      'YouTube Thumbnail Design',
      'Visual Branding',
      'A/B Testing',
      'CTR Optimization',
      'Viewer Psychology',
      'Trend Analysis'
    ],
    soft: [
      'Client Communication',
      'Fast Turnaround',
      'Attention to Detail',
      'Creative Problem Solving',
      'Time Management',
      'Analytics Interpretation'
    ]
  };

  const education = [
    {
      degree: 'Graphic Design Certificate',
      institution: 'Online Design Academy',
      year: '2021',
      details: 'Specialized in digital design, visual communication, and branding'
    },
    {
      degree: 'YouTube Thumbnail Mastery Course',
      institution: 'Professional Learning Platform',
      year: '2022',
      details: 'Advanced techniques for high-converting thumbnail design and optimization'
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Helped 20+ channels reach 100K+ subscribers',
      description: 'Through consistent branding and high-CTR thumbnail design'
    },
    {
      icon: Target,
      title: 'Average 40% CTR increase',
      description: 'Across all client channels after implementing new designs'
    },
    {
      icon: Star,
      title: '500+ successful projects',
      description: 'Delivered with 98% client satisfaction rate'
    },
    {
      icon: Zap,
      title: '24-48 hour turnaround',
      description: 'Fast delivery without compromising quality'
    }
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
            <a href="/" className="flex items-center space-x-2 group cursor-pointer">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Resume
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                </a>
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
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/30">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-300">Professional Resume</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Resume
              </span>
            </h1>

            <button
              onClick={downloadResume}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </button>
          </div>

          <div ref={resumeRef} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 border border-white/10 space-y-8 animate-fade-in-delay-1">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-8 border-b border-white/10">
              <img 
                src={personalInfo.profileImage} 
                alt="Profile" 
                className="w-32 h-32 rounded-full border-4 border-purple-500/50 object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128"%3E%3Crect width="128" height="128" fill="%239333ea"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="48" fill="white"%3EYN%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">{personalInfo.name}</h2>
                <p className="text-xl text-purple-300 mb-4">{personalInfo.title}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300 justify-center md:justify-start">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📱</span>
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📍</span>
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">Professional Summary</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{professionalSummary}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-8 h-8 text-purple-400 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                    <p className="text-xs text-gray-400">{achievement.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              
              {experience.map((job, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-purple-300">{job.title}</h4>
                      <p className="text-gray-300">{job.company}</p>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">Skills</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
                  <h4 className="font-bold text-lg text-purple-300 mb-3">Design Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.design.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
                  <h4 className="font-bold text-lg text-pink-300 mb-3">Specialized Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.specialized.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
                  <h4 className="font-bold text-lg text-purple-300 mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">Education & Certifications</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-bold text-lg text-purple-300">{edu.degree}</h4>
                      <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-white/10 text-center">
              <p className="text-gray-300 mb-4">
                Ready to boost your YouTube channel's performance with stunning thumbnails?
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="https://github.com/Polotro08" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/ralfh-herrera-806b9b349" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a href={`mailto:calcalan3@gmail.com`}
                   className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}