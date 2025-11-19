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
    { 
      city: "Sinnar", 
      address: "Office No -3, Chaitnya Vilas Apartment, Chhatrapati Chauk, Shivaji Nagar, Sinnar, Maharashtra (India)",
      phone: "+91-777-481-1211",
      email: "sinnar@siddhivinayakemployment.com"
    },
    { 
      city: "Nashik", 
      address: "Siddhivinayak Employment Services, Shop NO. 315, 3rd Floor, Roongta Majestic Apartment, Kamod Nagar, Nashik – 422009, Maharashtra",
      phone: "+91-777-481-1211",
      email: "nashik@siddhivinayakemployment.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* About Us Content (client-provided) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">About Us</h2>
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
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
      <section className="py-16 bg-white text-gray-800" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">
            Mission, Vision & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-pink-500 text-white p-8 rounded-2xl shadow-lg relative" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute -top-5 left-6 bg-white text-pink-500 px-3 py-1 text-sm font-semibold rounded-full shadow">
                Our Mission
              </div>
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <p className="text-sm leading-relaxed">
                We are committed to support our esteemed client's requirements by delivering on time, building trustworthy relationships and by offering complete requirement and training solutions. Our mission is to grow with existing customers by utilizing existing capacity and expand with new clients by penetrating new client segments across India through technology upgradation.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-orange-400 text-white p-8 rounded-2xl shadow-lg relative" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute -top-5 left-6 bg-white text-orange-500 px-3 py-1 text-sm font-semibold rounded-full shadow">
                Our Vision
              </div>
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p className="text-sm leading-relaxed">
                Our vision is inspired by our mission to create leaders, winners, and achievers in a globally competitive world. We strive to be recognized as a reputed professional consulting firm for corporates, individuals, and entrepreneurs. Our vision for the next decade is to become the first choice of business partners for employment services by building strong links with existing and new clients.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-green-500 text-white p-8 rounded-2xl shadow-lg relative" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute -top-5 left-6 bg-white text-green-500 px-3 py-1 text-sm font-semibold rounded-full shadow">
                Our Values
              </div>
              <h3 className="text-xl font-bold mb-4">Values</h3>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Build Long Term Relationships</li>
                <li>Empower People</li>
                <li>Spread Knowledge</li>
                <li>Build Trust</li>
                <li>Deliver Optimal Results</li>
              </ul>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => {
              const isBlue = index === 0;
              
              return (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br ${isBlue ? 'from-blue-50 via-cyan-50 to-transparent' : 'from-purple-50 via-pink-50 to-transparent'} rounded-xl shadow-xl border-2 ${isBlue ? 'border-blue-300' : 'border-purple-300'} p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group`}
                  data-aos="fade-up" 
                  data-aos-delay={index * 150}
                >
                  {/* Animated background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${isBlue ? 'from-blue-600 via-blue-500 to-cyan-500' : 'from-purple-600 via-purple-500 to-pink-500'} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}></div>
                  
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-xl border-2 ${isBlue ? 'border-blue-300' : 'border-purple-300'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}></div>
                  
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 ${isBlue ? 'bg-gradient-to-br from-blue-600 to-cyan-500' : 'bg-gradient-to-br from-purple-600 to-pink-500'} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative`}>
                        {/* Pulsing ring animation */}
                        <div className={`absolute inset-0 rounded-lg ${isBlue ? 'bg-cyan-500' : 'bg-pink-500'} animate-ping opacity-75`}></div>
                        <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${isBlue ? 'group-hover:text-blue-600' : 'group-hover:text-purple-600'} transition-colors duration-300`}>
                        {office.city} Office
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                          <svg className={`w-5 h-5 ${isBlue ? 'text-blue-600' : 'text-purple-600'} mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <p className="text-gray-700 leading-relaxed font-medium">{office.address}</p>
                        </div>
                        {office.phone && (
                          <div className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                            <div className="relative">
                              <svg className={`w-5 h-5 ${isBlue ? 'text-blue-600' : 'text-purple-600'} flex-shrink-0 group-hover:scale-125 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                            <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className={`${isBlue ? 'text-blue-600 hover:text-blue-700' : 'text-purple-600 hover:text-purple-700'} font-semibold hover:underline transition-all duration-300`}>
                              {office.phone}
                            </a>
                          </div>
                        )}
                        {office.email && (
                          <div className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                            <svg className={`w-5 h-5 ${isBlue ? 'text-blue-600' : 'text-purple-600'} flex-shrink-0 group-hover:scale-125 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href={`mailto:${office.email}`} className={`${isBlue ? 'text-blue-600 hover:text-blue-700' : 'text-purple-600 hover:text-purple-700'} font-semibold hover:underline transition-all duration-300`}>
                              {office.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className={`absolute top-0 right-0 w-24 h-24 ${isBlue ? 'bg-blue-100' : 'bg-purple-100'} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${isBlue ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gradient-to-r from-purple-600 to-pink-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl`}></div>
                </div>
              );
            })}
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
