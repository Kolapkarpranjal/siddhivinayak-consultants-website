import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Business Consulting",
      description: "Strategic guidance to help your business grow and succeed in today's competitive market.",
      icon: "💼",
      features: ["Strategic Planning", "Market Analysis", "Business Development", "Growth Strategies"]
    },
    {
      title: "Financial Advisory",
      description: "Expert financial advice to optimize your business performance and profitability.",
      icon: "💰",
      features: ["Financial Planning", "Investment Advisory", "Risk Management", "Cost Optimization"]
    },
    {
      title: "Process Optimization",
      description: "Streamline your operations and improve efficiency across all business processes.",
      icon: "⚙️",
      features: ["Process Analysis", "Workflow Design", "Efficiency Improvement", "Quality Management"]
    },
    {
      title: "Technology Consulting",
      description: "Leverage technology to transform your business and stay ahead of the competition.",
      icon: "💻",
      features: ["Digital Transformation", "IT Strategy", "System Integration", "Technology Assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer comprehensive consulting services to help your business achieve its goals 
          and reach new heights of success.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-800 mb-3">What we offer:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how we can help your business grow and succeed.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
