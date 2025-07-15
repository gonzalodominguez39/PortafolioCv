import { Briefcase, Heart, Shield } from 'lucide-react'
const basePath = import.meta.env.BASE_URL;

export const skills = {
  frontend: [
    'React',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Responsive Design',
  ],
  backend: ['Node.js', 'Java Spring Boot', 'RESTful APIs', 'Microservices'],
  database: ['SQL', 'NoSQL', 'MongoDB', 'MySQL', 'PostgreSQL'],
  tools: ['Git', 'Linux', 'Docker', 'Agile Methodologies'],
}

const projectsImages = {
  Penitenciario: `${basePath}sis_penitenciario.png`,
  Blaze: `${basePath}sis_blaze.png`,
  Inmobiliaria: `${basePath}sis_inmobiliaria.png`,
}
export const projects = [
  {
    title: 'Blaze - Aplicación de Citas',
    period: '2024 - 2025',
    description:
      'Plataforma de citas móvil con sistema de matching inteligente, chat en tiempo real y geolocalización.',
    icon: Heart,
    image: projectsImages.Blaze,
    projectUrl: 'https://github.com/gonzalodominguez39/BlazeAPP',
    tech: [
      'Java',
      'XML',
      'Android SDK',
      'Material Design',
      'MySQL',
      'Java Spring Boot',
      'MySQL',
    ],
    status: 'Público',
  },
  {
    title: 'Sistema de Gestión Penitenciaria',
    period: '2023 - 2024',
    description:
      'Plataforma web para gestión de internos con módulos de seguridad, reportes y administración.',
    icon: Shield,
    image: projectsImages.Penitenciario,
    projectUrl: 'https://github.com/estefanoquiriconi/PP_sistemapenitenciario',
    tech: [
      'Java',
      'Servlets',
      'JPA',
      'JSP',
      'MySQL',
      'Tomcat',
      'AJAX',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
    status: 'Público',
  },
  {
    title: 'Aplicación Web Inmobiliaria',
    period: '2024 - Actual',
    description:
      'Desarrollo de aplicación web inmobiliaria utilizando React con TypeScript para crear interfaces de usuario intuitivas y responsivas.',
    icon: Briefcase,
    image: projectsImages.Inmobiliaria,
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Axios',
      'React Router',
    ],
    status: 'Privado',
  },
]

export const education = [
  {
    title: 'Programador Universitario en Informática',
    institution: 'UNSE',
    period: '2020 - 2025',
    status: 'Completado',
  },
  {
    title: 'Certificación en Desarrollo Full Stack',
    institution: 'EducationIT - Digitalers (Telecom)',
    period: '2024',
    status: 'Completado',
  },
  {
    title: 'Argentina Programa - Desarrollo Web',
    institution: 'Gobierno de Argentina',
    period: '2023-2024',
    status: 'Completado',
  },
  {
    title: 'Técnico en Informática Profesional',
    institution: 'Escuela Técnica N°2 Ing. Santiago Barabino',
    period: '2014-2019',
    status: 'Completado',
  },
]
