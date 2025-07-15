import perfil from '/perfil.png'
import {
  Briefcase,
  Code,
  Download,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from 'lucide-react'
import NavButton from './NavButton'
import { useEffect, useState } from 'react'

type HeaderProps = {
  isVisible: boolean
  handleSectionChange: (section: string) => void
  activeSection: string
}
export const Header = ({isVisible,activeSection,handleSectionChange}: HeaderProps) => {
  const fullName = 'Gonzalo Dominguez'
  const [displayedName, setDisplayedName] = useState('')
  const [showCursor, setShowCursor] = useState(true)
 const pdf = import.meta.env.BASE_URL + 'CV_Dominguez_Gonzalo.pdf';
 
  useEffect(() => {
    let currentIndex = 0
    setDisplayedName('')
    setShowCursor(true)
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => setShowCursor(false), 1000)
      }
    }, 120)
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [fullName])

  const handleDownloadCv = () => {
    const link = document.createElement('a')
    link.href = pdf
    link.download = `CV_Dominguez_Gonzalo.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div>
      <header className='relative z-10 p-8'>
        <div className='max-w-7xl mx-auto'>
          <div
            className={`mb-12 transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-[-50px] opacity-0'
            }`}
          >
            <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-10'>
              {/* Columna 1: Foto */}
              <div className='relative mb-8 md:mb-0 md:mr-0 flex-shrink-0 flex justify-center'>
                <div className='w-64 h-64 relative bg-gradient-to-br from-emerald-700/40 via-emerald-900/60 to-black rounded-full shadow-emerald-500/30 shadow-2xl p-2'>
                  <div className='absolute inset-0 rounded-full bg-gradient-to-br from-slate-900/80 to-slate-800/80'></div>
                  <img
                    src={perfil}
                    alt='Perfil'
                    className='w-full h-full object-cover rounded-full relative z-10 border-4 border-emerald-500/30 shadow-xl shadow-emerald-500/20 hover:scale-105 transition-transform duration-300'
                  />
                </div>
              </div>
              {/* Columna 2: Info y botones */}
              <div className='flex-1 flex flex-col items-center md:items-start'>
                <h1 className='text-6xl font-black mb-4 tracking-tight text-center md:text-left min-h-[72px] font-[Poppins,Inter,sans-serif] drop-shadow-[0_2px_8px_rgba(16,185,129,0.25)]'>
                  <span className='font-mono relative inline-block'>
                    <span
                      className='bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'
                      style={{
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: 'Poppins, Inter, sans-serif',
                      }}
                    >
                      {displayedName}
                    </span>
                    <span
                      className={
                        `absolute left-0 top-0 h-full bg-emerald-400/60 transition-all duration-75 will-change-transform` +
                        (showCursor ? ' animate-pulse' : '')
                      }
                      style={{
                        width: displayedName.length > 0 ? '0.3ch' : 0,
                        transform: `translateX(${displayedName.length}ch)`,
                      }}
                    >
                      &nbsp;
                    </span>
                  </span>
                </h1>
                <p className='text-2xl text-slate-200 mb-6 font-semibold text-center md:text-left tracking-wide drop-shadow-[0_1px_4px_rgba(16,185,129,0.10)]'>
                  Full Stack Developer
                </p>
                <p className='text-slate-400 max-w-3xl mx-auto mb-8 text-xl leading-relaxed font-light text-center md:text-left md:mx-0'>
                  Apasionado por crear soluciones tecnológicas innovadoras.{' '}
                  <span className='text-emerald-400 font-semibold'>
                    Especializado en desarrollo front-end 
                  </span>{' '}
                  con React, TypeScript y arquitecturas modernas.
                </p>
                <div className='flex flex-wrap justify-center md:justify-start gap-4 mb-8 w-full'>
                  <button
                    className='flex-1 group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl font-bold text-white shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 min-w-[180px] border-2 border-transparent hover:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60'
                    onClick={handleDownloadCv}
                  >
                    <Download size={20} />
                    <span>Descargar CV</span>
                  </button>
                  <button
                    onClick={() => {
                      handleSectionChange('contact')
                    }}
                    className='flex-1 group flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/70 border-2 border-slate-700/50 hover:border-emerald-500/50 rounded-2xl font-bold text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-emerald-400/60'
                  >
                    <Send size={20} />
                    <span>Contactar</span>
                  </button>
                </div>
                <div className='flex flex-wrap justify-center md:justify-start gap-6 text-slate-400 w-full'>
                  <div className='flex items-center gap-2 hover:text-emerald-400 transition-colors'>
                    <MapPin size={18} />
                    <span className='font-medium'>Santiago del Estero, Argentina</span>
                  </div>
                  <div className='flex items-center gap-2 hover:text-emerald-400 transition-colors'>
                    <Phone size={18} />
                    <span className='font-medium'>385-4841095</span>
                  </div>
                  <div className='flex items-center gap-2 hover:text-emerald-400 transition-colors'>
                    <Mail size={18} />
                    <a href="mailto:gonzaloemanuel39@gmail.com" className='font-medium cursor-pointer'>gonzaloemanuel39@gmail.com</a>
                  </div>
                  <div className='flex items-center gap-2 hover:text-emerald-400 transition-colors'>
                    <Github size={18} />
                    <a href="https://github.com/gonzalodominguez39" className='font-medium cursor-pointer'>github.com/gonzalodominguez39</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <nav className='flex justify-center gap-3 mb-12'>
            <NavButton
              id='about'
              icon={User}
              label='Sobre Mí'
              active={activeSection === 'about'}
              onClick={handleSectionChange}
            />
            <NavButton
              id='skills'
              icon={Code}
              label='Habilidades'
              active={activeSection === 'skills'}
              onClick={handleSectionChange}
            />
            <NavButton
              id='projects'
              icon={Briefcase}
              label='Proyectos'
              active={activeSection === 'projects'}
              onClick={handleSectionChange}
            />
            <NavButton
              id='education'
              icon={GraduationCap}
              label='Educación'
              active={activeSection === 'education'}
              onClick={handleSectionChange}
            />
          </nav>
        </div>
      </header>
    </div>
  )
}
