import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Labs } from './pages/Labs';
import { ComingSoon } from './pages/ComingSoon';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { WebDevelopment } from './pages/services/WebDevelopment';
import { AppDevelopment } from './pages/services/AppDevelopment';
import { StartProject } from './pages/StartProject';
import { Portfolio } from './pages/Portfolio';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <div className="min-h-screen bg-navy text-white font-sans selection:bg-cyan selection:text-navy">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/labs" element={<Labs />} />
                        <Route path="/coming-soon" element={<ComingSoon />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services/web-dev" element={<WebDevelopment />} />
                        <Route path="/services/app-dev" element={<AppDevelopment />} />
                        <Route path="/start" element={<StartProject />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/consultation" element={<StartProject />} />
                        <Route path="/contact" element={<StartProject />} />
                        {/* Add other routes here */}
                    </Routes>
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;
