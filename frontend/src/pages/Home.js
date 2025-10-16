import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import slider1 from '../assets/images/hero/slider1.jpg';
import slider2 from '../assets/images/hero/slider2.jpg';
import peoples from '../assets/images/hero/peoples.png';

// Simple intersection observer hook for reveal-on-scroll animations
function useReveal() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return { ref: elementRef, isVisible };
}

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    careers: 0,
    consultants: 0,
    industries: 0,
    offices: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsReveal = useReveal();
  const journeyReveal = useReveal();
  const industryReveal = useReveal();
  const servicesReveal = useReveal();
  const whyReveal = useReveal();
  
  const slides = [
    {
      image: slider1,
      title: "Expert Business Consulting",
      subtitle: "Transform Your Business with Strategic Excellence"
    },
    {
      image: slider2,
      title: "Premium Consulting Services",
      subtitle: "Achieve Your Goals with Professional Guidance"
    }
  ];

  const industries = [
    { name: "Technology", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { name: "Agriculture", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" },
    { name: "Manufacturing", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
    { name: "Retail", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" },
    { name: "Media", icon: "M8 5v14l11-7z" },
    { name: "Healthcare", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { name: "Finance", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" }
  ];

  const services = [
    {
      title: "Staff Recruitment",
      description: "Find the right talent for your organization with our comprehensive recruitment solutions",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Staffing",
      description: "Flexible staffing solutions to meet your dynamic business needs and scale efficiently",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Training",
      description: "Enhance your team's skills and performance with our comprehensive training programs",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Resume Building",
      description: "Create compelling resumes that get you noticed by top employers and land your dream job",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Interview Preparation",
      description: "Ace your interviews with confidence through our comprehensive preparation programs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const slugify = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Statistics animation effect
  useEffect(() => {
    if (statsReveal.isVisible && !hasAnimated) {
      setHasAnimated(true);
      
      const animateValue = (key, targetValue, duration = 2000) => {
        const startTime = Date.now();
        const startValue = 0;
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
          
          setAnimatedStats(prev => ({
            ...prev,
            [key]: currentValue
          }));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      };

      // Animate each statistic with slight delays for staggered effect
      setTimeout(() => animateValue('years', 50), 100);
      setTimeout(() => animateValue('careers', 200), 200);
      setTimeout(() => animateValue('consultants', 150), 300);
      setTimeout(() => animateValue('industries', 21), 400);
      setTimeout(() => animateValue('offices', 8), 500);
    }
  }, [statsReveal.isVisible, hasAnimated]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextIndustry = () => {
    setCurrentIndustry((prevIndustry) => (prevIndustry + 1) % industries.length);
  };

  const prevIndustry = () => {
    setCurrentIndustry((prevIndustry) => (prevIndustry - 1 + industries.length) % industries.length);
  };

  const nextService = () => {
    setCurrentService((prevService) => {
      const maxSlides = services.length - 2; // For 5 services, we have 3 slides (0, 1, 2)
      return prevService >= maxSlides ? 0 : prevService + 1;
    });
  };

  const prevService = () => {
    setCurrentService((prevService) => {
      const maxSlides = services.length - 2; // For 5 services, we have 3 slides (0, 1, 2)
      return prevService <= 0 ? maxSlides : prevService - 1;
    });
  };

  return (
    <div className="relative min-h-screen">
      {/** Section reveal hooks */}
      {/** Each will be used to animate sections when they enter the viewport */}
      {(() => {
        return null;
      })()}
      {/* Hero Section with Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Slider Effect */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: 'blur(2px)'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Premium Business Consulting Banner */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Premium Business Consulting</span>
          </div>
          
          {/* Dynamic Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title.split(' ').map((word, index) => (
              index === slides[currentSlide].title.split(' ').length - 1 ? (
                <span key={index} className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            ))}
          </h1>
          
          {/* Dynamic Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            {slides[currentSlide].subtitle}
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            {/* Schedule Consultation Button */}
            <button onClick={() => navigate('/consultation')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Schedule Consultation</span>
            </button>
            
            {/* Discover More Arrow */}
            <div className="flex flex-col items-center space-y-2">
              <p className="text-gray-300 text-sm font-medium">Discover More</p>
              <div onClick={() => document.getElementById('our-services')?.scrollIntoView({ behavior: 'smooth' })} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition duration-300 cursor-pointer">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            
            {/* Explore Services Button */}
            <button onClick={() => navigate('/services')} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition duration-300 hover:bg-white/20 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>Explore Services</span>
            </button>
          </div>
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>
      
      {/* Statistics Section */}
      <section ref={statsReveal.ref} className={`py-20 bg-white transition-all duration-700 ease-out ${statsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              An integral part of corporate India's journey
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Trusted advisors to multinationals, leading Indian businesses and leadership professionals
            </p>
          </div>
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
            {/* Years of Market Leadership */}
            <div className="text-center">
              <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-lg sm:text-3xl font-bold text-white">{animatedStats.years}+</span>
              </div>
              <p className="text-gray-900 font-medium text-center text-sm sm:text-base">
                Years of market leadership
              </p>
            </div>
            {/* Careers Built */}
            <div className="text-center">
              <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-lg sm:text-3xl font-bold text-white">{animatedStats.careers}k+</span>
              </div>
              <p className="text-gray-900 font-medium text-center text-sm sm:text-base">
                Careers built to date
              </p>
            </div>
            {/* Consultants Pan India */}
            <div className="text-center">
              <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-lg sm:text-3xl font-bold text-white">{animatedStats.consultants}+</span>
              </div>
              <p className="text-gray-900 font-medium text-center text-sm sm:text-base">
                Consultants pan India
              </p>
            </div>
            {/* Industry Specializations */}
            <div className="text-center">
              <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-lg sm:text-3xl font-bold text-white">{animatedStats.industries}</span>
              </div>
              <p className="text-gray-900 font-medium text-center text-sm sm:text-base">
                Industry specialisations
              </p>
            </div>
            {/* Offices Across India */}
            <div className="text-center">
              <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-lg sm:text-3xl font-bold text-white">{animatedStats.offices}</span>
              </div>
              <p className="text-gray-900 font-medium text-center text-sm sm:text-base">
                Offices across India
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our People Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out" style={{}}>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our People
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The Executive Search industry's most seasoned consultants, bringing an agile mindset, an empathetic perspective and an entrepreneurial spirit to every client engagement.
            </p>
          </div>
          <div className="mt-10 rounded-2xl overflow-hidden shadow-md">
            <img src={peoples} alt="Our People" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
      
      {/* Our Journey Section */}
      <section className="py-20 bg-white">
        <div ref={journeyReveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${journeyReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              From one office in Kolkata to a network of offices pan India, take a look at our fascinating journey in the last five decades
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
            
            {/* Timeline Events */}
            <div className="space-y-8 md:space-y-16">
              {/* Event 1 - Foundation */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                    <div className="text-blue-600 font-bold text-lg mb-2">1969</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Foundation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Bish Agrawal establishes Siddhivinayak Consultants as a Consulting services firm in Kolkata.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Event 2 - Expansion */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-8"></div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 md:border-r-4 border-blue-600">
                    <div className="text-blue-600 font-bold text-lg mb-2">1970s & 1980s</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Expansion</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Siddhivinayak opens offices in all major cities across India. Rapidly becomes a trusted name in executive search and talent advisory.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Event 3 - Digital Transformation */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                    <div className="text-blue-600 font-bold text-lg mb-2">1990s</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Pioneered the use of technology in recruitment processes, setting new industry standards for efficiency and accuracy.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Event 4 - Global Recognition */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-8"></div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 md:border-r-4 border-blue-600">
                    <div className="text-blue-600 font-bold text-lg mb-2">2000s</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Global Recognition</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Expanded services internationally and received recognition as one of India's leading executive search firms.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Event 5 - Innovation & Growth */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                    <div className="text-blue-600 font-bold text-lg mb-2">2010s</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation & Growth</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Launched innovative training programs and resume building services, becoming a comprehensive talent solutions provider.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-8"></div>
              </div>
              
              {/* Event 6 - Present Day */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-8"></div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 md:border-r-4 border-blue-600">
                    <div className="text-blue-600 font-bold text-lg mb-2">Present</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Leading the Future</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Continuing to lead the industry with 8 offices across India, 150+ consultants, and over 200,000 successful placements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Specialisations Section */}
      <section className="py-20 bg-gray-50">
        <div ref={industryReveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${industryReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Specialisations
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We recognize that each industry has its own nuances in terms of management style, hiring practices and compensation norms. To provide clients with specialized search solutions, Siddhivinayak has developed expertise in the following industries
            </p>
          </div>
          
          {/* Industry Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevIndustry}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextIndustry}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Industry Icons */}
            <div className="flex justify-center items-center space-x-4 sm:space-x-8 overflow-hidden">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className={`flex flex-col items-center transition-all duration-500 ${
                    index === currentIndustry ? 'opacity-100 scale-110' : 'opacity-50 scale-100'
                  }`}
                >
                  <div className={`${
                    index === currentIndustry 
                      ? 'w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 border-4 border-blue-500' 
                      : 'w-12 h-12 sm:w-16 sm:h-16 bg-gray-200'
                  } rounded-full flex items-center justify-center mb-3 transition-all duration-300`}>
                    <svg 
                      className={`${
                        index === currentIndustry ? 'w-8 h-8 sm:w-10 sm:h-10 text-blue-600' : 'w-6 h-6 sm:w-8 sm:h-8 text-gray-500'
                      }`} 
                      fill={index === currentIndustry ? "none" : "currentColor"} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={index === currentIndustry ? 2 : 1} 
                        d={industry.icon} 
                      />
                    </svg>
                  </div>
                  <span className={`${
                    index === currentIndustry 
                      ? 'text-gray-900 font-medium text-xs sm:text-base' 
                      : 'text-gray-500 text-xs sm:text-sm'
                  } transition-all duration-300`}>
                    {industry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Services Section */}
      <section id="our-services" className="py-20 bg-blue-900">
        <div ref={servicesReveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${servicesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Siddhivinayak Consultants, through its executive search and talent advisory services has been an integral part of Corporate India since 1969
            </p>
          </div>
          
          {/* Services Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevService}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextService}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Services Cards */}
            <div className="overflow-hidden px-4 sm:px-8">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentService * (window.innerWidth < 640 ? 100 : 33.333)}%)`,
                  width: `${services.length * (window.innerWidth < 640 ? 100 : 33.333)}%`
                }}
              >
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-full sm:w-1/3 px-2"
                  >
                    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                      {/* Service Image */}
                      <div className="h-32 sm:h-40 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Service Content */}
                      <div className="p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-3 leading-relaxed text-xs sm:text-sm">
                          {service.description}
                        </p>
                        
                        {/* Action Button */}
                        <button onClick={() => navigate(`/services/${slugify(service.title)}`)} className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <span className="text-white text-sm">
                {currentService + 1}/{services.length - 2} Pages
              </span>
              
              {/* Pagination Dots */}
              <div className="flex space-x-2">
                {Array.from({ length: services.length - 2 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentService 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Testimonials</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Our constant endeavor is to delight our clients through service excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial Card 1 */}
            <div className="rounded-2xl border-8 border-blue-100 transition-transform duration-300 hover:-translate-y-1 hover:border-blue-200">
              <div className="relative bg-white rounded-xl p-8 shadow-md transition-shadow duration-300 hover:shadow-2xl">
                <div className="absolute top-4 right-4 text-blue-200">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h4a4 4 0 010 8H7V8zm10 0h-4a4 4 0 000 8h4V8z" />
                  </svg>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10a8 8 0 1116 0A8 8 0 012 10zm7-3a1 1 0 012 0v3a1 1 0 01-1 1H7a1 1 0 110-2h2V7z"/></svg>
                  </div>
                  <div className="text-blue-700 font-semibold">Client Testimonial</div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We are happy to recommend Siddhivinayak Consultants for their exceptional business partnering.
                  They demonstrated remarkable dedication and expertise in managing our leadership mandates.
                </p>
                <div className="mt-6 text-sm text-gray-500">
                  <div className="font-semibold text-gray-700">Samuel Joseph Jebaraj</div>
                  <div>Deputy Managing Director, BFSI</div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="rounded-2xl border-8 border-blue-100 transition-transform duration-300 hover:-translate-y-1 hover:border-blue-200">
              <div className="relative bg-white rounded-xl p-8 shadow-md transition-shadow duration-300 hover:shadow-2xl">
                <div className="absolute top-4 right-4 text-blue-200">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h4a4 4 0 010 8H7V8zm10 0h-4a4 4 0 000 8h4V8z" />
                  </svg>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10a8 8 0 1116 0A8 8 0 012 10zm7-3a1 1 0 012 0v3a1 1 0 01-1 1H7a1 1 0 110-2h2V7z"/></svg>
                  </div>
                  <div className="text-blue-700 font-semibold">Client Testimonial</div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The team supported us immensely in capability building initiatives through focused searches
                  and quick turnaround, enabling the right selections.
                </p>
                <div className="mt-6 text-sm text-gray-500">
                  <div className="font-semibold text-gray-700">Saba Adil</div>
                  <div>CHRO, Edelweiss Life</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Content Sections */}
      <section className="py-20 bg-white">
        <div ref={whyReveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${whyReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Siddhivinayak Consultants?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through strategic thinking, innovative solutions, and proven expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Proven Expertise</h3>
              <p className="text-gray-600">Over a decade of experience helping businesses achieve their goals.</p>
            </div>
            
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fast Results</h3>
              <p className="text-gray-600">Quick turnaround times without compromising on quality.</p>
            </div>
            
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-600">Personalized attention and ongoing support throughout your journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
