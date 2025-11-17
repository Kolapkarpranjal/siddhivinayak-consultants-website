import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const ourEdge = [
    {
      title: "Best Processes",
      description: "Siddhivinayak Employment Services has developed industry specific processes that recognize your needs and deliver the right candidates every single time.",
      icon: "⚙️"
    },
    {
      title: "Comprehensive Research",
      description: "At Siddhivinayak Employment Services, we leave no stone unturned. We like to understand our client's needs and come up with solutions that will match our client's needs.",
      icon: "🔍"
    },
    {
      title: "Integrated Service",
      description: "Difficulty in finding the best candidates? Siddhivinayak Employment Services also conducts training in Nashik to groom and equip candidates with the right skill sets.",
      icon: "🔗"
    }
  ];

  const services = [
    {
      title: "Recruitment",
      description: "All your recruitment headaches are now a part of history. With Siddhivinayak Employment Services all the initial processes such as shortlisting, screening and training are handled by us. All you need is to get in touch with us and we will take it from there.",
      icon: "👥"
    },
    {
      title: "Training",
      description: "Siddhivinayak Employment Services offers industry standard courses as well as customized solutions to meet your requirements.",
      icon: "📚"
    },
    {
      title: "Consulting",
      description: "Tired of attrition? Need a better training program, need changes in your compensation structure or anything else under the sun... Siddhivinayak Employment Services offers complete guidance with its trained team of professionals and a result oriented approach.",
      icon: "💼"
    },
    {
      title: "Industry Specific Modules",
      description: "Siddhivinayak Employment Services has an experienced team that will help you craft a solution that will satisfy your requirements and help you create the right programs for your employees.",
      icon: "🏭"
    }
  ];

  const clients = [
    { name: "KOSO India Pvt. Ltd", location: "Ambad" },
    { name: "Mungi Engineers Pvt. Ltd", location: "Ambad" },
    { name: "ALF Engineers Pvt. Ltd", location: "Ambad" },
    { name: "Delta Mangnets Ltd", location: "Ambad" },
    { name: "P M Electro Auto Pvt. Ltd", location: "Ambad" },
    { name: "Polycab Ltd", location: "Ambad" },
    { name: "Exotic Furits Pvt. Ltd", location: "Vinchur" },
    { name: "Graphite India Ltd", location: "Satpur" },
    { name: "ADF Foods Ltd", location: "Sinnar" },
    { name: "Sahney Kirkwood Pvt. Ltd", location: "Ambad" },
    { name: "Artson Engineering Pvt. Ltd", location: "Ambad" },
    { name: "Precision Auto Pvt. Ltd", location: "Ambad" },
    { name: "Kagome Foods Pvt. Ltd", location: "Ambad" },
    { name: "Ivory Soap Works Ltd", location: "Ambad" },
    { name: "Pramod Fibre Plast Pvt. Ltd", location: "Ambad" },
    { name: "CTR Manufacturing Ltd", location: "Ambad" },
    { name: "Mack Surface Treatments Pvt. Ltd", location: "Ambad" },
    { name: "Hind Hardy Ltd", location: "Ambad" },
    { name: "Marut Energy Pvt. Ltd", location: "Ambad" },
    { name: "Bajajsons Ltd", location: "Satpur" },
    { name: "Entremonde Polycoaters Ltd", location: "Satpur" },
    { name: "Jyoti Ceramics Pvt. Ltd", location: "Satpur" },
    { name: "Montex Fibre Glasss Pvt. Ltd", location: "Ambad" },
    { name: "Taparia Tools Ltd", location: "Satpur" },
    { name: "Enoch Controls Pvt. Ltd", location: "Ambad" },
    { name: "Nirmiti Precison Pvt. Ltd", location: "Satpur" },
    { name: "Supreme Autoshell Pvt. Ltd", location: "Satpur" },
    { name: "Genext Precision Pvt. Ltd", location: "Satpur" },
    { name: "Dhumal Industries Ltd", location: "Satpur" },
    { name: "Caprihans India Ltd", location: "Satpur" },
    { name: "Electronica Tungsten Ltd", location: "Sinnar" },
    { name: "General Mills India Ltd", location: "Sinnar" },
    { name: "Legrand India Pvt. Ltd", location: "Sinnar" },
    { name: "Nilkamal Ltd", location: "Sinnar" },
    { name: "Ring Plus Aqua Ltd", location: "Sinnar" },
    { name: "Rose Engineered Products India Pvt. Ltd", location: "Sinnar" },
    { name: "Sipra Engineers Pvt. Ltd", location: "Sinnar" },
    { name: "Autofits Pvt Ltd", location: "Sinnar" },
    { name: "Foods & Inns Ltd", location: "Sinnar" },
    { name: "Hindustan Unilever Ltd", location: "Sinnar" },
    { name: "Scitech Specialities Pvt. Ltd", location: "Sinnar" },
    { name: "FDC Ltd", location: "Sinnar" },
    { name: "HNG Ltd", location: "Sinnar" },
    { name: "Right Tight Fastners Pvt. Ltd", location: "Sinnar" },
    { name: "Apex Printing Sleeves Pvt. Ltd", location: "Sinnar" },
    { name: "Nobel Hygiene Pvt. Ltd", location: "Sinnar" },
    { name: "Zylog Plastalloys Pvt. Ltd", location: "Sinnar" },
    { name: "Flywheel Ring Gears Pvt. Ltd", location: "Sinnar" },
    { name: "Sahyadri Farmers Producres Co. Ltd", location: "Dindori" },
    { name: "Precise Chemipharma Pvt. Ltd", location: "Dindori" },
    { name: "Spack Automotives Pvt. Ltd", location: "Satpur" },
    { name: "MSKH Seating Pvt. Ltd", location: "Satpur" },
    { name: "Nutralytica Research Pvt. Ltd", location: "Dindori" },
    { name: "Everest Industries Ltd", location: "Dindori" },
    { name: "Infiiloom India Pvt. Ltd", location: "Gonde" },
    { name: "Beico Industries Pvt. Ltd", location: "Gonde" },
    { name: "Mosdorfer India Pvt. Ltd", location: "Gonde" },
    { name: "Cesare Bonetti International Pvt. Ltd", location: "Gonde" },
    { name: "Vadivarhe Speciality Pvt. Ltd", location: "Gonde" },
    { name: "Bajaj Electricals Ltd", location: "Gonde" },
    { name: "Spectrum Ethers Pvt. Ltd", location: "Dindori" },
    { name: "Shubhada Polymers Pvt. Ltd", location: "Ambad" },
    { name: "Cable Corporation Of India Ltd", location: "Sinnar" },
    { name: "Macks Surface Treatments Pvt. Ltd", location: "Ambad" },
    { name: "UB Stainless Ltd", location: "Sinnar" },
    { name: "Satish Toy Manufacturing LLP", location: "Gonde" },
    { name: "Energon Solutions Pvt. Ltd", location: "Sinnar" },
    { name: "Bedmutha Industries Ltd", location: "Sinnar, Dhule" },
    { name: "Polygenta Technologies Ltd", location: "Dindori" },
    { name: "Klasspack Ltd", location: "Ambad" },
    { name: "Precision Camshafts Ltd", location: "Nashik, Solapur" },
    { name: "M D Industries Ltd", location: "Ambad" },
    { name: "Thyssenkrupp Electrical Steel India Pvt. Ltd", location: "Gonde" },
    { name: "Husqvarna (India) Products Pvt. Ltd", location: "Gonde" },
    { name: "Electrofab Innovations (I) Pvt. Ltd", location: "Ambad" },
    { name: "R R Plast Pvt. Ltd", location: "Palghar" },
    { name: "GMP Technical Solutions Pvt. Ltd", location: "Bhivandi" },
    { name: "Fleetgaurd Filters Pvt. Ltd", location: "Pune" },
    { name: "Autoshell Electromech Pvt. Ltd", location: "Ambad" },
    { name: "Slidewell Meilleur Tech Pvt. Ltd", location: "Ambad" }
  ];

  const locations = ['All', ...new Set(clients.map(c => c.location))].sort();
  const filteredClients = selectedLocation === 'All' 
    ? clients 
    : clients.filter(c => c.location === selectedLocation);

  return (
    <div className="min-h-screen bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive recruitment solutions and trusted client partnerships across various industries.
          </p>
        </div>

        {/* Our EDGE Section */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our EDGE: Why Choose Siddhivinayak Employment Services?
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourEdge.map((edge, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Angled Header Band */}
              <div className="relative h-24">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600"
                  style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)' }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-5">
                  <div className="text-white">
                      <div className="uppercase tracking-wider text-xs opacity-90">Our EDGE</div>
                      <div className="font-bold text-lg leading-tight">{edge.title}</div>
                  </div>
                  <div className="hidden md:flex items-center space-x-2 text-white/90">
                    <span className="w-2 h-2 rounded-full bg-white/70" />
                    <span className="w-2 h-2 rounded-full bg-white/70" />
                    <span className="w-2 h-2 rounded-full bg-white/70" />
                  </div>
                </div>
              </div>

              {/* Body: two-column content like slide */}
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Left: Description */}
                  <div>
                      <div className="text-sm text-gray-500 font-semibold mb-2">Overview</div>
                      <p className="text-gray-700 leading-relaxed">{edge.description}</p>
                        </div>
                    {/* Right: Icon tile */}
                    <div className="relative rounded-lg overflow-hidden h-40 sm:h-full min-h-[160px] bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                      <div className="text-6xl">{edge.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              // Explicit class names to ensure Tailwind includes them
              const headerClass = index === 0 ? 'from-blue-700 to-cyan-600' :
                                 index === 1 ? 'from-indigo-700 to-purple-600' :
                                 index === 2 ? 'from-emerald-700 to-teal-600' :
                                 'from-orange-700 to-red-600';
              
              const iconClass = index === 0 ? 'from-blue-50 to-cyan-50' :
                               index === 1 ? 'from-indigo-50 to-purple-50' :
                               index === 2 ? 'from-emerald-50 to-teal-50' :
                               'from-orange-50 to-red-50';
              
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  {/* Angled Header Band */}
                  <div className="relative h-24">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${headerClass}`}
                      style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-5">
                      <div className="text-white">
                        <div className="uppercase tracking-wider text-xs opacity-90">Service</div>
                        <div className="font-bold text-lg leading-tight">{service.title}</div>
                      </div>
                      <div className="hidden md:flex items-center space-x-2 text-white/90">
                        <span className="w-2 h-2 rounded-full bg-white/70" />
                        <span className="w-2 h-2 rounded-full bg-white/70" />
                        <span className="w-2 h-2 rounded-full bg-white/70" />
                      </div>
                    </div>
                  </div>

                  {/* Body: two-column content like slide */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Left: Description */}
                      <div>
                        <div className="text-sm text-gray-500 font-semibold mb-2">Service Details</div>
                        <p className="text-gray-700 leading-relaxed text-sm">{service.description}</p>
                      </div>
                      {/* Right: Icon tile */}
                      <div className={`relative rounded-lg overflow-hidden h-40 sm:h-full min-h-[160px] bg-gradient-to-br ${iconClass} flex items-center justify-center`}>
                        <div className="text-6xl">{service.icon}</div>
                      </div>
                </div>
              </div>
              
                {/* Footer stats bar */}
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center px-6 pb-6">
                  <div className="bg-gray-50 rounded-md p-3">
                      <div className="text-xs text-gray-500">Quality</div>
                    <div className="font-semibold text-gray-900">High</div>
                  </div>
                  <div className="bg-gray-50 rounded-md p-3">
                      <div className="text-xs text-gray-500">Support</div>
                      <div className="font-semibold text-gray-900">24/7</div>
                  </div>
                  <div className="bg-gray-50 rounded-md p-3">
                      <div className="text-xs text-gray-500">Experience</div>
                      <div className="font-semibold text-gray-900">10+</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clients Section */}
        <div className="mb-16" data-aos="fade-up">
          {/* Professional Header with Stats */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Trusted Clients
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We are proud to serve {clients.length}+ leading companies across various industrial zones
            </p>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">{clients.length}+</div>
                <div className="text-gray-700 font-medium">Total Clients</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <div className="text-4xl font-bold text-purple-600 mb-2">{locations.length - 1}</div>
                <div className="text-gray-700 font-medium">Industrial Zones</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Enhanced Location Filter */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              {locations.map((location) => {
                const clientCount = location === 'All' 
                  ? clients.length 
                  : clients.filter(c => c.location === location).length;
                
                return (
                  <button
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedLocation === location
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border-2 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{location}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        selectedLocation === location
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                      }`}>
                        {clientCount}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modern Clients Showcase - Desktop Optimized */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedLocation === 'All' ? 'All Clients' : `Clients in ${selectedLocation}`}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Showing {filteredClients.length} {filteredClients.length === 1 ? 'client' : 'clients'}
                  </p>
                </div>
                <div className="hidden md:flex items-center space-x-2 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Verified Partners</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              {filteredClients.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filteredClients.map((client, index) => {
                    // Generate color based on index for variety
                    const colors = [
                      'from-blue-500 to-cyan-500',
                      'from-purple-500 to-pink-500',
                      'from-emerald-500 to-teal-500',
                      'from-orange-500 to-red-500',
                      'from-indigo-500 to-blue-500',
                      'from-pink-500 to-rose-500',
                      'from-cyan-500 to-blue-500',
                      'from-violet-500 to-purple-500'
                    ];
                    const colorClass = colors[index % colors.length];
                    
                    return (
                      <div
                        key={index}
                        className="group relative"
                        data-aos="fade-up"
                        data-aos-delay={index % 10 * 50}
                      >
                        {/* Modern Card Design */}
                        <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                          {/* Gradient Header Bar */}
                          <div className={`h-2 bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          
                          {/* Content */}
                          <div className="p-6">
                            {/* Company Initial Badge */}
                            <div className="flex items-center justify-center mb-4">
                              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                <span className="text-white font-bold text-2xl">
                                  {client.name.charAt(0)}
                                </span>
                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                              </div>
                            </div>
                            
                            {/* Company Name */}
                            <div className="text-center mb-4">
                              <h4 className="font-bold text-gray-900 text-base leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                {client.name}
                              </h4>
                              <div className="flex items-center justify-center text-xs text-gray-500">
                                <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="truncate">{client.location}</span>
                              </div>
                            </div>
                            
                            {/* Bottom Accent Line */}
                            <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-500 mx-auto`}></div>
                          </div>
                          
                          {/* Hover Overlay Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                          
                          {/* Corner Decoration */}
                          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-500 text-lg font-medium">No clients found for the selected location.</p>
                  <p className="text-gray-400 text-sm mt-2">Try selecting a different location filter.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="zoom-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join our growing list of satisfied clients and experience our quality recruitment services.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
