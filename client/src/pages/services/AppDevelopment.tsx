import { motion } from 'framer-motion';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { Smartphone, Tablet, Layers, Shield, Zap, RefreshCcw, ArrowRight } from 'lucide-react';

export function AppDevelopment() {
    const features = [
        {
            icon: Layers,
            title: 'Cross-Platform',
            description: 'One codebase, two platforms. We use Flutter and React Native to deploy native-quality apps to both iOS and Android simultaneously.',
            gradient: 'from-blue-500/20 to-cyan/20'
        },
        {
            icon: Shield,
            title: 'Secure & Scalable',
            description: 'Bank-grade encryption and cloud infrastructure that grows with your user base without hiccups.',
            gradient: 'from-green-500/20 to-emerald-500/20'
        },
        {
            icon: Zap,
            title: 'Native Performance',
            description: 'Smooth 60fps animations and instant interactions. We optimize every line of code for maximum efficiency.',
            gradient: 'from-orange-500/20 to-red-500/20'
        },
        {
            icon: RefreshCcw,
            title: 'Real-time Sync',
            description: 'Offline-first architecture ensures your app works seamlessly even with spotty internet connections.',
            gradient: 'from-purple-500/20 to-pink-500/20'
        }
    ];

    const techStack = [
        { name: 'Flutter', level: 'Cross-platform Framework' },
        { name: 'React Native', level: 'JS Framework' },
        { name: 'Firebase', level: 'Backend as a Service' },
        { name: 'Supabase', level: 'Open Source Backend' },
        { name: 'GraphQL', level: 'Data Query Language' },
        { name: 'Redux', level: 'State Management' }
    ];

    return (
        <div className="bg-navy min-h-screen text-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="max-w-3xl lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold uppercase tracking-wider mb-6">
                                    <Smartphone className="w-4 h-4 mr-2" /> App Development
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                                    Scalable <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Mobile Apps</span>
                                </h1>
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    Turn your idea into a powerful mobile experience. We build beautiful, high-performance apps for iOS and Android that users love.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="glow" size="lg" onClick={() => window.location.href = '/start'}>
                                        Start Your App <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                    <Button variant="secondary" size="lg" onClick={() => window.location.href = '/portfolio'}>
                                        View Case Studies
                                    </Button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Abstract visual */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl h-64 flex flex-col justify-end"
                                >
                                    <Smartphone className="w-10 h-10 text-purple-400 mb-4" />
                                    <span className="font-bold text-xl">iOS</span>
                                </motion.div>
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl h-64 mt-12 flex flex-col justify-end"
                                >
                                    <Tablet className="w-10 h-10 text-pink-400 mb-4" />
                                    <span className="font-bold text-xl">Android</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-navy-light/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Native Quality, Half the Code</h2>
                        <p className="text-gray-400">We leverage modern cross-platform tech to deliver faster.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-start space-x-6 hover:bg-white/[0.07] transition-colors"
                            >
                                <div className={`shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 text-center">
                        Built with <span className="text-purple-400">Power</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {techStack.map((tech, index) => (
                            <div key={index} className="bg-white/5 border border-white/5 p-4 rounded-xl text-center hover:border-purple-500/50 transition-colors cursor-default">
                                <span className="block font-bold text-white mb-1">{tech.name}</span>
                                <span className="text-xs text-gray-500">{tech.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-600/10 blur-[100px] pointer-events-none"></div>
                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Have an app idea?</h2>
                    <p className="text-gray-400 mb-8 text-lg">From concept to app store, we handle it all.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="glow" size="lg" onClick={() => window.location.href = '/consultation'}>
                            Book a Consultation
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => window.location.href = '/labs'}>
                            Visit DevNex Labs
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
