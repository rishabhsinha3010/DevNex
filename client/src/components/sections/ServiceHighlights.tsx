import { Code, Smartphone, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export function ServiceHighlights() {
    const services = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'High-performance websites built with React, Next.js, and modern tech. SEO-optimized for the Indian market.',
            gradient: 'from-cyan/20 to-blue-500/20'
        },
        {
            icon: Smartphone,
            title: 'App Development',
            description: 'Native and Cross-platform mobile apps using Flutter. Reach customers on both iOS and Android.',
            gradient: 'from-purple-500/20 to-pink-500/20'
        },
        {
            icon: Rocket,
            title: 'Digital Transformation',
            description: 'Modernize your legacy business processes with custom software solutions and automation.',
            gradient: 'from-orange-500/20 to-yellow-500/20'
        },
    ];

    return (
        <section className="py-24 bg-navy relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-cyan)_0%,_transparent_60%)] opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Everything you need to grow your business online, specifically tailored for the Indian ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="relative bg-white/5 border border-white/10 p-10 rounded-3xl overflow-hidden group hover:border-cyan/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan/10"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-cyan group-hover:scale-110 group-hover:bg-cyan group-hover:text-navy transition-all duration-300 shadow-lg relative z-10">
                                <service.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
