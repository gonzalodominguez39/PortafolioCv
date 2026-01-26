import { useState, useEffect } from 'react'
import './App.css'
import ParticlesBackground from './components/background/BackgroundParticles'
import Typewriter from './components/Typewriter'
import { motion } from 'framer-motion'
import Header from './components/header/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Download } from 'lucide-react'

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [_isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Mostrar header cuando se haya scrolleado más del 50% de la altura de la ventana
      if (scrollPosition > windowHeight * 0.5) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      // Cambiar estilo del header basado en scroll
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    // Crear sección de proyectos si no existe, por ahora solo hace scroll
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Scroll hacia abajo de la página
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };


  const scrollToAboutMe = () => {
    // Crear sección de proyectos si no existe, por ahora solo hace scroll
    const projectsSection = document.getElementById('about-me');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Scroll hacia abajo de la página
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen  main-font">
      {/* Header condicional */}
      {showHeader && <Header />}

      {/* Sección principal */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <ParticlesBackground />

        <motion.div
          className="z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Hola, yo soy{" "}
            <strong className="text-cyan-400 font-bold block md:inline">
              <Typewriter text="Gonzalo Dominguez" speed={150} />
            </strong>
            <br className="hidden md:block" />
            Desarrollador Full Stack
          </h2>
          <div className="flex flex-col items-center gap-6">
            <motion.div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-4 w-full">
              <motion.button
                onClick={scrollToProjects}
                className="w-full md:w-auto px-8 py-3 bg-cyan-400 text-black font-bold rounded-lg border border-cyan-400 cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg shadow-cyan-400/20"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(34, 211, 238, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Proyectos
              </motion.button>
              <motion.button
                onClick={scrollToAboutMe}
                className="w-full md:w-auto px-8 py-3 bg-transparent text-white font-bold rounded-lg border border-white/20 cursor-pointer hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(255, 255, 255, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Sobre mí
              </motion.button>
            </motion.div>

            <motion.a
              href="/GonzaloDominguez_cv.pdf"
              download
              className="flex items-center gap-2 px-8 py-3 bg-white/5 backdrop-blur-md text-white font-bold rounded-lg border border-white/10 cursor-pointer hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(34, 211, 238, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Descargar CV
            </motion.a>
          </div>
        </motion.div>
      </div>

      <AboutMe />

      <Projects />

      <Contact />
    </div>
  );

}

export default App;
