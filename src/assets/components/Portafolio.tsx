import { useState} from 'react';
import { Footer } from './common/Footer';
import { Header } from './common/Header';
import { AboutSection } from './Section/AboutSection';
import { SkillsSection } from './Section/SkillsSection';
import { ProjectsSection } from './Section/ProjectSection';
import { EducationSection } from './Section/EducationSection';
import { ContactSection } from './Section/ContactSection';


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const isVisible = true;

const handleSectionChange = (section: string) => {
    setActiveSection(section);
    // Scroll suave a la sección correspondiente
    const sectionId = `section-${section}`;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  console.log('Active Section:', activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-emerald-950 to-emerald-800 text-white relative overflow-hidden">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>
     <Header isVisible={isVisible} activeSection={activeSection} handleSectionChange={handleSectionChange} />

      <main className="relative z-10 max-w-7xl mx-auto px-8 pb-16">
        <section id="section-about">{activeSection === 'about' && <AboutSection isVisible={isVisible} />}</section>
        <section id="section-skills">{activeSection === 'skills' && <SkillsSection />}</section>
        <section id="section-projects">{activeSection === 'projects' && <ProjectsSection isVisible={isVisible} />}</section>
        <section id="section-education">{activeSection === 'education' && <EducationSection />}</section>
        <section id="section-contact">{activeSection === 'contact' && <ContactSection />}</section>
      </main>

      <Footer/>
    
    </div>
  );
};

export default Portfolio;