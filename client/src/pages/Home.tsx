import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { ServiceHighlights } from '../components/sections/ServiceHighlights';
import { SplineSection } from '../components/sections/SplineSection';
import { CostCalculator } from '../components/sections/CostCalculator';
import { FAQ } from '../components/sections/FAQ';
import { Footer } from '../components/layout/Footer';

import { SpecialOfferPopup } from '../components/ui/SpecialOfferPopup';

import { SEO } from '../components/seo/SEO';
import { generateVideoSchema } from '../utils/videoSchema';

export function Home() {
    const videoSchema = generateVideoSchema(
        "DevNex Vision - Future of Tech",
        "An abstract visualization of digital transformation and modern technology services offered by DevNex.",
        "https://devnex.in/video-poster.png",
        "2025-01-01T00:00:00+00:00",
        "https://devnex.in/coolvideo.mp4"
    );

    return (
        <main className="bg-navy min-h-screen text-white">
            <SEO
                title="Home"
                description="DevNex is India's #1 Digital Agency building world-class websites, apps, and automation solutions. Transform your business with future-ready tech."
                canonicalUrl="https://devnex.in/"
                schema={videoSchema}
            />
            <SpecialOfferPopup />
            <Hero />
            <TrustBar />
            <ServiceHighlights />
            <SplineSection />
            <CostCalculator />
            <FAQ />
            <Footer />
        </main>
    );
}
