import { EducationCard } from "../Card/EducationCard";
import type { Education } from '../types/types';

// Componente de ejemplo para mostrar el uso
export const EducationSection = () => {
  const educationData: Education[] = [
    {
      title: 'Programador Universitario en Informática',
      institution: 'Universidad Nacional de Santiago del Estero (UNSE)',
      period: '2020 - 2025',
      status: 'Completado',
      level: 'bachelor',
      gpa: '8.5/10',
    },
    {
      title: 'Node.js Full Stack Developer',
      institution: 'EducationIT - Digitalers (Telecom)',
      period: '2024',
      status: 'Completado',
      level: 'certificate',
    },
     {
      title: 'Argentina Programa - Desarrollo Web',
      institution: 'Gobierno de Argentina',
      period: '2023 - 2024',
      status: 'Completado',
      level: 'certificate',
      gpa: '9.0/10',
    },
    {
      title: 'Tecnico en informática Profesional',
      institution: 'Escuela Técnica N°2 Ing. Santiago Barabino',
      period: '2014 - 2019',
      status: 'Completado',
      level: 'diploma',
      gpa: '9.0/10',
    },
 
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Formación Académica
        </h1>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              edu={edu}
              index={index}
              isVisible={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;