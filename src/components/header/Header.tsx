import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Sobre mí", href: "#about-me" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    } as const;

    const linkVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 0.8,
            }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl w-full border-b border-white/5 bg-gray-950/20"
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                        className="text-cyan-400 font-bold text-xl md:text-2xl cursor-pointer hover:scale-105 transition-all tracking-tight"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Gonzalo Domínguez
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="relative text-white/70 hover:text-white transition-colors group pb-2 cursor-pointer font-medium"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 rounded-full origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                    </motion.a>
                                </li>
                            ))}
                        </ul>

                        <motion.a
                            href="/GonzaloDominguez_cv.pdf"
                            download
                            className="flex items-center gap-2 px-4 py-2 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={18} />
                            <span>CV</span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors z-50 relative"
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                >
                                    <X size={28} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                >
                                    <Menu size={28} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 h-screen w-full bg-gray-900/98 backdrop-blur-3xl md:hidden z-40 flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center space-y-10">
                            <ul className="flex flex-col items-center space-y-6">
                                {navLinks.map((link) => (
                                    <motion.li key={link.name} variants={linkVariants}>
                                        <motion.a
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className="text-3xl text-white/80 hover:text-cyan-400 font-bold transition-colors"
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {link.name}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div variants={linkVariants}>
                                <motion.a
                                    href="/GonzaloDominguez_cv.pdf"
                                    download
                                    className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black rounded-lg font-bold shadow-lg shadow-cyan-400/20"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Download size={20} />
                                    Descargar CV
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Background Decoration for Mobile Menu */}
                        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>
                        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}