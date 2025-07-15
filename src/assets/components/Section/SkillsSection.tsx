import { SkillCard } from "../Card/SkillCard";

export const SkillsSection = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3'],
      delay: 0
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Spring Boot', 'java', 'REST APIs', 'Authentication'],
      delay: 200
    },
    {
      category: 'Bases de Datos',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
      delay: 400
    },
    {
      category: 'Herramientas',
      skills: ['Docker', 'Git', 'Linux', 'AWS Cloud', 'Security'],
      delay: 600
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Mis Habilidades Técnicas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <SkillCard
              key={index}
              category={skillGroup.category}
              skills={skillGroup.skills}
              delay={skillGroup.delay}
              isVisible={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

