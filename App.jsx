import React, { useEffect } from 'react';
import { 
  Mail, 
} from 'lucide-react';

import LogoImg from './Logo.jpg';
import DrNaiduImg from './DR Naidu.jpg';
import VidyaImg from './Vidya.jpg';
import ShekarImg from './Shekar.jpg';
import BilalImg from './Bilal.jpg';
import Bedside from './Bedsideattendant.jpeg';
import DocHome from './Doctor at Home.png';
import NursingCare from './Specialised nursing care.jpeg';
import NursingService from './Transactional Nursing servcie.png';
import Physiotherapy from './physiotherapy.jpeg';
import Vaccination from './vaccination.png';
// WhatsApp Logo SVG
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 448 512" 
    fill="currentColor" 
    className={className}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 14.4 4.5 27.5 3.9 37.9 2.4 11.5-1.7 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const homeServices = [
    { id: 'adv-nursing', title: 'Specialised & Advanced Nursing', img:NursingCare, desc: 'Post-surgical care, critical care support, wound management, and chronic illness management.' },
    { id: 'nursing-services', title: 'Nursing Services', img:NursingService, desc: 'Round-the-clock (12/24 hrs) nursing care by trained and experienced nurses.' },
    { id: 'transactional', title: 'Transactional services', img: 'https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Professional support including Injection Administration, IV Therapy, Ryle’s Tube Insertion, and Wound Dressing.' },
    { id: 'doctor-visit', title: 'Doctor visit at Home', img: DocHome, desc: 'Comprehensive medical consultations conducted by qualified physicians in your home.' },
    { id: 'diagnostics', title: 'Diagnostics', img: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Comprehensive diagnostic tests and health packages tailored for your well-being.' },
    { id: 'bedside', title: 'Bedside Assistance',img: Bedside, desc: '24-hour attendants for elderly, post-operative, or bedridden patients.' },
    { id: 'physio', title: 'Physiotherapy Services', img: Physiotherapy, desc: 'Expert physiotherapy for recovery, pain management, and mobility improvement.' },
    { id: 'equipment', title: 'Medical Equipment on Rent', img: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Hospital beds, oxygen concentrators, BiPAP, and ICU setups delivered to your home.' },
    { id: 'vaccine', title: 'Vaccine Administration', img: Vaccination, desc: 'Safe vaccination services (flu, pneumonia, routine immunisations) at your doorstep.' },
  ];

  const b2bServices = [
    { id: 'annual-checkup', title: 'Annual Health Check-ups', img: 'https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'fitness-cert', title: 'Medical Fitness Certifications', img: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'corporate-wellness', title: 'Corporate Wellness Programs', img: 'https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'onsite-camps', title: 'On-site health camps', img: 'https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  const experts = [
    { name: "Dr. DY Naidu", role: "Chief Medical Advisor", img: DrNaiduImg, specialty: "MBBS, AFIH" },
    { name: "Vidya", role: "General Physician", img: VidyaImg, specialty: "MBBS" },
    { name: "Shekar", role: "Sr. Physiotherapist", img: ShekarImg, specialty: "BPT" },
    { name: "Bilal", role: "Sports Physiotherapist", img: BilalImg, specialty: "MPT (Sports), MIAP" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#84cc16] selection:text-[#0a1931]">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/917729837756" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>

      {/* Top Bar */}
      <div className="bg-[#0a1931] text-white py-5 md:py-7">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-[#eab308] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <Mail size={20} className="text-white" />
              </div>
              <span className="text-sm md:text-lg font-semibold tracking-wide">Info@squarehealth.in</span>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-[#eab308] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <WhatsAppIcon size={20} className="text-white" />
              </div>
              <span className="text-sm md:text-lg font-semibold tracking-wide">+91 7729837756</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50 py-4 shadow-sm border-b">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={LogoImg} alt="Square Health Logo" className="h-24 w-auto object-contain" />
          </div>
          <div className="hidden lg:flex gap-12 font-bold text-[15px] text-[#0a1931] uppercase tracking-wide">
            <button onClick={() => handleNavClick('about')} className="hover:text-[#1E3A8A] transition">About Us</button>
            <button onClick={() => handleNavClick('home-services')} className="hover:text-[#1E3A8A] transition">Home Care</button>
            <button onClick={() => handleNavClick('b2b-section')} className="hover:text-[#1E3A8A] transition">B2B Services</button>
            <button onClick={() => handleNavClick('team')} className="hover:text-[#1E3A8A] transition">Experts</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover" alt="Hero Background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1931] via-[#0a1931f2] to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Special Care for <br/>
              <span className="text-[#84CC16]">Your Family's Health</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Square Medical and Health Care Services is a trusted home healthcare company, dedicated to delivering professional and reliable health care services directly at your doorstep.
            </p>
            <button onClick={() => handleNavClick('home-services')} className="bg-[#1E3A8A] px-10 py-5 font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-[#0a1931] transition shadow-2xl text-white rounded-xl">Explore Services</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 relative">
              <img src="https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=800" className="rounded-2xl shadow-2xl w-full" alt="About Us" />
              <div className="absolute -bottom-8 -left-8 bg-[#0a1931] p-10 rounded-2xl text-white text-center shadow-2xl">
                <div className="text-5xl font-black">20+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-2">Years of Experience</div>
              </div>
            </div>
            <div className="flex-1 text-justify">
              <h2 className="text-[#0a1931] text-4xl font-bold mb-8 uppercase tracking-tight">Square Medical and Health Care Services</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  <strong>Square Medical and Health Care Services</strong> is a trusted, Indian Armed Forces veteran-led home healthcare company, dedicated to delivering professional, compassionate, and reliable Health care services directly at the doorstep of clients across Hyderabad and Secunderabad.
                </p>
                <p>
                  Founded and run by ex-servicemen who have served with honour in the Indian Armed Forces for over 20 years, Square Medical and Health Care Services brings the same values of discipline, integrity, commitment, and selfless service into the healthcare sector.
                </p>
                <p>
                  With more than 10 years of hands-on experience in home health care services, we provide comprehensive home healthcare services in the comfort and privacy of your home.
                </p>
                <p>
                  What truly sets Square Medical and Health Care Services apart is the unique combination of military discipline with compassionate care. The team treats every patient like family, ensuring timely service, strict hygiene protocols, transparent communication, and complete accountability — values deeply ingrained from their years of service in the Indian Armed Forces.
                </p>
                <p className="text-[#1E3A8A] font-bold text-xl uppercase tracking-tight pt-4">Proudly serving for your good health is our priority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="home-services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-[#0a1931] text-4xl font-black mb-4 uppercase tracking-tighter">Comprehensive Doorstep Healthcare Services</h2>
            <div className="h-1.5 w-24 bg-[#1E3A8A] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg font-medium italic">Offering professional healthcare solutions at your doorstep, including:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {homeServices.map((service) => (
              <div key={service.id} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:-translate-y-2 transition-all duration-300">
                <div className="h-60 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center text-center">
                  <h3 className="text-xl font-bold text-[#0a1931] mb-3 uppercase tracking-tight leading-tight">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section id="b2b-section" className="py-24 bg-[#0a1931] relative">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-white text-4xl font-black mb-4 uppercase tracking-tighter">B2B : Corporate Health Solutions</h2>
            <div className="h-1.5 w-24 bg-[#84CC16] mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg font-medium italic text-center">Customised health check-up packages for corporates and industries through tailored B2B health programs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bServices.map((service) => (
              <div key={service.id} className="relative group rounded-xl overflow-hidden h-80 shadow-2xl border border-white/10">
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1931] via-[#0a1931cc] to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2 leading-tight uppercase tracking-tight">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section id="team" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#0a1931] text-4xl font-black mb-4 uppercase tracking-tighter">Medical Experts & Staff</h2>
            <div className="h-1.5 w-24 bg-[#1E3A8A] mx-auto mb-4"></div>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Qualified Leadership</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {experts.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-52 h-52 mx-auto mb-8 rounded-full overflow-hidden border-8 border-gray-50 shadow-xl group-hover:border-[#1E3A8A] transition-all duration-300">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition duration-500" />
                </div>
                <h4 className="font-black text-[#0a1931] text-xl uppercase tracking-tighter">{member.name}</h4>
                <p className="text-[#1E3A8A] text-sm font-black mt-2 tracking-widest uppercase">{member.role}</p>
                <div className="text-gray-400 text-[10px] font-bold mt-1 uppercase tracking-widest">{member.specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#050a14] py-24 text-center">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-12">
             <img src={LogoImg} alt="Square Health Logo" className="h-32 w-auto object-contain rounded-lg shadow-xl" />
          </div>
          <p className="text-[#84CC16] font-black italic text-xl mb-12 italic">"We Served the Nation... Now We Service the People..."</p>
          <div className="flex flex-wrap justify-center gap-10 mb-16 text-gray-500 font-black text-xs uppercase tracking-[0.2em]">
            <button onClick={() => handleNavClick('about')} className="hover:text-white transition border-b border-transparent hover:border-white">About Us</button>
            <button onClick={() => handleNavClick('home-services')} className="hover:text-white transition border-b border-transparent hover:border-white">Services</button>
            <button onClick={() => handleNavClick('b2b-section')} className="hover:text-white transition border-b border-transparent hover:border-white">Corporate</button>
          </div>
          <div className="text-gray-600 text-[11px] font-bold uppercase tracking-widest border-t border-white/10 pt-10">
            &copy; Since 2020 Square Medical and Health Care Services. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
