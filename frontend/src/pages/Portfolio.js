import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform Optimization",
      category: "Business Consulting",
      description: "Helped a retail company increase online sales by 150% through strategic platform optimization and user experience improvements.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      results: ["150% increase in sales", "40% improvement in conversion rate", "60% reduction in cart abandonment"]
    },
    {
      title: "Manufacturing Process Redesign",
      category: "Process Optimization",
      description: "Streamlined manufacturing operations for a mid-size company, resulting in 30% cost reduction and 50% faster production times.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      results: ["30% cost reduction", "50% faster production", "25% improvement in quality"]
    },
    {
      title: "Digital Transformation Strategy",
      category: "Technology Consulting",
      description: "Led digital transformation initiative for a traditional business, modernizing operations and improving customer engagement.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      results: ["80% digital adoption", "45% customer satisfaction increase", "35% operational efficiency gain"]
    },
    {
      title: "Financial Restructuring",
      category: "Financial Advisory",
      description: "Assisted a struggling company with financial restructuring, leading to improved cash flow and sustainable growth.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      results: ["40% debt reduction", "60% cash flow improvement", "25% revenue growth"]
    },
    {
      title: "Market Expansion Strategy",
      category: "Strategic Planning",
      description: "Developed and executed market expansion strategy for a regional business, successfully entering 3 new markets.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      results: ["3 new markets entered", "200% market reach increase", "85% customer acquisition success"]
    },
    {
      title: "Supply Chain Optimization",
      category: "Operations Consulting",
      description: "Optimized supply chain operations for a logistics company, reducing costs and improving delivery times significantly.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      results: ["35% cost reduction", "45% faster delivery", "90% on-time delivery rate"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform and achieve remarkable success through our strategic consulting services.
          </p>
        </div>

        {/* Portfolio Grid - Modern slide-like cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                    <div className="uppercase tracking-wider text-xs opacity-90">{project.category}</div>
                    <div className="font-bold text-lg leading-tight">{project.title}</div>
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
                    <div className="text-sm text-gray-500 font-semibold mb-2">Executive Summary</div>
                    <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                    <div className="space-y-2">
                      {project.results.slice(0, 3).map((point, i) => (
                        <div key={i} className="flex items-start text-sm text-gray-700">
                          <span className="mt-1 mr-2 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Right: Visual tile */}
                  <div className="relative rounded-lg overflow-hidden h-40 sm:h-full min-h-[160px]">
                <img 
                  src={project.image} 
                  alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/0" />
                </div>
              </div>
              
                {/* Footer stats bar */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 rounded-md p-3">
                    <div className="text-xs text-gray-500">Impact</div>
                    <div className="font-semibold text-gray-900">High</div>
                  </div>
                  <div className="bg-gray-50 rounded-md p-3">
                    <div className="text-xs text-gray-500">Timeline</div>
                    <div className="font-semibold text-gray-900">12 wks</div>
                  </div>
                  <div className="bg-gray-50 rounded-md p-3">
                    <div className="text-xs text-gray-500">ROI</div>
                    <div className="font-semibold text-gray-900">2.5x</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="zoom-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
