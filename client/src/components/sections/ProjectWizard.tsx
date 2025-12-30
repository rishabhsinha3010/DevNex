import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ArrowLeft, User, Mail, Phone, Layout, Code2, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { submitToGoogleForm } from '../../services/formService';

type ComfortLevel = 'beginner' | 'intermediate' | 'advanced';

interface FormData {
    // Step 1: Basic
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    description: string;
    websiteStatus: 'yes' | 'no';

    // Step 2: Comfort
    comfortLevel: ComfortLevel | null;

    // Step 3: Conditional Fields (union of all possible fields)
    goal?: string; // Beginner
    helpNeeded?: string; // Beginner
    timeline?: string; // Beginner & Advanced
    budget?: string; // All
    additionalInfo?: string; // All (Optional)

    websiteType?: string; // Intermediate & Advanced
    pages?: string; // Intermediate
    features?: string[]; // Intermediate & Advanced
    designContext?: string; // Intermediate
    brandAssets?: string; // Intermediate

    techStack?: string; // Advanced
    modules?: string; // Advanced
    seoLevel?: string; // Advanced
    hosting?: string; // Advanced
}

const countryCodes = [
    { code: '+91', label: 'IN', maxLength: 10 },
    { code: '+1', label: 'US', maxLength: 10 },
    { code: '+44', label: 'UK', maxLength: 10 },
    { code: '+971', label: 'UAE', maxLength: 9 },
    { code: '+61', label: 'AU', maxLength: 9 },
    { code: '+49', label: 'DE', maxLength: 11 },
];

