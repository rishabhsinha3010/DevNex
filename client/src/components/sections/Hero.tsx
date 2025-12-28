import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import { ThreeScene } from '../ui/ThreeScene';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-cyan/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/5 backdrop-blur-sm text-cyan text-sm font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                            </span>
                            #1 Digital Agency for Indian Businesses
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6">
                            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Bharat’s</span> Digital Vision.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
                            We build world-class websites and apps for Indian businesses, startups, and professionals.
                            High-performance technology at prices that make sense.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Button size="lg" className="group text-lg px-8">
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 group">
                                <Play className="mr-2 w-5 h-5 fill-current" />
                                View Our Work
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center gap-5">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full bg-gray-800 border-2 border-navy overflow-hidden ring-2 ring-navy hover:scale-105 transition-transform duration-300 z-0 hover:z-10">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full bg-navy border-2 border-cyan/30 flex items-center justify-center text-xs font-bold text-cyan ring-2 ring-navy z-10">
                                    500+
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-4 h-4 fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                                </div>
                                <p className="text-gray-400 text-sm font-medium leading-none">Accepted by <span className="text-white font-bold">Top Founders</span></p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image / 3D Scene */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block h-[600px] w-full"
                    >
                        <div className="relative w-full h-full">
                            {/* 3D Scene */}
                            <div className="absolute inset-0 z-10">
                                <ThreeScene className="w-full h-full" />
                            </div>

                            {/* Floating Badge 1 */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute top-10 right-10 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs"
                            >
                                <div className="w-12 h-12 bg-gradient-to-tr from-cyan to-blue-600 rounded-full flex items-center justify-center text-navy font-bold text-xl">
                                    🚀
                                </div>
                                <div>
                                    <p className="text-white font-bold">Future Ready</p>
                                    <p className="text-gray-400 text-xs">Next-gen web technologies</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2 */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-10 left-10 z-20 bg-navy/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl"
                            >
                                <p className="text-cyan font-heading font-bold text-4xl mb-1">100%</p>
                                <p className="text-white text-sm font-medium">Immersive Experience</p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
