import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Gift, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export function SpecialOfferPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already seen/closed the popup
        const hasSeen = sessionStorage.getItem('hasSeenSpecialOffer');
        if (hasSeen) return;

        // Show popup after a short delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenSpecialOffer', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: 50, opacity: 0, scale: 0.95 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: 50, opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="fixed top-24 right-4 z-[100] w-full max-w-xs md:max-w-md perspective-1000"
                >
                    <div className="relative group">
                        {/* Animated Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan/40 via-blue-500/40 to-purple-500/40 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                        <div className="relative bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden shadow-2xl">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 blur-[80px] rounded-full pointer-events-none -mr-20 -mt-20" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 blur-[60px] rounded-full pointer-events-none -ml-20 -mb-20" />

                            <button
                                onClick={closePopup}
                                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full z-10"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="flex gap-5">
                                <div className="shrink-0 pt-1">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-cyan/30 blur-xl rounded-full"></div>
                                        <div className="relative w-14 h-14 bg-gradient-to-br from-cyan/20 to-blue-600/20 border border-cyan/30 rounded-full flex items-center justify-center">
                                            <Gift className="w-7 h-7 text-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
                                        </div>
                                        {/* Floating badge */}
                                        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-lg border border-white/10">
                                            HURRY
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-grow space-y-3">
                                    <div>
                                        <div className="inline-flex items-center space-x-1.5 mb-2">
                                            <div className="px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan/10 to-blue-500/10 border border-cyan/20 flex items-center">
                                                <Sparkles className="w-3 h-3 text-cyan mr-1" />
                                                <span className="text-[10px] font-bold tracking-widest text-cyan uppercase">Limited Time Offer</span>
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold text-white leading-none tracking-tight font-heading">
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-400 to-purple-400">100% OFF</span>
                                            <span className="block text-lg font-medium text-gray-200 mt-1">Development Cost</span>
                                        </h2>
                                    </div>

                                    <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">
                                        Launch your professional website or app with <span className="text-white font-medium">zero upfront fees</span> for a limited time.
                                    </p>

                                    <div className="pt-2">
                                        <Button
                                            className="w-full shadow-lg shadow-cyan/25 group/btn"
                                            variant="primary"
                                            onClick={() => {
                                                closePopup();
                                                setTimeout(() => {
                                                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                                                }, 100);
                                            }}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                Claim Your Free Dev
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
