import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import BrowseJobs from './pages/BrowseJobs';
import SubmitCV from './pages/SubmitCV';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
// Service pages
import StaffRecruitment from './pages/services/StaffRecruitment';
import Staffing from './pages/services/Staffing';
import Training from './pages/services/Training';
import ResumeBuilding from './pages/services/ResumeBuilding';
import InterviewPreparation from './pages/services/InterviewPreparation';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-in-out', once: true, offset: 100 });
  }, []);
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/staff-recruitment" element={<StaffRecruitment />} />
            <Route path="/services/staffing" element={<Staffing />} />
            <Route path="/services/training" element={<Training />} />
            <Route path="/services/resume-building" element={<ResumeBuilding />} />
            <Route path="/services/interview-preparation" element={<InterviewPreparation />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/browse-jobs" element={<BrowseJobs />} />
            <Route path="/submit-cv" element={<SubmitCV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consultation" element={<Consultation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
