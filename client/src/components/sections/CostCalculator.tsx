import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectWizard } from './ProjectWizard';
import { PricingCards } from './PricingCards';

export function ContactSection() {
    const [showWizard, setShowWizard] = useState(false);

    const handleSelectPackage = () => {
        setShowWizard(true);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" id="contact">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan/5 blur-[100px] rounded-l-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-600/5 blur-[100px] rounded-r-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Get Started?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Choose your package and let's bring your vision to life.</p>
                </div>

                <AnimatePresence mode="wait">
                    {!showWizard ? (
                        <motion.div
                            key="cards"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <PricingCards onSelectPackage={handleSelectPackage} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="wizard"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <ProjectWizard onClose={() => setShowWizard(false)} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
