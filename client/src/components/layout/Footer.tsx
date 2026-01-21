import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-navy border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-2">
                            <span className="text-3xl font-extrabold text-white tracking-tighter font-heading">
                                DEV<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">NEX</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering Indian businesses with world-class digital solutions.
                            We build the future, today.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com/DevNex_online" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan hover:text-navy transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan hover:text-navy transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com/DevNex_online" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan hover:text-navy transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan hover:text-navy transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading text-lg">Company</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {['About Us', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-cyan transition-colors flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-px bg-cyan mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading text-lg">Services</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {[
                                { name: 'Web Development', href: '#' },
                                { name: 'App Development', href: '#' },
                                { name: 'Automation', href: '#' },
                                { name: 'Digital Transformation', href: '#' },
                                { name: 'E-commerce', href: '#' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="hover:text-cyan transition-colors cursor-default"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading text-lg">Start a Conversation</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-center space-x-3 group">
                                <Mail className="w-5 h-5 text-cyan shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.5)] transition-all" />
                                <span className="group-hover:text-gray-300 transition-colors">devnex.online@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p className="flex items-center gap-1">
                        &copy; {new Date().getFullYear()} Devnex. Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> in India.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-cyan transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-cyan transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
