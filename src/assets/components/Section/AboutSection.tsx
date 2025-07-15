import { Briefcase, User, Users } from "lucide-react";

export const AboutSection = ({ isVisible }: { isVisible: boolean }) => (
  <section className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
      <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4 text-left">
        <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl">
          <User className="text-white" size={32} />
        </div>
        Perfil Profesional
      </h2>
      <p className="text-slate-300 text-xl leading-relaxed mb-8 text-left">
        Programador Universitario en Informática con experiencia en desarrollo de aplicaciones móviles y web. 
        Me especializo en tecnologías modernas como React con TypeScript y Kotlin, aplicando principios sólidos de 
        arquitectura como MVVM y buenas prácticas de desarrollo ágil.
      </p>
      <p className="text-slate-300 text-xl leading-relaxed mb-10 text-left">
        Me gradué del programa Digitalers de Telecom (EducationIT), donde fortalecí mis conocimientos en desarrollo 
        full stack y metodologías colaborativas. Además, mi experiencia como docente particular me ha permitido 
        desarrollar habilidades de comunicación, liderazgo técnico y trabajo en equipo.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Briefcase className="text-emerald-400" size={24} />
            Experiencia Actual
          </h3>
          <p className="text-slate-300 text-lg">Front-End Developer en Drauz Inmobiliaria (2024 - Actual)</p>
        </div>
        <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl p-8 border border-teal-500/30 hover:border-teal-500/50 transition-colors">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Users className="text-teal-400" size={24} />
            Docencia
          </h3>
          <p className="text-slate-300 text-lg">Profesor Particular de Programación (2022 - Actual)</p>
        </div>
      </div>
    </div>
  </section>
);