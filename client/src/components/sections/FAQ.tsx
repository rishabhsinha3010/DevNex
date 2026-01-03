import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How long does development take?",
        answer: "Basic websites can be delivered in under 48 hours. As the project becomes more complex—custom features, integrations, or applications—the timeline adjusts accordingly. A clear delivery plan is shared before development begins."
    },
    {
        question: "How much does a project cost?",
        answer: "Pricing depends on scope, features, and complexity. We follow transparent, requirement-based pricing with no hidden charges."
    },
    {
        question: "Will my website or app be mobile-friendly?",
        answer: "Absolutely. Every product we build is fully responsive and optimized for mobile, tablet, and desktop experiences."
    },
    {
        question: "Can you build an MVP or prototype?",
        answer: "Yes. We help startups launch MVPs quickly, allowing you to validate ideas and scale with confidence."
    },
    {
        question: "What technologies do you use?",
        answer: "We work with modern, scalable technologies like React, Next.js, React Native, Node.js, FastAPI, and cloud-ready databases—chosen to fit your product, not trends."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes. We provide ongoing support, maintenance, and feature enhancements to ensure long-term stability and growth."
    },
    {
        question: "How do we get started?",
        answer: "Share your idea, we define the scope and timeline, and development begins. Simple, fast, and transparent."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold uppercase tracking-wider mb-4">
                        <HelpCircle className="w-3 h-3 mr-2" /> Got Questions?
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Questions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Everything you need to know about working with DevNex.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan/30 transition-colors duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={cn(
                                    "text-lg font-medium transition-colors duration-300",
                                    openIndex === index ? "text-cyan" : "text-gray-200"
                                )}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-gray-400 transition-transform duration-300",
                                        openIndex === index ? "rotate-180 text-cyan" : "rotate-0"
                                    )}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
