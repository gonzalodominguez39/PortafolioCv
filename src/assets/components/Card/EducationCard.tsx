import { 
  GraduationCap, 
  Building, 
  Calendar, 
  CheckCircle, 
  Clock,
  Award,
  BookOpen,
  Star,
  Trophy
} from 'lucide-react';
import type{ Education } from '../types/types';


interface EducationCardProps {
  edu: Education;
  index: number;
  isVisible: boolean;
}

export const EducationCard: React.FC<EducationCardProps> = ({ edu, index, isVisible }) => {
  // Función para obtener el icono según el nivel educativo
  const getEducationIcon = (level?: string) => {
    switch(level?.toLowerCase()) {
      case 'bachelor':
        return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case 'master':
        return <Award className="w-6 h-6 text-purple-400" />;
      case 'phd':
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 'certificate':
        return <Star className="w-6 h-6 text-green-400" />;
      case 'diploma':
        return <BookOpen className="w-6 h-6 text-cyan-400" />;
      default:
        return <GraduationCap className="w-6 h-6 text-emerald-400" />;
    }
  };


  const getStatusIcon = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('completado') || statusLower.includes('graduado')) {
      return <CheckCircle className="w-4 h-4" />;
    }
    return <Clock className="w-4 h-4" />;
  };

 
  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('completado') || statusLower.includes('graduado')) {
      return 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30';
    }
    return 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30';
  };

  return (
    <div 
      className={`group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-500/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1">
          {/* Header con icono y título */}
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/30 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
              {getEducationIcon(edu.level)}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-100 transition-colors duration-300">
                {edu.title}
              </h3>
              {edu.gpa && (
                <div className="flex items-center gap-2 text-sm text-emerald-300">
                  <Star className="w-4 h-4" />
                  <span className="font-semibold">GPA: {edu.gpa}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Información institucional */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3 text-slate-300">
              <Building className="w-5 h-5 text-slate-400" />
              <span className="text-lg font-medium">{edu.institution}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Calendar className="w-5 h-5 text-slate-500" />
              <span className="font-medium">{edu.period}</span>
            </div>
          </div>

          {/* Logros adicionales */}
          {edu.achievements && edu.achievements.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                Logros destacados
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 hover:border-emerald-500/50 transition-colors duration-200"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Estado */}
        <div className="flex-shrink-0">
          <span className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 ${getStatusColor(edu.status)}`}>
            {getStatusIcon(edu.status)}
            {edu.status}
          </span>
        </div>
      </div>
    </div>
  );
};

