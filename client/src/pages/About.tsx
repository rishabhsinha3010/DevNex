import { motion } from 'framer-motion';
import { Footer } from '../components/layout/Footer';
import { Code, Smartphone, Layout, Server, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function About() {
    const services = [
        {
            icon: Code,
            title: 'Custom Website Development',
            description: 'High-performance, SEO-optimized websites tailored to your brand.',
            gradient: 'from-cyan/20 to-blue-500/20'
        },
        {
            icon: Smartphone,
            title: 'Web & Mobile Applications',
            description: 'Scalable applications for iOS, Android, and the web using modern frameworks.',
            gradient: 'from-purple-500/20 to-pink-500/20'
        },
        {
            icon: Layout,
            title: 'UI/UX Design Systems',
            description: 'Intuitive, beautiful interfaces that drive user engagement and retention.',
            gradient: 'from-orange-500/20 to-red-500/20'
        },
        {
            icon: Server,
            title: 'Backend & API Development',
            description: 'Robust server-side solutions ensuring performance and security.',
            gradient: 'from-green-500/20 to-emerald-500/20'
        },
        {
            icon: Rocket,
            title: 'Product Prototyping & MVPs',
            description: 'Rapidly validate your ideas with functional Minimum Viable Products.',
            gradient: 'from-yellow-500/20 to-amber-500/20'
        }
    ];

    const whyUs = [
        'Modern & scalable tech stack',
        'Clean, maintainable code',
        'Business-focused development',
        'On-time delivery & clear communication',
        'Long-term support and collaboration'
    ];

    return (
        <div className="bg-navy min-h-screen text-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">DevNex</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            A technology-driven development studio building reliable, scalable, and user-centric digital products.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-navy-light/30 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-lg md:text-xl text-gray-300 leading-loose">
                        At DevNex, we believe technology should be <span className="text-cyan font-semibold">simple</span>, <span className="text-cyan font-semibold">efficient</span>, and <span className="text-cyan font-semibold">purposeful</span>.
                        Our approach combines clean design, modern development practices, and a deep understanding of business needs to deliver products that don't just look good—but perform exceptionally well.
                    </p>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">What We Do</h2>
                        <p className="text-gray-400">Everything you need to transform your bold ideas into reality.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-cyan/30 transition-all duration-300 group"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <service.icon className="w-6 h-6 text-cyan" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach & Why Us */}
            <section className="py-24 bg-gradient-to-b from-navy to-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Approach */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Our Approach</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                We work closely with our clients at every stage—from planning and design to development and deployment.
                                Transparency, clear communication, and quality execution are at the core of how we operate.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                No unnecessary complexity, no overengineering—just smart solutions that work.
                            </p>
                            <Button variant="glow" onClick={() => window.location.href = '/contact'}>
                                Start a Project <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>

                        {/* Why DevNex */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 blur-[50px] rounded-full pointer-events-none" />

                            <h3 className="text-2xl font-bold font-heading mb-8">Why DevNex?</h3>
                            <ul className="space-y-4">
                                {whyUs.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-cyan" />
                                        </div>
                                        <span className="text-gray-300">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan/5 opacity-20"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-2xl md:text-3xl font-heading text-white mb-8">Our Vision</h2>
                    <blockquote className="text-3xl md:text-5xl font-bold leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            "To empower ideas with technology and help businesses grow through smart, reliable, and future-ready digital products."
                        </span>
                    </blockquote>
                </div>
            </section>

            <Footer />
        </div>
    );
}
