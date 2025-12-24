import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { ServiceHighlights } from '../components/sections/ServiceHighlights';
import { CostCalculator } from '../components/sections/CostCalculator';
import { Footer } from '../components/layout/Footer';

export function Home() {
    return (
        <main className="bg-navy min-h-screen text-white">
            <Hero />
            <TrustBar />
            <ServiceHighlights />
            <CostCalculator />
            <Footer />
        </main>
    );
}
