import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Gift } from 'lucide-react';
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
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-24 right-4 z-[100] w-full max-w-xs md:max-w-sm"
                >
                    <div className="bg-navy border border-white/10 rounded-2xl p-1 relative overflow-hidden shadow-2xl backdrop-blur-xl">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 blur-[40px] rounded-full pointer-events-none -mr-10 -mt-10" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 blur-[40px] rounded-full pointer-events-none -ml-10 -mb-10" />

                        <div className="bg-white/5 rounded-xl p-5 relative overflow-hidden">
                            <button
                                onClick={closePopup}
                                className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full z-10"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="flex items-start gap-4">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-tr from-cyan to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan/20 animate-bounce">
                                        <Gift className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan-[10px] text-[10px] font-bold uppercase tracking-wider mb-2">
                                        <Sparkles className="w-3 h-3 mr-1" /> Special Offer
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-1 font-heading leading-tight">
                                        100% OFF <br /><span className="text-lg font-medium text-gray-300">Development Cost</span>
                                    </h2>

                                    <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                                        Launch your dream project with zero dev fees.
                                    </p>

                                    <Button
                                        className="w-full text-sm py-2 h-auto"
                                        variant="glow"
                                        onClick={() => {
                                            closePopup();
                                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Claim Offer
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
