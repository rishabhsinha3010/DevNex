import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Layers, Smartphone, Layout, X } from 'lucide-react';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/seo/SEO';

export function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Layout,
            description: "A high-performance online store built with Next.js and Shopify."
        },
        {
            id: 2,
            title: "Fintech Mobile App",
            category: "App Development",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: Smartphone,
            description: "Secure investment application with real-time market data."
        }
    ];

    return (
        <div className="bg-navy min-h-screen text-white pt-20">
            <SEO
                title="Portfolio"
                description="Explore our work. High-performance websites, engaging mobile apps, and custom digital solutions."
                canonicalUrl="https://devnex.in/portfolio"
            />
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Work</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        A glimpse into the digital experiences we craft.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 justify-center max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="bg-navy/50 border border-white/10 rounded-xl overflow-hidden hover:border-cyan/50 transition-colors cursor-pointer group"
                            onClick={() => setSelectedProject(project.id)}
                        >
                            <div className="h-40 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-3 h-3 text-cyan" />
                                </div>
                            </div>
                            <div className="p-4">
                                <span className="text-xs font-semibold text-cyan uppercase tracking-wider block mb-1">
                                    {project.category}
                                </span>
                                <h3 className="text-base font-bold text-white mb-2 leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-xs line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center py-12 px-6 rounded-2xl bg-white/5 border border-white/10"
                >
                    <Layers className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg font-medium">
                        More information and our projects will be available soon.
                    </p>
                </motion.div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-navy border border-white/10 rounded-2xl p-8 max-w-md w-full relative z-10 text-center shadow-2xl"
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="w-16 h-16 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Layers className="w-8 h-8 text-cyan" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                        <p className="text-gray-400">
                            More information about this project will be available soon. We are currently updating our portfolio case studies.
                        </p>
                    </motion.div>
                </div>
            )}

            <Footer />
        </div>
    );
}
