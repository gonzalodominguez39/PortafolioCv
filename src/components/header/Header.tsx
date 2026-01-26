import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md w-full border-b border-white/10"
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                        className="text-cyan-400 font-bold text-xl md:text-2xl cursor-pointer hover:scale-105 transition-all"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Gonzalo Domínguez
                    </motion.div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
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

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <ul className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-2xl text-white/80 hover:text-cyan-400 font-bold transition-colors"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}