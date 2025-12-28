import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { name: 'Web Development', href: '/services/web-dev' },
        { name: 'App Development', href: '/services/app-dev' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-navy/80 backdrop-blur-xl border-white/10 shadow-lg py-2" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <span className="text-3xl font-extrabold text-white tracking-tighter font-heading group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] transition-all">
                            DEV<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">NEX</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="relative group">
                            <button
                                className="flex items-center text-gray-300 hover:text-cyan transition-colors font-medium"
                            >
                                Services <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            {/* Dropdown */}
                            <div
                                className={cn(
                                    "absolute top-full left-0 w-64 bg-navy/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 opacity-0 invisible translate-y-4",
                                    "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                                )}
                            >
                                <div className="p-2 space-y-1">
                                    {services.map((service) => (
                                        <Link
                                            key={service.name}
                                            to={service.href}
                                            className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-cyan rounded-lg transition-colors font-medium"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link to="/portfolio" className="text-gray-300 hover:text-cyan transition-colors font-medium">Portfolio</Link>
                        <Link to="/pricing" className="text-gray-300 hover:text-cyan transition-colors font-medium">Pricing</Link>
                        <Link to="/labs" className="text-gray-300 hover:text-purple-400 transition-colors font-medium flex items-center gap-1">
                            Labs <Sparkles className="w-3 h-3 text-purple-400" />
                        </Link>
                        <Link to="/about" className="text-gray-300 hover:text-cyan transition-colors font-medium">About Us</Link>

                        <Button variant="glow" size="sm" onClick={() => window.location.href = '/contact'}>
                            Get a Free Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-navy/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <div className="space-y-2">
                                <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest px-4 font-heading">Services</span>
                                {services.map((service) => (
                                    <Link
                                        key={service.name}
                                        to={service.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-cyan rounded-lg transition-colors font-medium"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="h-px bg-white/10 my-2"></div>
                            <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-cyan font-medium">Portfolio</Link>
                            <Link to="/pricing" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-cyan font-medium">Pricing</Link>
                            <Link to="/labs" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-purple-400 font-medium flex items-center gap-2">
                                Labs <Sparkles className="w-3 h-3 text-purple-400" />
                            </Link>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-cyan font-medium">About Us</Link>
                            <div className="pt-6 px-4">
                                <Button className="w-full" variant="primary" onClick={() => { setIsOpen(false); window.location.href = '/contact'; }}>
                                    Get a Free Quote
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
