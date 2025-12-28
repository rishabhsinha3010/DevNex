import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Labs } from './pages/Labs';
import { ComingSoon } from './pages/ComingSoon';
import { Pricing } from './pages/Pricing';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-navy text-white font-sans selection:bg-cyan selection:text-navy">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/labs" element={<Labs />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />
                    <Route path="/pricing" element={<Pricing />} />
                    {/* Add other routes here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
