import { 
  Code, 
  Server, 
  Database, 
  Settings, 
  Layers,
  Hexagon,
  Coffee,
  Terminal,
  GitBranch,
  Container,
  Globe,
  Cpu,
  Shield,
  FileCode,
  Braces,
  Palette,
  Smartphone,
  Cloud,
  Activity
} from 'lucide-react';

interface SkillCardProps {
  category: string;
  skills: string[];
  delay: number;
  isVisible: boolean;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, skills, delay, isVisible }) => {
  // Función para obtener el icono de la categoría
  const getCategoryIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'frontend':
        return <Globe className="w-7 h-7 text-white drop-shadow-lg" />;
      case 'backend':
        return <Server className="w-7 h-7 text-white drop-shadow-lg" />;
      case 'bases de datos':
        return <Database className="w-7 h-7 text-white drop-shadow-lg" />;
      case 'herramientas':
        return <Settings className="w-7 h-7 text-white drop-shadow-lg" />;
      case 'mobile':
        return <Smartphone className="w-7 h-7 text-white drop-shadow-lg" />;
      case 'devops':
        return <Cloud className="w-7 h-7 text-white drop-shadow-lg" />;
      default:
        return <Code className="w-7 h-7 text-white drop-shadow-lg" />;
    }
  };

  // Función para obtener el icono de cada skill
  const getSkillIcon = (skill: string) => {
    const skillLower = skill.toLowerCase();
    
    if (skillLower.includes('react')) return <Layers className="w-4 h-4 text-blue-400" />;
    if (skillLower.includes('typescript')) return <FileCode className="w-4 h-4 text-blue-600" />;
    if (skillLower.includes('javascript')) return <Braces className="w-4 h-4 text-yellow-400" />;
    if (skillLower.includes('java')) return <Coffee className="w-4 h-4 text-yellow-400" />;
    if (skillLower.includes('node')) return <Hexagon className="w-4 h-4 text-green-500" />;
    if (skillLower.includes('spring')) return <Coffee className="w-4 h-4 text-green-600" />;
    if (skillLower.includes('mongodb')) return <Database className="w-4 h-4 text-green-500" />;
    if (skillLower.includes('postgresql') || skillLower.includes('mysql')) return <Database className="w-4 h-4 text-blue-500" />;
    if (skillLower.includes('docker')) return <Container className="w-4 h-4 text-blue-400" />;
    if (skillLower.includes('git')) return <GitBranch className="w-4 h-4 text-orange-500" />;
    if (skillLower.includes('linux')) return <Terminal className="w-4 h-4 text-white" />;
    if (skillLower.includes('tailwind') || skillLower.includes('css')) return <Palette className="w-4 h-4 text-cyan-400" />;
    if (skillLower.includes('api')) return <Activity className="w-4 h-4 text-purple-400" />;
    if (skillLower.includes('security') || skillLower.includes('auth')) return <Shield className="w-4 h-4 text-red-400" />;
    if (skillLower.includes('cloud') || skillLower.includes('aws')) return <Cloud className="w-4 h-4 text-orange-400" />;
    
    return <Cpu className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div 
      className={`group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-500/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg flex items-center justify-center group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300">
          {getCategoryIcon(category)}
        </div>
        <h3 className="text-2xl font-extrabold text-white capitalize flex items-center gap-2 tracking-wide drop-shadow-[0_2px_8px_rgba(16,185,129,0.18)] group-hover:text-emerald-100 transition-colors duration-300">
          {category}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-100 rounded-full text-base border border-emerald-500/30 font-semibold hover:scale-110 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 transition-all duration-200 cursor-default flex items-center gap-2 shadow-sm hover:shadow-emerald-400/25 group-hover:shadow-lg"
          >
            {getSkillIcon(skill)}
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
