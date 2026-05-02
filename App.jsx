import React, { useEffect } from 'react';
import { 
  Heart, 
  UserPlus, 
  Stethoscope, 
  Activity, 
  Baby, 
  Syringe, 
  Truck, 
  Building2, 
  FileCheck, 
  ShieldCheck, 
  Mail, 
  Phone,
  Users,
  Microscope,
  Briefcase
} from 'lucide-react';


import LogoImg from './Logo.jpg';
import DrNaiduImg from './DR Naidu.jpg';
import VidyaImg from './Vidya.jpg';
import ShekarImg from './Shekar.jpg';
import BilalImg from './Bilal.jpg';


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
    { 
      id: 'adv-nursing', 
      title: 'Specialised & Advanced Nursing', 
      img: 'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Post-surgical care, critical care support, wound management, and chronic illness management.' 
    },
    { 
      id: 'nursing-services', 
      title: 'Nursing Services', 
      img: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Round-the-clock (12/24 hrs) nursing care by trained and experienced nurses.' 
    },
    { 
      id: 'transactional', 
      title: 'Transactional services', 
      img: 'https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Professional clinical support including Injection Administration, IV Therapy, Ryle’s Tube Insertion, and Wound Dressing.' 
    },
    { 
      id: 'doctor-visit', 
      title: 'Doctor visit at Home', 
      img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Comprehensive medical consultations conducted by qualified physicians in your home.' 
    },
    { 
      id: 'diagnostics', 
      title: 'Diagnostics', 
      img: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Comprehensive diagnostic tests and health packages tailored for your well-being.' 
    },
    { 
      id: 'bedside', 
      title: 'Bedside Assistance', 
      img: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: '24-hour attendants for elderly, post-operative, or bedridden patients.' 
    },
    { 
      id: 'physio', 
      title: 'Physiotherapy Services', 
      img: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Expert physiotherapy for recovery, pain management, and mobility improvement.' 
    },
    { 
      id: 'equipment', 
      title: 'Medical Equipment on Rent', 
      img: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Hospital beds, oxygen concentrators, BiPAP, and ICU setups delivered to your home.' 
    },
    { 
      id: 'vaccine', 
      title: 'Vaccine Administration', 
      img: 'https://images.pexels.com/photos/5863389/pexels-photo-5863389.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Safe vaccination services (flu, pneumonia, routine immunisations) at your doorstep.' 
    },
  ];

  const b2bServices = [
    { 
      id: 'annual-checkup', 
      title: 'Annual Health Check-ups', 
      img: 'https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Systematic yearly health evaluations for workforce longevity and safety.' 
    },
    { 
      id: 'fitness-cert', 
      title: 'Medical Fitness Certifications', 
      img: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Clearance and fitness evaluations for new hires and safety compliance.' 
    },
    { 
      id: 'corporate-wellness', 
      title: 'Corporate Wellness Programs', 
      img: 'https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Tailored health education and intervention programs for the workplace.' 
    },
    { 
      id: 'onsite-camps', 
      title: 'On-site health camps', 
      img: 'https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=800', 
      desc: 'Direct healthcare camps conducted at your facility for screening and initiatives.' 
    },
  ];

  const experts = [
    { 
      name: "Dr. DY Naidu", 
      role: "MBBS, AFIH", 
      img: DrNaiduImg,
      specialty: "Chief Medical Advisor"
    },
    { 
      name: "Vidya", 
      role: "MBBS", 
      img: VidyaImg,
      specialty: "General Physician"
    },
    { 
      name: "Shekar", 
      role: "BPT", 
      img: ShekarImg,
      specialty: "Sr. Physiotherapist"
    },
    { 
      name: "Bilal", 
      role: "MPT (Sports), MIAP", 
      img: BilalImg,
      specialty: "Sports Physiotherapist"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#84cc16] selection:text-[#0a1931]">
      {/* Top Bar */}
      <div className="bg-[#0a1931] text-white py-2 text-xs md:text-sm border-b border-gray-800">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#84CC16]" />
            <span>Info@squarehealth.in</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#84CC16]" />
            <span>+917729837756</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50 py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={LogoImg} alt="Square Health Logo" className="h-12 w-auto object-contain rounded" />
            <div className="flex flex-col">
              <div className="text-2xl font-black leading-none text-[#0a1931] tracking-tighter uppercase">SQUARE</div>
              <div className="text-[10px] font-bold text-gray-700 leading-tight">Medical & Health Care Services</div>
              <div className="text-[9px] font-bold text-[#1E3A8A] tracking-wider mt-0.5">Run by EX-SERVICEMEN</div>
            </div>
          </div>
          <div className="hidden lg:flex gap-8 font-bold text-[13px] text-[#0a1931] uppercase tracking-wide">
            <button onClick={() => handleNavClick('about')} className="hover:text-[#1E3A8A] transition">About Us</button>
            <button onClick={() => handleNavClick('home-services')} className="hover:text-[#1E3A8A] transition">Home Services</button>
            <button onClick={() => handleNavClick('b2b-section')} className="hover:text-[#1E3A8A] transition">B2B Services</button>
            <button onClick={() => handleNavClick('team')} className="hover:text-[#1E3A8A] transition">Experts</button>
            <button onClick={() => handleNavClick('contact')} className="bg-[#1E3A8A] text-white px-6 py-2 rounded-lg hover:bg-[#0a1931] transition shadow-md">Book Now</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover" alt="Hero Background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1931] via-[#0a1931f2] to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <span className="inline-block bg-[#FF0000] text-white font-black text-[10px] uppercase px-4 py-1 mb-6 tracking-widest">Ex-Servicemen Enterprise</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">Special Care for <br/><span className="text-[#84CC16]">Your Family's Health</span></h1>
            <p className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Square Medical and Health Care Services is a trusted, Indian Armed Forces veteran-led home healthcare company, dedicated to delivering professional, compassionate, and reliable Health care services directly at the doorstep of clients across Hyderabad and Secunderabad.
            </p>
            <div className="flex gap-4">
              <button onClick={() => handleNavClick('home-services')} className="bg-[#1E3A8A] px-8 py-4 font-bold uppercase text-sm tracking-wider hover:bg-[#0a1931] transition shadow-2xl">Explore Services</button>
              <button onClick={() => handleNavClick('b2b-section')} className="border-2 border-white px-8 py-4 font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-[#0a1931] transition">Corporate Solutions</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 relative">
              <img src="https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=800" className="rounded-lg shadow-2xl border-4 border-gray-50" alt="About Us" />
              <div className="absolute -bottom-8 -left-8 bg-[#FF0000] p-10 rounded-lg text-white text-center shadow-2xl">
                <div className="text-5xl font-black">20+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] mt-2">Years of Valor</div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-[#0a1931] text-4xl font-bold mb-8 leading-snug uppercase tracking-tight">Square Medical and Health Care Services</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
                <p><strong>Square Medical and Health Care Services</strong> is a trusted, Indian Armed Forces veteran-led home healthcare company, dedicated to delivering professional, compassionate, and reliable Health care services directly at the doorstep of clients across Hyderabad and Secunderabad.</p>
                <p>Founded and run by ex-servicemen who have served with honour in the Indian Armed Forces for over 20 years, Square Medical and Health Care Services brings the same values of discipline, integrity, commitment, and selfless service into the healthcare sector.</p>
                <p>With more than 10 years of hands-on experience in home health care services, we provide comprehensive home healthcare services in the comfort and privacy of your home.</p>
                <p>What truly sets us apart is the unique combination of military discipline with compassionate care. The team treats every patient like family, ensuring timely service, strict hygiene protocols, and complete accountability.</p>
                <p className="text-[#1E3A8A] font-bold text-xl uppercase tracking-tight pt-4">Proudly serving for your good health is our priority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Services */}
      <section id="home-services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-[#0a1931] text-4xl font-black mb-4 uppercase tracking-tighter">Comprehensive Doorstep Healthcare Services</h2>
            <div className="h-1.5 w-24 bg-[#1E3A8A] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg font-medium">Square Health Care Services offers a complete range of professional healthcare solutions at your doorstep, including:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {homeServices.map((service) => (
              <div key={service.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="h-60 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#0a1931] mb-3 uppercase tracking-tight leading-tight">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section id="b2b-section" className="py-24 bg-[#0a1931] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-white text-4xl font-black mb-4 uppercase tracking-tighter">B2B : Corporate/Industries Health Solutions</h2>
            <div className="h-1.5 w-24 bg-[#84CC16] mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg font-medium">Beyond individual care, we also provide customised health check-up packages for corporates and industries through tailored B2B health programs, such as:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bServices.map((service) => (
              <div key={service.id} className="relative group rounded-xl overflow-hidden h-72 shadow-2xl border border-white/10">
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1931] via-[#0a1931cc] to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-2 leading-tight uppercase tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest line-clamp-2">{service.desc}</p>
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
            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Led by Qualified Professionals</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {experts.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl group-hover:border-[#1E3A8A] transition-all duration-300">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
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
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-10">
             <img src={LogoImg} alt="Square Health Logo" className="h-20 w-auto object-contain rounded brightness-0 invert" />
          </div>
          <div className="text-white text-3xl font-black mb-4 uppercase tracking-tighter leading-none">
            SQUARE <span className="text-gray-400">Medical & Health</span>
          </div>
          <p className="text-[#84CC16] font-black italic text-xl mb-12 leading-tight">"We Served the Nation... Now We Service the People..."</p>
          <div className="flex flex-wrap justify-center gap-10 mb-16 text-gray-500 font-black text-xs uppercase tracking-[0.2em]">
            <button onClick={() => handleNavClick('about')} className="hover:text-white transition">About</button>
            <button onClick={() => handleNavClick('home-services')} className="hover:text-white transition">Services</button>
            <button onClick={() => handleNavClick('b2b-section')} className="hover:text-white transition">Corporate</button>
            <button onClick={() => handleNavClick('team')} className="hover:text-white transition">Experts</button>
          </div>
          <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
            &copy; 2026 Square Medical and Health Care Services. Registered Ex-Servicemen Enterprise.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
