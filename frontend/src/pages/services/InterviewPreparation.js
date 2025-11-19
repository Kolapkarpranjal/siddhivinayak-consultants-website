import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/images/hero/hero.jpg';

const InterviewPreparation = () => {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" data-aos="fade-up">
      {/* Hero Section with Background Image */}
      <div className="relative h-[260px] md:h-[360px] overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transform transition-transform duration-[1200ms] ease-out ${isMounted ? 'scale-100' : 'scale-110'}`}
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Interview Preparation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ace your interviews with confidence through our comprehensive preparation programs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Interview Preparation</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Success in interviews requires more than just qualifications. Our interview preparation 
            services help you develop the confidence, skills, and strategies needed to make a 
            lasting impression and secure your dream job.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Preparation Areas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Common interview questions and answers
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Behavioral and situational questions
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Technical and domain-specific preparation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Body language and presentation skills
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Training Methods</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                  <span className="text-gray-700">Mock interview sessions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                  <span className="text-gray-700">Video recording and feedback</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                  <span className="text-gray-700">Industry-specific preparation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                  <span className="text-gray-700">Confidence building exercises</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Next Interview?</h2>
          <p className="text-xl mb-6 opacity-90">
            Build confidence and master interview skills with our comprehensive preparation programs.
          </p>
          <button 
            onClick={() => navigate('/contact')} 
            className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Start Preparing Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewPreparation;
