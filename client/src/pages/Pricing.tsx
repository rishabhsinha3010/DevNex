import { ContactSection } from '../components/sections/CostCalculator';
import { motion } from 'framer-motion';

export function Pricing() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20 bg-navy min-h-screen"
        >
            <ContactSection />
        </motion.div>
    );
}
