import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  Phone,
  Github,
  MapPin,
  ChevronRight,
  BrainCircuit
} from "lucide-react";
import {
  React as ReactIcon,
  NextJs as NextJsIcon,
  TypeScript as TSIcon,
  JavaScript as JSIcon,
  HTML5 as HTMLIcon,
  CSS3 as CSSIcon,
  NodeJs as NodeIcon,
  Spring as SpringIcon,
  Java as JavaIcon,
  MySQL as MySQLIcon,
  PostgreSQL as PostgreSQLIcon,
  MongoDB as MongoDBIcon,
  Git as GitIcon,
  Docker as DockerIcon,
  Linux as LinuxIcon,
  TailwindCSS as TailwindIcon,
} from "developer-icons";

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <ReactIcon size={24} /> },
        { name: "Next.js", icon: <NextJsIcon size={24} /> },
        { name: "TypeScript", icon: <TSIcon size={24} /> },
        { name: "JavaScript", icon: <JSIcon size={24} /> },
        { name: "HTML5", icon: <HTMLIcon size={24} /> },
        { name: "CSS3", icon: <CSSIcon size={24} /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <NodeIcon size={24} /> },
        { name: "Spring Boot", icon: <SpringIcon size={24} /> },
        { name: "Java", icon: <JavaIcon size={24} /> },
      ]
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "MySQL", icon: <MySQLIcon size={24} /> },
        { name: "PostgreSQL", icon: <PostgreSQLIcon size={24} /> },
        { name: "MongoDB", icon: <MongoDBIcon size={24} /> },
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", icon: <GitIcon size={24} /> },
        { name: "Docker", icon: <DockerIcon size={24} /> },
        { name: "Linux", icon: <LinuxIcon size={24} /> },
        { name: "Tailwind", icon: <TailwindIcon size={24} /> },
      ]
    }
  ];

  const contactInfo = {
    location: "Santiago del Estero, Argentina",
    phone: "385-4841095",
    email: "gonzaloemanuel39@gmail.com",
    github: "https://github.com/gonzalodominguez39"
  };

  return (
    <section id="about-me" className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-transparent">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 max-w-6xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
            <User size={16} />
            <span>Perfil Profesional</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Gonzalo Domínguez
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer especializado en la creación de experiencias de usuario de alta calidad e integración de IA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Profile & Info */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="relative w-40 h-40 md:w-55 md:h-55 mx-auto mb-8">
                <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-blue-600 rounded-3xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 bg-gray-900">
                  <img
                    src="/perfil.png"
                    alt="Gonzalo Domínguez"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 text-lg">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    <MapPin size={22} className="text-cyan-400" />
                  </div>
                  <span className="font-medium">{contactInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-lg">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    <Phone size={22} className="text-cyan-400" />
                  </div>
                  <span className="font-medium">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-lg">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    <Mail size={22} className="text-cyan-400" />
                  </div>
                  <span className="break-all font-medium">{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-lg">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    <Github size={22} className="text-cyan-400" />
                  </div>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors break-all font-medium"
                  >
                    {contactInfo.github.replace('https://', '')}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Education Info */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-cyan-400" />
                Educación
              </h3>
              <div className="space-y-6">

                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-cyan-400"></div>
                  <h4 className="text-white font-semibold">Prog. Univ. en Informática</h4>
                  <p className="text-sm text-cyan-400">UNSE (2020 – 2025)</p>
                </div>
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-cyan-400"></div>
                  <h4 className="text-white font-semibold">Dev Full Stack</h4>
                  <p className="text-sm text-cyan-400">EducationIT / Digitalers</p>
                </div>
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-cyan-400"></div>
                  <h4 className="text-white font-semibold">Argentina Programa</h4>
                  <p className="text-sm text-cyan-400">Desarrollo Web (2023/24)</p>
                </div>
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-cyan-400"></div>
                  <h4 className="text-white font-semibold">Técnico en Informática</h4>
                  <p className="text-sm text-cyan-400">Escuela Técnica N° 2</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Experience, Skills & Projects */}
          <div className="lg:col-span-8 space-y-8">
            {/* Professional Summary */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
                "Fuerte enfoque en frontend con React, TypeScript y Next.js, combinado con backend escalable en Node.js y Spring Boot. Experiencia en la integración de agentes de IA y arquitecturas modulares para optimización de procesos."
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="text-cyan-400" />
                Experiencia Profesional
              </h3>

              <div className="space-y-10">
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-linear-to-b before:from-cyan-400 before:to-transparent">
                  <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                  <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                    <h4 className="text-xl font-bold text-white">Full Stack Developer</h4>
                    <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-bold border border-cyan-400/20">2024 – Actual</span>
                  </div>
                  <p className="text-cyan-400 font-medium mb-4">Drauz Inmobiliaria</p>
                  <ul className="space-y-3 text-gray-400 text-lg">
                    <li className="flex items-start gap-3">
                      <ChevronRight size={20} className="mt-1 text-cyan-500 shrink-0" />
                      Desarrollo de aplicación web con interfaces intuitivas y responsivas.
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight size={20} className="mt-1 text-cyan-500 shrink-0" />
                      Optimización de experiencia de usuario y rendimiento.
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight size={20} className="mt-1 text-cyan-500 shrink-0" />
                      Integración de agentes de IA para asistencia inteligente y automatización.
                    </li>
                  </ul>
                </div>

                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-linear-to-b before:from-gray-600 before:to-transparent">
                  <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                    <h4 className="text-xl font-bold text-white">Profesor de Programación</h4>
                    <span className="px-3 py-1 rounded-full bg-gray-600/20 text-gray-400 text-xs font-bold border border-white/10">2022 – Actual</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-4">Clases Particulares</p>
                  <p className="text-gray-400 text-lg mb-4">
                    Impartición de clases personalizadas en desarrollo web y móvil, asesoramiento en proyectos y buenas prácticas.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Technical Skills - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {skillGroups.map((group) => (
                <motion.div
                  key={group.title}
                  variants={itemVariants}
                  className="p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Code2 className="text-cyan-400" size={20} />
                    {group.title}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill relative flex flex-col items-center gap-2 p-2 md:p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300"
                        title={skill.name}
                      >
                        <div className="text-gray-300 group-hover/skill:scale-110 group-hover/skill:text-cyan-400 transition-all duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover/skill:text-cyan-400 transition-colors text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div
                variants={itemVariants}
                className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 md:col-span-2"
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <BrainCircuit className="text-cyan-400" size={20} />
                  IA & Metodologías
                </h3>
                <div className="flex flex-wrap gap-4">
                  {['Agentes de IA', 'Automatización', 'Scrum', 'Agile', 'Arquitectuars Modulares'].map((item) => (
                    <span key={item} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}