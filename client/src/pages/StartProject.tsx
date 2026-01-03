import { motion } from 'framer-motion';
import { SimpleProjectForm } from '../components/sections/SimpleProjectForm';
import { Footer } from '../components/layout/Footer';

export function StartProject() {
    return (
        <div className="bg-navy min-h-screen text-white pt-20">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
            </div>

            <section className="relative z-10 py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6"
                    >
                        Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Extraordinary</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Tell us about your project, and we'll craft the perfect solution for you.
                        Refer us to a friend and get a <span className="text-cyan font-bold">20% discount</span>.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <SimpleProjectForm />
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
