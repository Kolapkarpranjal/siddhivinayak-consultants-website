import React, { useEffect } from 'react';
import ourClientsImg from '../assets/images/ourclients.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const journeyMilestones = [
    { year: "2013", title: "Started in Nashik", desc: "Working since 2013 across all industry types." },
    { year: "2015", title: "Sinnar Expansion", desc: "Extended recruitment support in the Sinnar industrial zone." },
    { year: "2017", title: "Ahilyanagar", desc: "Built a strong client network across Ahilyanagar region." },
    { year: "2019", title: "Sambhaji Nagar", desc: "Specialized hiring for manufacturing and services verticals." },
    { year: "2021", title: "Pune", desc: "Scaled operations for technology and enterprise hiring." },
    { year: "2023", title: "Mumbai", desc: "End‑to‑end recruitment solutions for metro enterprises." },
    { year: "Ethics", title: "Committed & On‑Time", desc: "Ethical hiring with deep understanding of client needs on time." }
  ];
  const leadershipTeam = [
    {
      name: "Shiv Agrawal",
      title: "Managing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Ratna Gupta",
      title: "Senior Partner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Vivek Mehta",
      title: "Partner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Zefrin D'souza",
      title: "Partner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const newsArticles = [
    {
      date: "01 NOVEMBER 2023",
      title: "Banks seek talent for on-tap CXO hiring",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      date: "01 OCTOBER 2023",
      title: "GST woes at online gaming companies trigger a deluge of CVs",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      date: "22 SEPTEMBER 2023",
      title: "EV startups attract investments, talent as others struggle",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      date: "15 SEPTEMBER 2023",
      title: "Recruiters start getting pink slips as corporate hiring slows down",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const offices = [
    { city: "Mumbai", address: "Nariman Point, Mumbai" },
    { city: "Delhi", address: "Connaught Place, New Delhi" },
    { city: "Bangalore", address: "MG Road, Bangalore" },
    { city: "Chennai", address: "Anna Salai, Chennai" },
    { city: "Kolkata", address: "Park Street, Kolkata" },
    { city: "Hyderabad", address: "Banjara Hills, Hyderabad" },
    { city: "Pune", address: "Koregaon Park, Pune" },
    { city: "Ahmedabad", address: "CG Road, Ahmedabad" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* About Us Content (client-provided) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Siddhivinayak Employment Services is a leading service provider of recruitment and training needs, providing exceptional services to our clients and job seekers across the country. Established in the year 2013, we are a professionally managed placement and training consultancy firm with a network across India. We have built enduring relationships with our clients across India.
              </p>
              <p>
                As a service partner, we help organizations build their human capital by sourcing professionals with intellectual skills, and we help individuals build their careers. We are also associated with various premier industry associations and chambers of commerce and industry in India and overseas.
              </p>
              <p>
                Siddhivinayak Employment Services comprises a group of experienced industry specialists. We place great value on Human Resource Development and in placing the right people in the right jobs by offering need-based manpower recruitment services, backed by our in-depth understanding of client requirements.
              </p>
              <p>
                We combine vision, expertise, and experience with an entrepreneurial spirit to deliver complex, urgent, and need-based staffing requirements quickly, efficiently, and professionally. Placing candidates in the right positions is the key to achieving outstanding business development results.
              </p>
              <p>
                Our team of experienced and specialized recruitment associates conducts aggressive searches with proper screening, matching the right candidates to the appropriate job openings. We work closely with clients to determine the exact qualifications and skill sets needed, interview candidates extensively to ensure fit for the job and culture, and remain engaged through final interviews, offer release, joining, and post-joining follow-ups.
              </p>
              <p>
                We provide our esteemed clients with customized, prompt, high-quality services of high ethical standards. We are totally committed to hiring the best professionals to suit every possible vacancy and, in turn, have acquired an enviable reputation and trust in India as a leading employment agency for Entry, Middle, and Senior Management recruitment.
              </p>
              <p>
                We also help organizations establish and strengthen their HR departments by designing, developing, and implementing training solutions that help clients achieve their objectives by acquiring, developing, and retaining the best talent. These training solutions use the most suitable practices, tools, and techniques, ultimately resulting in improved bottom lines.
              </p>

            </div>

            <div className="mt-12 space-y-16">
              {/* Our EDGE Cards */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our EDGE: Why choose Siddhivinayak Employment Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Best Processes */}
                  <div className="rounded-xl border border-gray-100 shadow-md overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-sky-100" data-aos="fade-up">
                    <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-5 py-3">
                      <div className="text-sm uppercase tracking-wider opacity-90">Best Processes</div>
                    </div>
                    <div className="p-5 text-gray-700 leading-relaxed">
                      <p>We have developed industry-specific processes that recognize your needs and deliver the right candidates every single time.</p>
                    </div>
                  </div>

                  {/* Comprehensive Research */}
                  <div className="rounded-xl border border-gray-100 shadow-md overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-pink-100" data-aos="fade-up" data-aos-delay="100">
                    <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-5 py-3">
                      <div className="text-sm uppercase tracking-wider opacity-90">Comprehensive Research</div>
                    </div>
                    <div className="p-5 text-gray-700 leading-relaxed">
                      <p>We leave no stone unturned. We understand client needs deeply and present solutions that align precisely with those needs.</p>
                    </div>
                  </div>

                  {/* Integrated Service */}
                  <div className="rounded-xl border border-gray-100 shadow-md overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-100" data-aos="fade-up" data-aos-delay="200">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-3">
                      <div className="text-sm uppercase tracking-wider opacity-90">Integrated Service</div>
                    </div>
                    <div className="p-5 text-gray-700 leading-relaxed">
                      <p>Difficulty finding the best candidates? We also conduct training in Nashik to groom and equip candidates with the right skill sets.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              MISSION, VISION & VALUES
            </h2>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Grid Layout Container */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative min-h-[800px]">
              
              {/* Left Column - OUR MISSION */}
              <div className="lg:col-span-1 flex items-start justify-center lg:justify-end">
                <div className="w-full max-w-[350px] relative" data-aos="fade-right" data-aos-delay="100">
                  <div className="bg-white rounded-lg shadow-lg p-6 relative z-20">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 flex-shrink-0"></div>
                      <h3 className="text-lg md:text-xl font-bold text-pink-600">OUR MISSION</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      We are committed to support our esteemed client's requirements by delivering on time, building trustworthy relationships and by offering complete requirement and training solutions. Our mission is to grow with existing customer by utilizing existing capacity and expands with new clients by Penetrating new client segment on India basis through technology up gradation.
                    </p>
                  </div>
                  {/* Connecting line from circle */}
                  <svg className="absolute hidden lg:block" style={{ left: '24px', top: '28px', width: '400px', height: '200px', zIndex: 1 }}>
                    <path
                      d="M 0 0 Q 100 30 200 70 L 380 120"
                      stroke="#ec4899"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Center Column - Puzzle Pieces */}
              <div className="lg:col-span-1 flex items-center justify-center relative">
                <div className="relative w-full h-[600px] flex items-center justify-center">
                  {/* Mission Puzzle Piece */}
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 md:-translate-x-[120px]" data-aos="fade-up" data-aos-delay="300">
                    <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-xl">
                      <defs>
                        <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="100%" stopColor="#db2777" />
                        </linearGradient>
                        <filter id="shadow">
                          <feDropShadow dx="3" dy="3" stdDeviation="3" floodOpacity="0.3"/>
                        </filter>
                      </defs>
                      <path
                        d="M 20 20 L 140 20 L 140 60 L 160 60 L 160 140 L 20 140 L 20 100 L 0 100 L 0 60 Z"
                        fill="url(#missionGradient)"
                        stroke="#be185d"
                        strokeWidth="2"
                        filter="url(#shadow)"
                      />
                      <text
                        x="90"
                        y="100"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="26"
                        fontWeight="bold"
                        fontFamily="Arial, sans-serif"
                        letterSpacing="1px"
                      >
                        MISSION
                      </text>
                    </svg>
                  </div>

                  {/* Vision Puzzle Piece */}
                  <div className="absolute top-20 right-1/2 translate-x-1/2 md:translate-x-[120px]" data-aos="fade-up" data-aos-delay="400">
                    <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-xl">
                      <defs>
                        <linearGradient id="visionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#ea580c" />
                        </linearGradient>
                        <filter id="shadow2">
                          <feDropShadow dx="3" dy="3" stdDeviation="3" floodOpacity="0.3"/>
                        </filter>
                      </defs>
                      <path
                        d="M 40 20 L 160 20 L 160 60 L 180 60 L 180 100 L 160 100 L 160 140 L 40 140 L 40 100 L 20 100 L 20 60 Z"
                        fill="url(#visionGradient)"
                        stroke="#c2410c"
                        strokeWidth="2"
                        filter="url(#shadow2)"
                      />
                      <text
                        x="100"
                        y="100"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="26"
                        fontWeight="bold"
                        fontFamily="Arial, sans-serif"
                        letterSpacing="1px"
                      >
                        VISION
                      </text>
                    </svg>
                  </div>

                  {/* Values Puzzle Piece */}
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2" data-aos="fade-up" data-aos-delay="500">
                    <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-xl">
                      <defs>
                        <linearGradient id="valuesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#84cc16" />
                          <stop offset="100%" stopColor="#65a30d" />
                        </linearGradient>
                        <filter id="shadow3">
                          <feDropShadow dx="3" dy="3" stdDeviation="3" floodOpacity="0.3"/>
                        </filter>
                      </defs>
                      <path
                        d="M 20 40 L 60 40 L 60 20 L 100 20 L 100 40 L 160 40 L 160 160 L 100 160 L 100 180 L 60 180 L 60 160 L 20 160 Z"
                        fill="url(#valuesGradient)"
                        stroke="#4d7c0f"
                        strokeWidth="2"
                        filter="url(#shadow3)"
                      />
                      <text
                        x="90"
                        y="110"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="26"
                        fontWeight="bold"
                        fontFamily="Arial, sans-serif"
                        letterSpacing="1px"
                      >
                        VALUES
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column - OUR VISION & OUR VALUES */}
              <div className="lg:col-span-1 flex flex-col gap-8 items-start justify-start">
                {/* OUR VISION */}
                <div className="w-full max-w-[350px] relative" data-aos="fade-left" data-aos-delay="200">
                  <div className="bg-white rounded-lg shadow-lg p-6 relative z-20">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      <h3 className="text-lg md:text-xl font-bold text-orange-600">OUR VISION</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      Our vision is inspired with on mission to create leaders, Winners and Achievers in a global Competitive Worlds. To be globally recognized as reputed Professional Consulting Firm for Corporate, Individuals and Entrepreneurs. Our vision for next decade is to become first choice of Business Partners for Employment services by strong links with existing & new clients.
                    </p>
                  </div>
                  {/* Connecting line from circle */}
                  <svg className="absolute hidden lg:block" style={{ right: '24px', top: '28px', width: '400px', height: '200px', zIndex: 1 }}>
                    <path
                      d="M 0 0 Q -100 30 -200 70 L -380 120"
                      stroke="#f97316"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* OUR VALUES */}
                <div className="w-full max-w-[350px] relative mt-auto" data-aos="fade-left" data-aos-delay="600">
                  <div className="bg-white rounded-lg shadow-lg p-6 relative z-20">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-lime-500 rounded-full mr-3 flex-shrink-0"></div>
                      <h3 className="text-lg md:text-xl font-bold text-lime-600">OUR VALUES</h3>
                    </div>
                    <ul className="text-gray-700 leading-relaxed space-y-2 text-sm md:text-base">
                      <li className="flex items-start">
                        <span className="text-lime-600 mr-2">•</span>
                        <span>Build Long Term Relationship</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-lime-600 mr-2">•</span>
                        <span>Empower People</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-lime-600 mr-2">•</span>
                        <span>Spread Knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-lime-600 mr-2">•</span>
                        <span>Build Trust</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-lime-600 mr-2">•</span>
                        <span>Delivered Optimal Result</span>
                      </li>
                    </ul>
                  </div>
                  {/* Connecting line from circle */}
                  <svg className="absolute hidden lg:block" style={{ right: '24px', bottom: '28px', width: '400px', height: '300px', zIndex: 1 }}>
                    <path
                      d="M 0 0 Q -80 -50 -160 -100 L -360 -250"
                      stroke="#84cc16"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Clients</h2>
          </div>
          <div className="max-w-5xl mx-auto" data-aos="zoom-in">
            <img
              src={ourClientsImg}
              alt="Our Clients"
              className="w-full md:w-11/12 lg:w-10/12 xl:w-3/4 h-auto rounded-lg shadow-lg object-contain mx-auto"
              decoding="async"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>
      {/* Our Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Working since 2013 for all type industries at Nashik, Sinnar, Ahilyanagar,
              Sambhaji Nagar, Pune & Mumbai industrial zones.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4 mb-12">
              We provide recruitment solutions and are committed to work ethically with a deep
              understanding of our clients’ needs — on time.
            </p>
          </div>

          {/* Mobile Journey Timeline */}
          <div className="md:hidden" data-aos="fade-up">
            <div className="space-y-8">
              {journeyMilestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold">{milestone.year}</span>
                      </div>
                      {index < journeyMilestones.length - 1 && (
                        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-blue-200"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Circular Journey Chart */}
          <div className="hidden md:flex justify-center" data-aos="zoom-in">
            <div className="relative w-[520px] h-[520px]">
              {/* Outer ring (slow rotation) */}
              <div className="absolute inset-0 rounded-full border-8 border-blue-100/70 animate-spin" style={{ animationDuration: '24s' }} />
              {/* Inner ring (counter-feel via different speed) */}
              <div className="absolute inset-8 rounded-full border-4 border-cyan-100/70 animate-spin" style={{ animationDuration: '36s' }} />

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-xs uppercase tracking-widest opacity-90">Since</div>
                    <svg className="mx-auto mt-1 w-7 h-7 opacity-95" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="mt-1 text-lg font-bold">2013</div>
                  </div>
                </div>
              </div>

              {journeyMilestones.map((m, idx) => {
                const total = journeyMilestones.length;
                const angle = (idx / total) * 360; // degrees
                const radius = 200; // px for desktop
                const transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
                const delay = idx * 120;
                return (
                  <div
                    key={idx}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform }}
                    data-aos="fade-up"
                    data-aos-delay={delay}
                  >
                    <div className="flex flex-col items-center w-48 -mt-4">
                      <span className="relative mb-2 inline-flex items-center justify-center w-10 h-10">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-blue-400/40 animate-ping"></span>
                        <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-lg ring-4 ring-white">
                          {m.year}
                        </span>
                      </span>
                      {/* connector */}
                      <span className="w-px h-4 bg-blue-200" />
                      <div className="bg-white/95 backdrop-blur rounded-md shadow-lg border border-blue-50 px-3 py-2 text-center hover:shadow-xl transition-shadow">
                        <div className="text-sm font-semibold text-gray-900">{m.title}</div>
                        <div className="text-xs text-gray-600 mt-1 leading-snug line-clamp-3">{m.desc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.title}</p>
                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-300">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABC Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                BUILDING CAREERS, BUILDING ORGANISATIONS WITH SIDDHIVINAYAK CONSULTANTS.
              </h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What is the Siddhivinayak culture about?
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start" data-aos="fade-up" data-aos-delay="100">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Our policies are based on trust - discretionary time off, responsible travel, work flexibility, paternity benefits, etc.
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  We are an equal opportunity employer with a diverse workforce
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-delay="300">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  India's Top 25 Safest Places to Work by KelpHR for two years in a row
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-delay="400">

                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  A certified Great Place to Work - Rank 21 (Top 10 for Women & Top 50 for Millennials)
                </li>
              </ul>
            </div>
            <div data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team photo"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Our Offices Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Offices
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition duration-300" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{office.city}</h3>
                <p className="text-gray-600 text-sm">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Follow Us
            </h2>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="#" className="group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-20 h-20 bg-blue-50 rounded-lg flex flex-col items-center justify-center hover:bg-blue-100 transition duration-300">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">LinkedIn</span>
              </div>
            </a>
            
            <a href="#" className="group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 bg-blue-50 rounded-lg flex flex-col items-center justify-center hover:bg-blue-100 transition duration-300">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Facebook</span>
              </div>
            </a>
            
            <a href="#" className="group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-20 h-20 bg-blue-50 rounded-lg flex flex-col items-center justify-center hover:bg-blue-100 transition duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Instagram</span>
              </div>
            </a>
            
            <a href="#" className="group" data-aos="fade-up" data-aos-delay="400">
              <div className="w-20 h-20 bg-blue-50 rounded-lg flex flex-col items-center justify-center hover:bg-blue-100 transition duration-300">
                <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Glassdoor</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
