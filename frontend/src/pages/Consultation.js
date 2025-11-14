import React, { useState } from 'react';
import heroImage from '../assets/images/hero/hero.jpg';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Consultation form submitted:', formData);
    alert('Thank you for your consultation request! We will contact you within 24 hours.');
  };

  const consultationSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with a free initial consultation to understand your business needs and challenges."
    },
    {
      step: "02", 
      title: "Needs Assessment",
      description: "Our experts conduct a thorough assessment of your current situation and requirements."
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "We develop a customized strategy and action plan tailored to your specific goals."
    },
    {
      step: "04",
      title: "Implementation & Support",
      description: "We provide ongoing support and guidance throughout the implementation process."
    }
  ];

  const consultationBenefits = [
    {
      icon: "🎯",
      title: "Strategic Guidance",
      description: "Expert advice to help you make informed business decisions and achieve your goals."
    },
    {
      icon: "📈",
      title: "Growth Acceleration",
      description: "Proven strategies to accelerate your business growth and improve performance."
    },
    {
      icon: "⚡",
      title: "Quick Results",
      description: "Fast implementation with measurable results and immediate impact on your business."
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      description: "Continuous support and guidance to ensure long-term success and sustainability."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" data-aos="fade-up">
      {/* Hero Section with Background Image */}
      <div className="relative h-[260px] md:h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free Consultation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get expert advice and strategic guidance to transform your business. Schedule your free consultation today.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[600px]">
          {/* Left Section - Get Expert Advice */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Get Expert Advice</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Schedule a free consultation with our experienced consultants and discover how we can transform your business
              </p>
            </div>
            
            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              {/* Call Us Now */}
              <div className="bg-blue-50 rounded-lg p-4 flex items-center space-x-4 hover:bg-blue-100 transition duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us Now</h3>
                  <a href="tel:7774811211" className="text-blue-600 font-medium">777-481-1211</a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="bg-green-50 rounded-lg p-4 flex items-center space-x-4 hover:bg-green-100 transition duration-300">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-green-600 font-medium">Quick Response</p>
                </div>
              </div>
              
              {/* Email Us */}
              <div className="bg-purple-50 rounded-lg p-4 flex items-center space-x-4 hover:bg-purple-100 transition duration-300">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <a href="mailto:siddhivinayakemployment@gmail.com" className="text-purple-600 font-medium">siddhivinayakemployment@gmail.com</a>
                </div>
              </div>

              {/* Website */}
              <div className="bg-cyan-50 rounded-lg p-4 flex items-center space-x-4 hover:bg-cyan-100 transition duration-300">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a8 8 0 100 15.292 8 8 0 000-15.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Website</h3>
                  <a href="https://www.siddhivinayakemployment.com" target="_blank" rel="noreferrer" className="text-cyan-700 font-medium">www.siddhivinayakemployment.com</a>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule Free Consultation</span>
            </button>
          </div>
          
          {/* Right Section - Why Choose Our Consultation */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg p-8 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose Our Consultation?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Get personalized business solutions from industry experts with proven track record
              </p>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Free Consultation */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">Free Consultation</h3>
                <p className="text-gray-600 text-sm text-center">No cost initial assessment of your business needs</p>
              </div>
              
              {/* 24/7 Support */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm text-center">Round the clock assistance for urgent queries</p>
              </div>
              
              {/* Expert Team */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm text-center">Seasoned professionals with industry expertise</p>
              </div>
              
              {/* Proven Results */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">Proven Results</h3>
                <p className="text-gray-600 text-sm text-center">Track record of successful business transformations</p>
              </div>
            </div>
            
            {/* Statistics */}
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-1">500+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-1">15+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Consultation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven 4-step process to ensure you get the most value from your consultation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't wait any longer. Schedule your free consultation today and take the first step towards achieving your business goals.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Schedule Consultation Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
