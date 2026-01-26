import { motion } from "framer-motion";
import {
    ExternalLink,
    Github,
    Code2,
    Music,
    Building2,
    ShieldCheck,
    Globe
} from "lucide-react";
import {
    React as ReactIcon,
    NextJs as NextJsIcon,
    TypeScript as TSIcon,
    JavaScript as JSIcon,
    TailwindCSS as TailwindIcon,
    Supabase as SupabaseIcon,
    PostgreSQL as PostgreSQLIcon,
    Bootstrap5 as BootstrapIcon,
    ViteJS as ViteIcon,
    FramerDark as FramerIcon,
    Android as AndroidIcon,
    Java as JavaIcon
} from "developer-icons";

interface Project {
    title: string;
    description: string;
    image: string;
    tags: { name: string; icon: React.ReactNode }[];
    link?: string;
    github?: string;
    icon: React.ReactNode;
    category: string;
    isFeatured?: boolean;
    isPrivate?: boolean;
}

const projects: Project[] = [
    {
        title: "Blaze Vibes",
        description: "Aplicación de música de última generación con una interfaz moderna y fluida para una experiencia de escucha premium.",
        image: "/PortafolioCv/img/BalzeVibes.png",
        link: "https://blaze-vibes.vercel.app/",
        tags: [
            { name: "React", icon: <ReactIcon size={16} /> },
            { name: "TypeScript", icon: <TSIcon size={16} /> },
            { name: "Framer", icon: <FramerIcon size={16} /> }
        ],
        icon: <Music className="text-pink-500" size={24} />,
        category: "Music App"
    },
    {
        title: "Drauz Web",
        description: "Plataforma inmobiliaria integral que permite la gestión eficiente de propiedades y contactos con sincronización en tiempo real.",
        image: "/PortafolioCv/img/drauzWeb.png",
        link: "https://drauz-web-pnfe.vercel.app/",
        tags: [
            { name: "Next.js", icon: <NextJsIcon size={16} /> },
            { name: "Supabase", icon: <SupabaseIcon size={16} /> },
            { name: "Tailwind", icon: <TailwindIcon size={16} /> },
            { name: "PostgreSQL", icon: <PostgreSQLIcon size={16} /> }
        ],
        icon: <Globe className="text-cyan-500" size={24} />,
        category: "Web Platform"
    },
    {
        title: "Sis Blaze",
        description: "Proyecto final de carrera. Aplicación móvil nativa para la gestión inteligente de datos y procesos, optimizada para Android.",
        image: "/PortafolioCv/img/sis_blaze.png",
        link: "https://github.com/gonzalodominguez39/BlazeAPP",
        tags: [
            { name: "Android", icon: <AndroidIcon size={16} /> },
            { name: "Java", icon: <JavaIcon size={16} /> },
            { name: "XML", icon: <Code2 size={14} /> }
        ],
        icon: <AndroidIcon className="text-green-500" size={24} />,
        category: "Android App"
    },
    {
        title: "Sistema Penitenciario",
        description: "Sistema robusto de gestión de internos y seguridad, desarrollado con un enfoque en la fiabilidad y la arquitectura escalable.",
        image: "/PortafolioCv/img/sis_penitenciario.png",
        link: "https://github.com/estefanoquiriconi/PP_sistemapenitenciario",
        tags: [
            { name: "Java", icon: <JavaIcon size={16} /> },
            { name: "JavaScript", icon: <JSIcon size={16} /> },
            { name: "Bootstrap", icon: <BootstrapIcon size={16} /> }
        ],
        icon: <ShieldCheck className="text-emerald-500" size={24} />,
        category: "Enterprise System"
    },
    {
        title: "Gestión Inmobiliaria Drauz",
        description: "Herramienta interna optimizada para la administración de activos inmobiliarios, con interfaces de usuario intuitivas y alto rendimiento. Sistema desarrollado por encargo para la optimización de flujos de trabajo internos.",
        image: "/PortafolioCv/img/gestionInmobiliaria.png",
        isFeatured: true,
        isPrivate: true,
        tags: [
            { name: "React", icon: <ReactIcon size={16} /> },
            { name: "TypeScript", icon: <TSIcon size={16} /> },
            { name: "Vite", icon: <ViteIcon size={16} /> },
            { name: "Tailwind", icon: <TailwindIcon size={16} /> }
        ],
        icon: <Building2 className="text-blue-500" size={24} />,
        category: "Internal Tool"
    }
];

export default function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any
        }
    };

    return (
        <section id="projects" className="relative py-16 md:py-24 bg-transparent overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
                        <Code2 size={16} />
                        <span>Portafolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Mis <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Proyectos</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Una selección de mis trabajos más recientes, abarcando desde aplicaciones móviles hasta sistemas empresariales.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => {
                        const CardWrapper = project.link ? 'a' : 'div';
                        const wrapperProps = project.link ? {
                            href: project.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "block h-full cursor-pointer"
                        } : { className: "h-full" };

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`${project.isFeatured ? 'md:col-span-2' : ''} h-full`}
                            >
                                <CardWrapper {...(wrapperProps as any)}>
                                    <div className={`group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-cyan-400/10`}>
                                        {/* Project Image Container */}
                                        <div className={`relative overflow-hidden ${project.isFeatured ? 'h-64 md:h-[450px]' : 'h-56 md:h-64'}`}>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/20 to-transparent opacity-60"></div>

                                            {/* Floating Category Tag */}
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <div className="px-3 py-1 rounded-full bg-gray-950/50 backdrop-blur-md border border-white/10 text-[10px] md:text-xs font-bold tracking-widest uppercase text-cyan-400">
                                                    {project.category}
                                                </div>
                                                {project.isPrivate && (
                                                    <div className="px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-red-400 flex items-center gap-1">
                                                        <ShieldCheck size={12} />
                                                        Privado
                                                    </div>
                                                )}
                                            </div>

                                            {/* External Links - Floating Top Right */}
                                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {project.github && (
                                                    <div className="p-2 rounded-full bg-gray-950/50 backdrop-blur-md border border-white/10 text-white hover:bg-cyan-400 hover:text-black transition-all">
                                                        <Github size={16} />
                                                    </div>
                                                )}
                                                {project.link && (
                                                    <div className="p-2 rounded-full bg-gray-950/50 backdrop-blur-md border border-white/10 text-white hover:bg-cyan-400 hover:text-black transition-all">
                                                        <ExternalLink size={16} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-6 md:p-8 flex grow flex-col">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                                                    {project.icon}
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                                                    {project.title}
                                                    {project.link && <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                                                </h3>
                                            </div>

                                            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 grow">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                                                {project.tags.map((tag) => (
                                                    <div
                                                        key={tag.name}
                                                        className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 group-hover:border-cyan-400/30 transition-all duration-300"
                                                        title={tag.name}
                                                    >
                                                        {tag.icon}
                                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{tag.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardWrapper>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
