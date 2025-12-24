import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-navy text-white font-sans selection:bg-cyan selection:text-navy">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Add other routes here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
