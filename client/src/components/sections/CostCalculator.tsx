import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, X, ArrowRight, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';

export function CostCalculator() {
    // "CostCalculator" is effectively "Pricing" now. Kept name to preserve imports in Home.tsx
    const [selectedPlan, setSelectedPlan] = useState<'starter' | 'custom' | null>(null);

    return (
        <section className="py-24 bg-navy relative overflow-hidden" id="pricing">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan/5 blur-[100px] rounded-l-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-600/5 blur-[100px] rounded-r-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                        Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Pricing</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Choose the perfect plan for your digital journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[35fr_65fr] gap-8 max-w-6xl mx-auto">

                    {/* Starter Plan Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group flex flex-col"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <Sparkles className="w-24 h-24 text-cyan/10" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Starter Package</h3>
                        <div className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan/20 to-blue-500/20 text-cyan text-xs font-bold uppercase mb-6 border border-cyan/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse">
                            <Sparkles className="w-3 h-3 mr-2" /> Limited Time Offer
                        </div>

                        <div className="mb-8 p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.1)] relative overflow-hidden group-hover:border-cyan/50 transition-colors">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan/20 blur-[40px] rounded-full pointer-events-none -mr-10 -mt-10" />

                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-gray-500 text-lg line-through decoration-red-500/70 decoration-2">₹5,000</span>
                                <span className="px-2 py-0.5 rounded bg-red-500/20 text-xs text-red-400 font-bold uppercase tracking-wide border border-red-500/20">100% OFF</span>
                            </div>
                            <div className="flex items-baseline mb-2">
                                <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-sm">₹0</span>
                                <span className="text-gray-300 ml-2 font-medium bg-white/10 px-2 py-1 rounded text-sm">Development Cost</span>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-cyan/50 to-transparent my-4" />
                            <p className="text-cyan text-sm font-bold flex items-center">
                                + ₹500 <span className="text-gray-400 font-normal ml-1">/ month maintenance</span>
                            </p>
                        </div>

                        <ul className="space-y-4 mb-8 text-gray-300 flex-grow">
                            {[
                                'Up to 2 Dynamic Pages',
                                'Up to 4 Static Pages',
                                'Technical Support',
                                'FB & Insta Integration',
                                '1 Click WhatsApp Integration',
                                '100% Responsive Website',
                                'SEO Friendly Website',
                                'Mobile Friendly Website',
                                '1 Revision'
                            ].map(feat => (
                                <li key={feat} className="flex items-center gap-3">
                                    <div className="bg-cyan/20 p-1 rounded-full shrink-0"><Check className="w-3 h-3 text-cyan" /></div>
                                    {feat}
                                </li>
                            ))}
                            <li className="flex items-center gap-3 text-gray-400">
                                <div className="bg-red-500/10 p-1 rounded-full shrink-0"><X className="w-3 h-3 text-red-500" /></div>
                                Domain Name Not Included
                            </li>
                        </ul>

                        <Button className="w-full mt-auto" variant="glow" onClick={() => window.location.href = '/contact'}>
                            Claim Starter Offer
                        </Button>
                    </motion.div>

                    {/* Custom Plan / Form Container */}
                    <div className="relative min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {selectedPlan !== 'custom' ? (
                                <motion.div
                                    key="card"
                                    initial={{ opacity: 0, rotateY: 90 }}
                                    animate={{ opacity: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, rotateY: -90 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-gradient-to-br from-blue-900/20 to-navy border border-white/10 rounded-3xl p-8 backdrop-blur-md h-full flex flex-col relative overflow-hidden"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">Custom Solution</h3>
                                    <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                                        Need something more powerful? Whether it's a mobile app, SaaS platform, or full-scale enterprise software, we build custom solutions tailored to your scale.
                                    </p>

                                    <div className="mb-8 space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-purple-400" /></div>
                                            Custom Features & Logic
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-purple-400" /></div>
                                            Scalable Cloud Architecture
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-purple-400" /></div>
                                            Dedicated Support Manager
                                        </div>
                                    </div>

                                    <Button className="w-full" variant="outline" onClick={() => setSelectedPlan('custom')}>
                                        Get a Custom Quote <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Project Details</h3>
                                            <p className="text-xs text-gray-400">Tell us what you need</p>
                                        </div>
                                        <button onClick={() => setSelectedPlan(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <form className="space-y-4 flex-grow flex flex-col" onSubmit={(e) => e.preventDefault()}>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Name</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all" placeholder="Enter your name" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Requirements</label>
                                            <div className="relative h-full">
                                                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                                <textarea className="w-full h-full min-h-[100px] bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all resize-none" placeholder="Describe your project..." />
                                            </div>
                                        </div>
                                        <Button className="w-full mt-4" variant="glow">Submit Request</Button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
