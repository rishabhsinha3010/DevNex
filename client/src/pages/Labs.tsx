import { motion } from 'framer-motion';
import { Sparkles, Globe, Smartphone, ArrowRight, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function Labs() {
    const products = [
        {
            title: "BrandMatch",
            description: "BrandMatch is a data-powered influencer marketing platform that enables brands to discover, evaluate, and collaborate with YouTube creators. Using audience insights, engagement metrics, and content performance data, BrandMatch helps brands form smarter, more effective partnerships.",
            platform: "Website",
            icon: <Globe className="w-5 h-5" />,
            color: "from-purple-500 to-pink-500", // Gradient for the card accent
            glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
        },
        {
            title: "DailyBrief",
            description: "DailyBrief is a mobile news platform that delivers the most important daily updates in 60–80 words, making news fast and easy to consume. With support for 10+ Indian languages, it ensures accessibility, clarity, and trust for a diverse audience.",
            platform: "Mobile App",
            icon: <Smartphone className="w-5 h-5" />,
            color: "from-blue-500 to-cyan-500",
            glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
        }
    ];

    return (
        <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <FlaskConical className="w-4 h-4 text-cyan" />
                            <span className="text-sm font-medium text-cyan tracking-wider uppercase">Innovation Division</span>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                        <span className="text-white">Dev</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Nex</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Labs</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed">
                        DevNexLabs is the innovation and product division of DevNex, focused on building scalable, data-driven digital products. Here, we experiment with ideas, validate them through real users, and turn them into production-ready platforms.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {products.map((product, index) => (
                        <Link to="/coming-soon" key={product.title} className="block h-full cursor-pointer">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 h-full ${product.glow}`}
                            >
                                {/* Inner Glow Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${product.color}`}>
                                            <div className="text-white">
                                                {index === 0 ? <Sparkles className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-gray-300 border border-white/5">
                                            {product.icon}
                                            <span>{product.platform}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                                        {product.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                                        {product.description}
                                    </p>

                                    <div className="mt-auto">
                                        <Button variant="glow" className="w-full group-hover:scale-[1.02] transition-transform pointer-events-none">
                                            Explore {product.title} <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-3xl" />
                    <div className="relative z-10 p-12 md:p-16 text-center border border-white/10 rounded-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">Our Vision</h2>
                        <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
                            At DevNexLabs, we aim to build products that are <span className="text-cyan font-semibold">simple to use</span>, <span className="text-purple-400 font-semibold">scalable by design</span>, and <span className="text-white font-semibold">impactful at scale</span>—powered by strong engineering and thoughtful product thinking.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
