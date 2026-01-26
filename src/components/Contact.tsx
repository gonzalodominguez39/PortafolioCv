import { motion } from "framer-motion";
import {
    Instagram,
    Linkedin,
    Mail,
    MessageCircle,
    ArrowUpRight,
    Send
} from "lucide-react";

export default function Contact() {
    const contactLinks = [
        {
            name: "LinkedIn",
            value: "Gonzalo Dominguez",
            icon: <Linkedin size={24} />,
            href: "https://www.linkedin.com/in/gonzalo-dominguez-445319266/",
            color: "hover:text-blue-500",
            bg: "hover:bg-blue-500/10",
            border: "hover:border-blue-500/30"
        },
        {
            name: "WhatsApp",
            value: "+54 385 484-1095",
            icon: <MessageCircle size={24} />,
            href: "https://wa.me/543854841095",
            color: "hover:text-green-500",
            bg: "hover:bg-green-500/10",
            border: "hover:border-green-500/30"
        },
        {
            name: "Instagram",
            value: "@emmaa.domingueez",
            icon: <Instagram size={24} />,
            href: "https://www.instagram.com/emmaa.domingueez/",
            color: "hover:text-pink-500",
            bg: "hover:bg-pink-500/10",
            border: "hover:border-pink-500/30"
        },
        {
            name: "Gmail",
            value: "gonzaloemanuel39@gmail.com",
            icon: <Mail size={24} />,
            href: "mailto:gonzaloemanuel39@gmail.com",
            color: "hover:text-cyan-500",
            bg: "hover:bg-cyan-500/10",
            border: "hover:border-cyan-500/30"
        }
    ];

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

    return (
        <section id="contact" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-full h-full -z-10 pointer-events-none">
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/5 border border-cyan-400/10 text-cyan-400 text-sm font-medium mb-4">
                        <Send size={16} />
                        <span>Contacto</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        ¿Hablamos de tu <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Próximo Proyecto?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Si tienes una idea o simplemente quieres saludar, estoy a un mensaje de distancia.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {contactLinks.map((contact) => (
                        <motion.a
                            key={contact.name}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 ${contact.bg} ${contact.border} transition-all duration-500 flex flex-col items-center text-center`}
                        >
                            <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${contact.color} transition-colors duration-500 mb-6 group-hover:scale-110 shadow-lg group-hover:shadow-${contact.color.replace('hover:text-', '')}/20`}>
                                {contact.icon}
                            </div>

                            <h3 className="text-gray-400 text-sm font-medium mb-2 group-hover:text-white transition-colors">
                                {contact.name}
                            </h3>

                            <p className="text-white font-bold text-lg mb-4">
                                {contact.value}
                            </p>

                            <div className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${contact.color} opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0`}>
                                Conectar <ArrowUpRight size={16} />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 pt-12 border-t border-white/10 text-center"
                >
                    <p className="text-gray-500 text-sm tracking-widest uppercase font-medium">
                        © {new Date().getFullYear()} Gonzalo Domínguez. Todos los derechos reservados.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