export function ProjectWizard() {
    const [step, setStep] = useState(1);
    const [completed, setCompleted] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        description: 'Business / Startup',
        websiteStatus: 'no',
        comfortLevel: null,
        features: [],
        additionalInfo: ''
    });

    const updateForm = (key: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        const currentCountry = countryCodes.find(c => c.code === formData.countryCode);
        const limit = currentCountry?.maxLength || 15;

        if (value.length <= limit) {
            updateForm('phone', value);
        }
    };

    const toggleFeature = (feature: string) => {
        setFormData(prev => {
            const current = prev.features || [];
            return {
                ...prev,
                features: current.includes(feature)
                    ? current.filter(f => f !== feature)
                    : [...current, feature]
            };
        });
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Format complex data for "Additional Details"
        let details = `Comfort Level: ${formData.comfortLevel || 'N/A'}\n`;
        if (formData.additionalInfo) details += `User Note: ${formData.additionalInfo}\n`;
        if (formData.goal) details += `Goal: ${formData.goal}\n`;
        if (formData.helpNeeded) details += `Help Needed: ${formData.helpNeeded}\n`;
        if (formData.features && formData.features.length > 0) details += `Features: ${formData.features.join(', ')}\n`;
        if (formData.websiteType) details += `Type: ${formData.websiteType}\n`;
        if (formData.pages) details += `Pages: ${formData.pages}\n`;
        if (formData.designContext) details += `Design: ${formData.designContext}\n`;
        if (formData.techStack) details += `Tech Stack: ${formData.techStack}\n`;
        if (formData.modules) details += `Modules: ${formData.modules}\n`;
        if (formData.seoLevel) details += `SEO: ${formData.seoLevel}\n`;

        const success = await submitToGoogleForm({
            name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            packageType: 'Custom Wizard',
            description: formData.description,
            websiteStatus: formData.websiteStatus,
            budget: formData.budget || 'Not specified',
            timeline: formData.timeline || 'Not specified',
            additionalDetails: details
        });

        setIsSubmitting(false);

        if (success) {
            setCompleted(true);
        } else {
            alert('Submission failed. Please try again.');
        }
    };

    const renderStep1 = () => (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Name / Brand Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={(e) => updateForm('name', e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                            <input
                                type="email"
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) => updateForm('email', e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Phone</label>
                        <div className="flex gap-2">
                            <select
                                className="w-24 bg-black/40 border border-white/10 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all appearance-none cursor-pointer"
                                value={formData.countryCode}
                                onChange={(e) => {
                                    updateForm('countryCode', e.target.value);
                                    updateForm('phone', ''); // Reset phone on country change to avoid validation conflicts
                                }}
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
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">What best describes you?</label>
                    <div className="grid grid-cols-2 gap-2">
                        {['Business / Startup', 'Personal Brand / Portfolio', 'Online Store', 'Other'].map(opt => (
                            <button
                                key={opt}
                                onClick={() => updateForm('description', opt)}
                                className={`text-sm py-2 px-3 rounded-lg border transition-all text-left ${formData.description === opt ? 'bg-cyan/10 border-cyan text-white' : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Do you already have a website?</label>
                    <div className="flex gap-4">
                        {['yes', 'no'].map(opt => (
                            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center transition-colors ${formData.websiteStatus === opt ? 'border-cyan' : 'group-hover:border-gray-400'}`}>
                                    {formData.websiteStatus === opt && <div className="w-2 h-2 rounded-full bg-cyan" />}
                                </div>
                                <span className="text-sm text-gray-300 capitalize">{opt}</span>
                                <input type="radio" className="hidden" name="website" checked={formData.websiteStatus === opt} onChange={() => updateForm('websiteStatus', opt)} />
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <Button className="w-full mt-6" variant="glow" onClick={nextStep} disabled={!formData.name || !formData.email}>
                Continue <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Choose Your Comfort Level</h3>
                <p className="text-gray-400 text-sm">How familiar are you with websites?</p>
            </div>

            <div className="space-y-3">
                <button
                    onClick={() => { updateForm('comfortLevel', 'beginner'); nextStep(); }}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan/50 hover:bg-white/10 transition-all text-left flex items-center gap-4 group"
                >
                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                        <User className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-white font-semibold">I'm new to this</div>
                        <div className="text-xs text-gray-400">"I don't know much, guide me"</div>
                    </div>
                </button>

                <button
                    onClick={() => { updateForm('comfortLevel', 'intermediate'); nextStep(); }}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan/50 hover:bg-white/10 transition-all text-left flex items-center gap-4 group"
                >
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                        <Layout className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-white font-semibold">I know the basics</div>
                        <div className="text-xs text-gray-400">"I have an idea but need help"</div>
                    </div>
                </button>

                <button
                    onClick={() => { updateForm('comfortLevel', 'advanced'); nextStep(); }}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan/50 hover:bg-white/10 transition-all text-left flex items-center gap-4 group"
                >
                    <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                        <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-white font-semibold">I know exactly what I want</div>
                        <div className="text-xs text-gray-400">"I have clear requirements"</div>
                    </div>
                </button>
            </div>

            <button onClick={prevStep} className="text-gray-500 hover:text-white text-sm flex items-center w-full justify-center mt-4 transition-colors">
                <ArrowLeft className="w-3 h-3 mr-1" /> Back
            </button>
        </div>
    );

    const renderStep3 = () => {
        if (!formData.comfortLevel) return null;

        const commonWrapper = (children: React.ReactNode) => (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                {children}
                <div className="pt-4 flex gap-3">
                    <Button variant="ghost" onClick={prevStep} className="flex-1">Back</Button>
                    <Button variant="glow" onClick={handleSubmit} className="flex-[2]">Submit Request</Button>
                </div>
            </div>
        );

        if (formData.comfortLevel === 'beginner') {
            return commonWrapper(
                <>
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Main goal of the website</label>
                        <div className="grid grid-cols-2 gap-2">
                            {['Get customers', 'Show services/work', 'Sell products', 'Online presence'].map(opt => (
                                <button key={opt} onClick={() => updateForm('goal', opt)}
                                    className={`text-xs py-2 px-3 rounded-lg border transition-all text-left ${formData.goal === opt ? 'bg-cyan/10 border-cyan text-white' : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5'}`}>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Do you need help with content & design?</label>
                        <div className="flex gap-2">
                            {['Yes', 'Some help', 'No'].map(opt => (
                                <button key={opt} onClick={() => updateForm('helpNeeded', opt)}
                                    className={`text-xs py-2 px-3 rounded-lg border transition-all flex-1 ${formData.helpNeeded === opt ? 'bg-cyan/10 border-cyan text-white' : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5'}`}>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Optional Info */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Additional Requirements (Optional)</label>
                        <textarea
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 resize-y min-h-[80px]"
                            placeholder="Tell us a bit more about your project..."
                            value={formData.additionalInfo || ''}
                            onChange={(e) => updateForm('additionalInfo', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Budget Range</label>
                        <input
                            type="text"
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan/50"
                            placeholder="Enter your budget (e.g. ₹15k)"
                            value={formData.budget}
                            onChange={(e) => updateForm('budget', e.target.value)}
                        />
                    </div>
                </>
            );
        }

        if (formData.comfortLevel === 'intermediate') {
            return commonWrapper(
                <>
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Type of website</label>
                        <div className="grid grid-cols-2 gap-2">
                            {['Business', 'Portfolio', 'Blog', 'E-Commerce', 'Other'].map(opt => (
                                <button key={opt} onClick={() => updateForm('websiteType', opt)}
                                    className={`text-xs py-2 px-3 rounded-lg border transition-all text-left ${formData.websiteType === opt ? 'bg-cyan/10 border-cyan text-white' : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5'}`}>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Number of Pages</label>
                        <div className="flex gap-2">
                            {['1–5', '6–10', '10+'].map(opt => (
                                <button key={opt} onClick={() => updateForm('pages', opt)}
                                    className={`text-xs py-2 px-3 rounded-lg border transition-all flex-1 ${formData.pages === opt ? 'bg-cyan/10 border-cyan text-white' : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5'}`}>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Optional Info */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Additional Requirements (Optional)</label>
                        <textarea
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 resize-y min-h-[80px]"
                            placeholder="Any specific features or details?"
                            value={formData.additionalInfo || ''}
                            onChange={(e) => updateForm('additionalInfo', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Features Needed</label>
                        <div className="grid grid-cols-2 gap-2">
                            {['Contact Form', 'WhatsApp Chat', 'Social Media', 'Blog', 'Payments'].map(feat => (
                                <button key={feat} onClick={() => toggleFeature(feat)}
                                    className={`text-xs py-1.5 px-2 rounded-lg border transition-all text-left flex items-center justify-between ${formData.features?.includes(feat) ? 'bg-cyan/10 border-cyan text-white' : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5'}`}>
                                    {feat} {formData.features?.includes(feat) && <Check className="w-3 h-3" />}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Budget Range</label>
                        <input
                            type="text"
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan/50"
                            placeholder="Enter your budget (e.g. ₹25k)"
                            value={formData.budget}
                            onChange={(e) => updateForm('budget', e.target.value)}
                        />
                    </div>
                </>
            );
        }

        if (formData.comfortLevel === 'advanced') {
            return commonWrapper(
                <>
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Exact Website Type</label>
                        <div className="grid grid-cols-1 gap-2">
                            {['Business / SaaS', 'E-Commerce', 'Custom Platform', 'Other'].map(opt => (
                                <button key={opt} onClick={() => updateForm('websiteType', opt)}
                                    className={`text-xs py-2 px-3 rounded-lg border transition-all text-left ${formData.websiteType === opt ? 'bg-cyan/10 border-cyan text-white' : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5'}`}>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Technology Preference</label>
                        <select
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 text-white text-sm focus:outline-none focus:border-cyan/50"
                            onChange={(e) => updateForm('techStack', e.target.value)}
                            value={formData.techStack || ''}
                        >
                            <option value="" disabled className="bg-gray-900 text-white">Select Tech</option>
                            <option value="WordPress" className="bg-gray-900 text-white">WordPress</option>
                            <option value="Custom (React/Next)" className="bg-gray-900 text-white">Custom (React / Next)</option>
                            <option value="Shopify/WooCommerce" className="bg-gray-900 text-white">Shopify / WooCommerce</option>
                            <option value="Other" className="bg-gray-900 text-white">Other</option>
                        </select>
                    </div>

                    {/* Optional Info */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Additional Requirements (Optional)</label>
                        <textarea
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 resize-y min-h-[80px]"
                            placeholder="Detailed requirements, preferred tech stack, etc."
                            value={formData.additionalInfo || ''}
                            onChange={(e) => updateForm('additionalInfo', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Required Features</label>
                        <div className="grid grid-cols-2 gap-2">
                            {['Admin Panel', 'Payment Gateway', 'Blog / CMS', 'API Integrations'].map(feat => (
                                <button key={feat} onClick={() => toggleFeature(feat)}
                                    className={`text-xs py-1.5 px-2 rounded-lg border transition-all text-left flex items-center justify-between ${formData.features?.includes(feat) ? 'bg-cyan/10 border-cyan text-white' : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5'}`}>
                                    {feat} {formData.features?.includes(feat) && <Check className="w-3 h-3" />}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Timeline</label>
                            <input
                                type="text"
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan/50"
                                placeholder="e.g. 1 month"
                                value={formData.timeline}
                                onChange={(e) => updateForm('timeline', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Budget</label>
                            <input
                                type="text"
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-2 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan/50"
                                placeholder="Your budget"
                                value={formData.budget}
                                onChange={(e) => updateForm('budget', e.target.value)}
                            />
                        </div>
                    </div>
                </>
            );
        }
    };

    const renderSuccess = () => (
        <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-gradient-to-tr from-cyan to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Request Received!</h3>
            <p className="text-gray-300 mb-8 max-w-sm mx-auto leading-relaxed">
                Thanks! Our Devnex team will review your details and share a tailored plan with pricing within <span className="text-cyan font-bold">24 hours</span>.
            </p>
            <Button variant="outline" onClick={() => setCompleted(false)}>Start New Request</Button>
        </div>
    );

    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md h-full flex flex-col relative overflow-hidden">

            {/* Referral Offer - Top Banner */}
            <div className="mb-6 p-2 rounded-lg bg-white/5 border border-white/5 text-center">
                <p className="text-xs text-gray-300">
                    <Sparkles className="inline-block w-3 h-3 text-cyan mr-1" />
                    Get <span className="text-cyan font-bold">20% total discount</span> if you refer us!
                </p>
            </div>

            {/* Header */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Custom Package</h3>
                <p className="text-gray-400 text-sm">Tailored specifically for your unique requirements.</p>
            </div>

            {/* Step Indicator - Continuous */}
            {!completed && (
                <div className="mb-8 px-4 relative">
                    {/* Continuous Line Background */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

                    {/* Active Line Progress */}
                    <div
                        className="absolute top-1/2 left-0 h-0.5 bg-[#E4D00A] -translate-y-1/2 z-0 transition-all duration-300 ease-out"
                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                    />

                    {/* Circles */}
                    <div className="relative z-10 flex justify-between">
                        {[1, 2, 3].map((s) => {
                            const isActive = s <= step;
                            return (
                                <div key={s} className="flex flex-col items-center">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2 ${isActive
                                            ? 'bg-navy border-[#E4D00A] text-[#E4D00A] shadow-[0_0_15px_rgba(228,208,10,0.4)] scale-110'
                                            : 'bg-navy border-white/10 text-gray-500 scale-100'
                                            }`}
                                    >
                                        {s}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            <div className="flex-grow relative">
                <AnimatePresence mode="wait">
                    {completed ? (
                        <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            {renderSuccess()}
                        </motion.div>
                    ) : (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            {step === 1 && renderStep1()}
                            {step === 2 && renderStep2()}
                            {step === 3 && renderStep3()}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer Referral Offer */}

        </div>
    );
}
