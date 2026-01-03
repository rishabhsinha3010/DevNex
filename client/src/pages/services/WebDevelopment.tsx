import { motion } from 'framer-motion';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { Globe, Zap, Search, Layout, Database, ShoppingCart, ArrowRight, Code2 } from 'lucide-react';

export function WebDevelopment() {
    const features = [
        {
            icon: Search,
            title: 'SEO Optimized',
            description: 'Built from the ground up to rank high on Google. We use semantic HTML, proper meta tags, and lightning-fast loading speeds.',
            gradient: 'from-orange-500/20 to-yellow-500/20'
        },
        {
            icon: Zap,
            title: 'High Performance',
            description: 'Core Web Vitals optimized. We ensure your site loads in milliseconds, keeping bounce rates low and engagement high.',
            gradient: 'from-cyan/20 to-blue-500/20'
        },
        {
            icon: Layout,
            title: 'Responsive Design',
            description: 'Flawless adaptability across all devices. Your website will look stunning on 4K monitors, laptops, tablets, and mobile phones.',
            gradient: 'from-purple-500/20 to-pink-500/20'
        },
        {
            icon: Database,
            title: 'Dynamic Content',
            description: 'CMS integration (Strapi, Sanity) allows you to update content easily without touching a line of code.',
            gradient: 'from-green-500/20 to-emerald-500/20'
        },
        {
            icon: ShoppingCart,
            title: 'E-commerce Ready',
            description: 'Secure payment gateways, inventory management, and smooth checkout flows for your online store.',
            gradient: 'from-red-500/20 to-rose-500/20'
        },
        {
            icon: Code2,
            title: 'Clean Code',
            description: 'Maintainable, scalable, and documented codebases that are easy for any developer to work with in the future.',
            gradient: 'from-blue-500/20 to-indigo-500/20'
        }
    ];

    const techStack = [
        { name: 'React', level: 'Frontend Library' },
        { name: 'Next.js', level: 'Production Framework' },
        { name: 'TypeScript', level: 'Type Safety' },
        { name: 'Tailwind CSS', level: 'Styling Engine' },
        { name: 'Node.js', level: 'Backend Runtime' },
        { name: 'PostgreSQL', level: 'Database' }
    ];

    const process = [
        { number: '01', title: 'Discovery', description: 'We analyze your business goals, target audience, and competitors to define the perfect strategy.' },
        { number: '02', title: 'Design', description: 'Wireframing and high-fidelity UI/UX design to create a visually stunning experience.' },
        { number: '03', title: 'Development', description: 'Coding your website using modern frameworks with a focus on performance and scalability.' },
        { number: '04', title: 'Launch', description: 'Rigorous testing, SEO setup, and deployment to a global CDN for instant access.' },
    ];

    return (
        <div className="bg-navy min-h-screen text-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-bold uppercase tracking-wider mb-6">
                                <Globe className="w-4 h-4 mr-2" /> Web Development
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                                Next-Gen <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Web Solutions</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                We build lightning-fast, SEO-optimized websites that convert visitors into customers.
                                From simple landing pages to complex enterprise platforms.
                            </p>
                            <Button variant="glow" size="lg" onClick={() => window.location.href = '/start'}>
                                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-navy-light/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Why Choose Us?</h2>
                        <p className="text-gray-400">Technical excellence meets creative design.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-cyan/30 transition-all duration-300 group"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan/5 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                                Modern <span className="text-cyan">Tech Stack</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                We don't just use tools; we master them. Our stack is chosen for speed, security, and scalability, ensuring your website is future-proof.
                            </p>
                            <Button variant="outline" onClick={() => window.location.href = '/contact'}>
                                View Full Tech Spec
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {techStack.map((tech, index) => (
                                <div key={index} className="bg-navy border border-white/10 p-6 rounded-xl flex flex-col items-start hover:border-cyan/50 transition-colors">
                                    <span className="text-cyan font-bold text-lg mb-1">{tech.name}</span>
                                    <span className="text-gray-500 text-sm">{tech.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-gradient-to-b from-navy to-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Process</h2>
                        <p className="text-gray-400">Streamlined for speed and quality.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="text-6xl font-bold text-white/5 group-hover:text-cyan/10 transition-colors absolute -top-8 -left-4 font-heading">
                                    {step.number}
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative z-10 h-full hover:border-cyan/30 transition-all">
                                    <h3 className="text-xl font-bold mb-4 text-cyan">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your web presence?</h2>
                    <p className="text-gray-400 mb-8 text-lg">Let's build something exceptional together.</p>
                    <Button variant="glow" size="lg" onClick={() => window.location.href = '/start'}>
                        Get a Free Proposal
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
