import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/images/hero/hero.jpg';

const StaffRecruitment = () => {
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
              Staff Recruitment
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find the right talent for your organization with our comprehensive recruitment solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Recruitment Solutions</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our staff recruitment services help organizations identify, attract, and hire the best talent 
            for their specific needs. We understand that every role is unique, and we tailor our approach 
            to match your company culture and requirements.
          </p>
          
          {/* Team Description */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Expert Team</h3>
            <p className="text-gray-700 leading-relaxed">
              We have a team of skilled recruiters and headhunters who source the right candidate by exploiting our private database, their personal network, multilevel networking and job portals.
            </p>
          </div>

          {/* Industries Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Industries We Serve</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We cater recruitment solutions to various industries like Engineering, Automobile, Pharmaceutical, Food, Chemical, Civil, Glass, Paper, Polymer, BPO, ITES, Telecom, Banking, Hospitality, Healthcare, Medical, Secretary, Front Office, Data Entry, etc.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  End-to-end recruitment process management
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Industry-specific talent sourcing
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Comprehensive candidate screening
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Background verification and reference checks
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                  <span className="text-gray-700">Requirement Analysis & Job Profiling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                  <span className="text-gray-700">Talent Sourcing & Candidate Identification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                  <span className="text-gray-700">Screening & Initial Assessment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                  <span className="text-gray-700">Interview Coordination & Final Selection</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Features Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Extensive CV Database</h3>
                <p className="text-gray-700">We have 4,50,000 soft CV's & additional sources.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Recruiter Team</h3>
                <p className="text-gray-700">We have a team of 8 skilled recruiters who continuously work on vacant positions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Focused Attention</h3>
                <p className="text-gray-700">After receiving the vacancy we focus all our attention on the same task.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Lead Time</h3>
                <p className="text-gray-700">Our lead time is 16:00 hrs. We provide you a profile matching CV's against requirements.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Background Check</h3>
                <p className="text-gray-700">We do full background check of candidates, as well as check its location suitability for outside candidates & the reason why he is changing his present job, etc.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">6</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Head Hunting Services</h3>
                <p className="text-gray-700">We can provide good candidates by Head Hunting in Advance. All these screening tasks are performed by us.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 md:col-span-2">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">7</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Support</h3>
                <p className="text-gray-700">We do all formalities of candidates from Interview to joining.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Team Member?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let us help you identify and recruit the perfect candidate for your organization.
          </p>
          <button 
            onClick={() => navigate('/contact')} 
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffRecruitment;
