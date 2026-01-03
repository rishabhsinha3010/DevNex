import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, X, ArrowLeft, User, Mail, Phone, Rocket, Crown, Zap, Globe, Code2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { ProjectWizard } from './ProjectWizard';
import { submitToGoogleForm } from '../../services/formService';

const countryCodes = [
    { code: '+91', label: 'IN', maxLength: 10 },
    { code: '+1', label: 'US', maxLength: 10 },
    { code: '+44', label: 'UK', maxLength: 10 },
    { code: '+971', label: 'UAE', maxLength: 9 },
    { code: '+61', label: 'AU', maxLength: 9 },
    { code: '+49', label: 'DE', maxLength: 11 },
];

export function CostCalculator() {
    const [showStarterForm, setShowStarterForm] = useState(false);
    const [starterCompleted, setStarterCompleted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [starterData, setStarterData] = useState({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        description: 'Business / Startup',
        websiteStatus: 'no'
    });

    const [showWizard, setShowWizard] = useState(false);

    const updateStarterForm = (key: string, value: string) => {
        setStarterData(prev => ({ ...prev, [key]: value }));
    };

    const handleStarterPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        const currentCountry = countryCodes.find(c => c.code === starterData.countryCode);
        const limit = currentCountry?.maxLength || 15;
        if (value.length <= limit) updateStarterForm('phone', value);
    };

    const handleStarterSubmit = async () => {
        if (!starterData.name || !starterData.email) return;

        setIsSubmitting(true);
        const success = await submitToGoogleForm({
            name: starterData.name,
            email: starterData.email,
            phone: `${starterData.countryCode} ${starterData.phone}`,
            packageType: 'Starter',
            description: starterData.description,
            websiteStatus: starterData.websiteStatus,
            budget: '5000',
            timeline: 'Standard',
            additionalDetails: 'Starter Package Claim via Website'
        });

        setIsSubmitting(false);

        if (success) {
            setStarterCompleted(true);
        } else {
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="py-24 bg-navy relative overflow-hidden" id="pricing">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan/5 blur-[100px] rounded-l-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-600/5 blur-[100px] rounded-r-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                        Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Pricing</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Choose the perfect plan for your digital journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[40fr_60fr] gap-8 max-w-6xl mx-auto">

                    {/* Starter Plan Card */}
                    <div className="relative min-h-[600px]">
                        <AnimatePresence mode="wait">
                            {!showStarterForm ? (
                                <motion.div
                                    key="offer"
                                    initial={{ opacity: 0, rotateY: 90 }}
                                    animate={{ opacity: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, rotateY: -90 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group flex flex-col h-full"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <Sparkles className="w-24 h-24 text-cyan/10" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">Starter Package</h3>
                                    <div className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan/20 to-blue-500/20 text-cyan text-xs font-bold uppercase mb-6 border border-cyan/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse">
                                        <Sparkles className="w-3 h-3 mr-2" /> Limited Time Offer
                                    </div>

                                    <div className="mb-8 p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.1)] relative overflow-hidden group-hover:border-cyan/50 transition-colors">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-cyan/20 blur-[40px] rounded-full pointer-events-none -mr-10 -mt-10" />

                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-gray-500 text-lg line-through decoration-red-500/70 decoration-2">₹5,000</span>
                                            <span className="px-2 py-0.5 rounded bg-red-500/20 text-xs text-red-400 font-bold uppercase tracking-wide border border-red-500/20">100% OFF</span>
                                        </div>
                                        <div className="flex items-baseline mb-2">
                                            <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-sm">₹0</span>
                                            <span className="text-gray-300 ml-2 font-medium bg-white/10 px-2 py-1 rounded text-sm">Development Cost</span>
                                        </div>
                                        <div className="h-px w-full bg-gradient-to-r from-cyan/50 to-transparent my-4" />
                                        <p className="text-cyan text-sm font-bold flex items-center">
                                            Starting @ ₹499 <span className="text-gray-400 font-normal ml-1">/ month maintenance</span>
                                        </p>
                                    </div>

                                    <ul className="space-y-4 mb-8 text-gray-300 flex-grow">
                                        {[
                                            'Up to 2 Dynamic Pages',
                                            'Up to 4 Static Pages',
                                            'Technical Support',
                                            'FB & Insta Integration',
                                            '1 Click WhatsApp Integration',
                                            '100% Responsive Website',
                                            'SEO Friendly Website',
                                            'Mobile Friendly Website',
                                            '1 Revision'
                                        ].map(feat => (
                                            <li key={feat} className="flex items-center gap-3">
                                                <div className="bg-cyan/20 p-1 rounded-full shrink-0"><Check className="w-3 h-3 text-cyan" /></div>
                                                {feat}
                                            </li>
                                        ))}
                                        <li className="flex items-center gap-3 text-gray-400">
                                            <div className="bg-red-500/10 p-1 rounded-full shrink-0"><X className="w-3 h-3 text-red-500" /></div>
                                            Domain Name Not Included
                                        </li>
                                    </ul>

                                    <Button className="w-full mt-auto" variant="glow" onClick={() => setShowStarterForm(true)}>
                                        Claim Starter Offer
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, rotateY: 90 }}
                                    animate={{ opacity: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, rotateY: -90 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden h-full flex flex-col"
                                >
                                    <div className="mb-6">
                                        <button onClick={() => setShowStarterForm(false)} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm mb-4 transition-colors">
                                            <ArrowLeft className="w-4 h-4" /> Back to Offer
                                        </button>
                                        <h3 className="text-2xl font-bold text-white">Claim Starter Plan</h3>
                                        <p className="text-gray-400 text-xs mt-1">Fill in your details to get started.</p>
                                    </div>

                                    {!starterCompleted ? (
                                        <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-grow">
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                                    <input
                                                        type="text"
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all"
                                                        placeholder="Enter name"
                                                        value={starterData.name}
                                                        onChange={(e) => updateStarterForm('name', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                                    <input
                                                        type="email"
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all"
                                                        placeholder="name@example.com"
                                                        value={starterData.email}
                                                        onChange={(e) => updateStarterForm('email', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Phone</label>
                                                <div className="flex gap-2">
                                                    <select
                                                        className="w-24 bg-black/40 border border-white/10 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all appearance-none cursor-pointer"
                                                        value={starterData.countryCode}
                                                        onChange={(e) => updateStarterForm('countryCode', e.target.value)}
                                                    >
                                                        {countryCodes.map(c => (
                                                            <option key={c.code} value={c.code} className="bg-gray-900 text-white">{c.code} ({c.label})</option>
                                                        ))}
                                                    </select>
                                                    <div className="relative flex-grow">
                                                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                                        <input
                                                            type="tel"
                                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all"
                                                            placeholder="98765 43210"
                                                            value={starterData.phone}
                                                            onChange={handleStarterPhoneChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Description</label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {['Business / Startup', 'Personal Brand', 'Online Store', 'Other'].map(opt => (
                                                        <button
                                                            key={opt}
                                                            onClick={() => updateStarterForm('description', opt)}
                                                            className={`text-xs py-2 px-3 rounded-lg border transition-all text-left ${starterData.description === opt ? 'bg-cyan/10 border-cyan text-white' : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5'}`}
                                                        >
                                                            {opt}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Has Website?</label>
                                                <div className="flex gap-4">
                                                    {['yes', 'no'].map(opt => (
                                                        <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                                            <div className={`w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center transition-colors ${starterData.websiteStatus === opt ? 'border-cyan' : 'group-hover:border-gray-400'}`}>
                                                                {starterData.websiteStatus === opt && <div className="w-2 h-2 rounded-full bg-cyan" />}
                                                            </div>
                                                            <span className="text-sm text-gray-300 capitalize">{opt}</span>
                                                            <input type="radio" className="hidden" name="starterWebsite" checked={starterData.websiteStatus === opt} onChange={() => updateStarterForm('websiteStatus', opt)} />
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            <Button className="w-full mt-4" variant="glow" onClick={handleStarterSubmit} disabled={!starterData.name || !starterData.email}>
                                                Submit Request
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="flex-grow flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                                            <div className="w-16 h-16 bg-gradient-to-tr from-cyan to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                                <Check className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">Request Sent!</h3>
                                            <p className="text-gray-400 text-sm mb-6">
                                                We'll contact you shortly to onboard you to the Starter Plan.
                                            </p>
                                            <Button variant="outline" onClick={() => { setStarterCompleted(false); setShowStarterForm(false); }}>
                                                Done
                                            </Button>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Custom Plan Container */}
                    <div className="relative min-h-[600px]">
                        <AnimatePresence mode="wait">
                            {!showWizard ? (
                                <motion.div
                                    key="cover"
                                    initial={{ opacity: 0, rotateY: 90 }}
                                    animate={{ opacity: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, rotateY: -90 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group flex flex-col h-full"
                                >
                                    {/* Premium Background Effects */}
                                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#E4D00A]/10 via-transparent to-transparent pointer-events-none" />
                                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#E4D00A]/20 blur-[60px] rounded-full pointer-events-none" />

                                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <Crown className="w-24 h-24 text-[#E4D00A]/10" />
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-2 font-heading">Custom Solution</h3>
                                    <div className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#E4D00A]/20 to-[#B4A005]/20 text-[#E4D00A] text-xs font-bold uppercase mb-8 border border-[#E4D00A]/30">
                                        <Sparkles className="w-3 h-3 mr-2 text-[#E4D00A]" /> Enterprise Grade
                                    </div>

                                    <div className="mb-8 relative">
                                        <p className="text-gray-400 text-lg mb-2">Tailored pricing for</p>
                                        <div className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                            Unique <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E4D00A] to-[#B4A005]">Ambitions</span>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed max-w-md">
                                            For businesses that need specific features, complex logic, or scalable architecture.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 flex-grow">
                                        {[
                                            { icon: Globe, text: "Unlimited Pages" },
                                            { icon: Code2, text: "Custom Development" },
                                            { icon: Zap, text: "High Performance" },
                                            { icon: Rocket, text: "Scalable Tech" },
                                            { icon: Check, text: "Priority Support" },
                                            { icon: Check, text: "Advanced SEO" },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#E4D00A]/30 transition-colors">
                                                <div className="bg-[#E4D00A]/20 p-2 rounded-lg shrink-0">
                                                    <item.icon className="w-4 h-4 text-[#E4D00A]" />
                                                </div>
                                                <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className="w-full text-lg py-6"
                                        variant="glow"
                                        onClick={() => setShowWizard(true)}
                                        style={{
                                            boxShadow: '0 0 20px rgba(228, 208, 10, 0.4)',
                                            borderColor: 'rgba(228, 208, 10, 0.5)'
                                        }}
                                    >
                                        Build Your Vision
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="wizard"
                                    initial={{ opacity: 0, rotateY: 90 }}
                                    animate={{ opacity: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, rotateY: -90 }}
                                    transition={{ duration: 0.4 }}
                                    className="h-full relative"
                                >
                                    {/* Close button for wizard to return to cover */}
                                    <button
                                        onClick={() => setShowWizard(false)}
                                        className="absolute top-4 right-4 z-20 text-gray-500 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
                                        title="Close Wizard"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                    <ProjectWizard />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
