import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { ServiceHighlights } from '../components/sections/ServiceHighlights';
import { SplineSection } from '../components/sections/SplineSection';
import { CostCalculator } from '../components/sections/CostCalculator';
import { Footer } from '../components/layout/Footer';

import { SpecialOfferPopup } from '../components/ui/SpecialOfferPopup';

export function Home() {
    return (
        <main className="bg-navy min-h-screen text-white">
            <SpecialOfferPopup />
            <Hero />
            <TrustBar />
            <ServiceHighlights />
            <SplineSection />
            <CostCalculator />
            <Footer />
        </main>
    );
}
