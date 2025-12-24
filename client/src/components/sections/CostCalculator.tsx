import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Check, ChevronRight, RefreshCw, Sparkles } from 'lucide-react';


export function CostCalculator() {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState<Record<string, any>>({});
    const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

    const steps = [
        {
            id: 1,
            question: "What are you building?",
            options: [
                { label: "Modern Website", value: "website", cost: 25000, desc: "Business site, Portfolio, Landing Page" },
                { label: "Mobile App", value: "app", cost: 60000, desc: "iOS & Android (Flutter/RN)" },
                { label: "Custom Software", value: "software", cost: 80000, desc: "SaaS, CRM, Internal Tools" },
            ]
        },
        {
            id: 2,
            question: "How complex is the project?",
            options: [
                { label: "MVP / Basic", value: "small", cost: 10000, desc: "Essential features, fast launch" },
                { label: "Standard", value: "medium", cost: 30000, desc: "Professional scaling, API integrations" },
                { label: "Enterprise", value: "large", cost: 60000, desc: "Complex workflows, high security" },
            ]
        },
        {
            id: 3,
            question: "Do you need UI/UX Design?",
            options: [
                { label: "Yes, from scratch", value: "yes", cost: 15000, desc: "Wireframing, Prototyping, Visuals" },
                { label: "No, I have designs", value: "no", cost: 0, desc: "Figma/Sketch/Adobe XD ready" },
            ]
        },
    ];

    const handleSelect = (option: any) => {
        setSelections({ ...selections, [step]: option });
        if (step < steps.length) {
            setStep(step + 1);
        } else {
            calculateTotal({ ...selections, [step]: option });
        }
    };

    const calculateTotal = (finalSelections: any) => {
        let total = 0;
        Object.values(finalSelections).forEach((sel: any) => {
            total += sel.cost;
        });
        // Add a base fee or variance
        setEstimatedCost(total);
    };

    const reset = () => {
        setStep(1);
        setSelections({});
        setEstimatedCost(null);
    };

    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan/5 blur-[100px] rounded-l-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-600/5 blur-[100px] rounded-r-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3 h-3" /> Cost Calculator
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                        Estimate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Investment</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Get a rough estimate for your project in seconds. No hidden math.
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden">
                    {/* Progress Bar */}
                    {estimatedCost === null && (
                        <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan to-blue-600 transition-all duration-500 ease-out" style={{ width: `${(step / steps.length) * 100}%` }} />
                    )}

                    <AnimatePresence mode='wait'>
                        {estimatedCost === null ? (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-2xl font-bold text-white">
                                        {steps[step - 1].question}
                                    </h3>
                                    <span className="text-gray-500 text-sm font-medium">Step {step} of {steps.length}</span>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {steps[step - 1].options.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => handleSelect(option)}
                                            className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-cyan/5 hover:border-cyan/50 transition-all text-left"
                                        >
                                            <div>
                                                <span className="block text-xl font-bold text-white group-hover:text-cyan mb-1 transition-colors">
                                                    {option.label}
                                                </span>
                                                <span className="text-gray-500 text-sm">{option.desc}</span>
                                            </div>
                                            <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan group-hover:bg-cyan text-navy transition-all">
                                                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
                                    <Check className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-300 mb-2">Estimated Investment</h3>
                                <div className="text-6xl md:text-7xl font-bold text-white mb-2 tracking-tight">
                                    ₹{estimatedCost.toLocaleString()}
                                </div>
                                <p className="text-cyan text-sm font-medium mb-8 bg-cyan/10 inline-block px-3 py-1 rounded-full">
                                    + GST (18%)
                                </p>
                                <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
                                    This is a ballpark estimate. Every project is unique. Let's discuss your specific needs for a tailored quote.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button size="lg" onClick={() => window.location.href = '/contact'} className="shadow-lg shadow-cyan/20">
                                        Book Free Consultation
                                    </Button>
                                    <Button variant="ghost" onClick={reset} className="group">
                                        <RefreshCw className="mr-2 w-4 h-4 group-hover:rotate-180 transition-transform" />
                                        Calculate Again
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
