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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform and achieve remarkable success through our strategic consulting services.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Results */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
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
