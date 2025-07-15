import { ExternalLink } from 'lucide-react';
interface Project {
  title: string;
  period: string;
  description: string;
  icon: React.ElementType;
  tech: string[];
  status: string;
  image?: string; // Nueva propiedad para la imagen
}
interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible }) => (
  <div 
    className={`group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}
    style={{ transitionDelay: `${index * 200}ms` }}
  >
    {project.image && (
      <div className="mb-6 flex justify-center">
        <div className="relative w-full max-w-[420px] aspect-video rounded-2xl overflow-hidden border-2 border-emerald-900/40 shadow-2xl shadow-emerald-800/30 bg-gradient-to-br from-black via-emerald-950 to-emerald-800 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
            loading="lazy"
            style={{background: 'linear-gradient(135deg, #0f172a 60%, #059669 100%)'}}
            onError={e => (e.currentTarget.style.display = 'none')}
          />
        </div>
      </div>
    )}
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 text-center sm:text-left">
      <div className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl shadow-lg group-hover:shadow-teal-500/30 transition-shadow duration-300 flex-shrink-0 mx-auto sm:mx-0">
        <project.icon className="text-white" size={28} />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-1 break-words ">{project.title}</h3>
        <p className="text-slate-400 text-sm font-medium">{project.period}</p>
      </div>
    </div>
    <p className="text-slate-300 mb-6 text-base sm:text-lg leading-relaxed text-center sm:text-left">{project.description}</p>
    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 justify-center sm:justify-start">
      {project.tech.map((tech, techIndex) => (
        <span 
          key={techIndex}
          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-xs sm:text-sm border border-cyan-500/30 font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
      {/* Status Badge visual mejorado */}
      <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-bold border shadow-sm
        ${project.status === 'Privado'
          ? 'bg-rose-600/20 text-rose-300 border-rose-500/30'
          : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'}
      `}>
        <span className={`w-2 h-2 rounded-full inline-block
          ${project.status === 'Privado' ? 'bg-rose-400' : 'bg-emerald-400'}
        `}></span>
        {project.status}
      </span>
      <button className="p-2 bg-slate-700/50 hover:bg-teal-500/20 rounded-xl transition-colors border border-slate-600/50 hover:border-teal-500/50 mt-2 sm:mt-0">
        <ExternalLink className="text-slate-400 hover:text-teal-400 transition-colors" size={18} />
      </button>
    </div>
  </div>
);

export default ProjectCard;
