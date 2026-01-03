import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Check, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { submitToGoogleForm } from '../../services/formService';

interface FormData {
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    description: string;
    websiteStatus: 'yes' | 'no';
}

const countryCodes = [
    { code: '+91', label: 'IN', maxLength: 10 },
    { code: '+1', label: 'US', maxLength: 10 },
    { code: '+44', label: 'UK', maxLength: 10 },
    { code: '+971', label: 'UAE', maxLength: 9 },
    { code: '+61', label: 'AU', maxLength: 9 },
    { code: '+49', label: 'DE', maxLength: 11 },
];

export function SimpleProjectForm() {
    const [completed, setCompleted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        description: 'Business / Startup',
        websiteStatus: 'no',
    });

    const updateForm = (key: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        const currentCountry = countryCodes.find(c => c.code === formData.countryCode);
        const limit = currentCountry?.maxLength || 15;

        if (value.length <= limit) {
            updateForm('phone', value);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const success = await submitToGoogleForm({
            name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            packageType: 'Project Inquiry', // Changed to generic
            description: formData.description,
            websiteStatus: formData.websiteStatus,
            additionalDetails: 'Submitted via Start Project page'
        });

        setIsSubmitting(false);

        if (success) {
            setCompleted(true);
        } else {
            alert('Submission failed. Please try again.');
        }
    };

    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden flex flex-col h-full max-w-2xl mx-auto shadow-2xl">

            {!completed ? (
                <>
                    <div className="mb-8">
                        <div className="inline-block p-2 px-4 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold uppercase tracking-wider mb-4">
                            Let's Talk
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Start Your Project</h3>
                        <p className="text-gray-400 text-sm">Fill in the details below and we'll get back to you with a roadmap.</p>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                <input
                                    type="text"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => updateForm('name', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                    <input
                                        type="email"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all"
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
                                        className="w-24 bg-black/40 border border-white/10 rounded-xl py-3 px-3 text-white text-sm focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all appearance-none cursor-pointer"
                                        value={formData.countryCode}
                                        onChange={(e) => {
                                            updateForm('countryCode', e.target.value);
                                            updateForm('phone', '');
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
                                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan/50 focus:bg-black/60 transition-all"
                                            placeholder="98765 43210"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Description</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {['Business / Startup', 'Personal Brand', 'Online Store', 'Other'].map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => updateForm('description', opt)}
                                        className={`text-xs py-2.5 px-3 rounded-xl border transition-all text-center ${formData.description === opt ? 'bg-cyan/10 border-cyan text-white shadow-[0_0_10px_rgba(6,182,212,0.2)]' : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5 hover:border-white/10'}`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Do you have a website?</label>
                            <div className="flex gap-6">
                                {['yes', 'no'].map(opt => (
                                    <label key={opt} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/5 transition-colors pr-4">
                                        <div className={`w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center transition-colors ${formData.websiteStatus === opt ? 'border-cyan' : 'group-hover:border-gray-400'}`}>
                                            {formData.websiteStatus === opt && <div className="w-2.5 h-2.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]" />}
                                        </div>
                                        <span className="text-sm text-gray-300 capitalize font-medium">{opt}</span>
                                        <input type="radio" className="hidden" name="website" checked={formData.websiteStatus === opt} onChange={() => updateForm('websiteStatus', opt)} />
                                    </label>
                                ))}
                            </div>
                        </div>

                        <Button
                            className="w-full mt-2 text-lg py-6"
                            variant="glow"
                            onClick={handleSubmit}
                            disabled={!formData.name || !formData.email || isSubmitting}
                        >
                            {isSubmitting ? 'Sending Request...' : 'Send Request'}
                            {!isSubmitting && <ChevronRight className="w-5 h-5 ml-2" />}
                        </Button>
                    </div>
                </>
            ) : (
                <div className="flex-grow flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 py-12">
                    <div className="w-24 h-24 bg-gradient-to-tr from-cyan to-blue-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                        <Check className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Request Sent!</h3>
                    <p className="text-gray-300 text-lg mb-8 max-w-sm mx-auto leading-relaxed">
                        Thanks for reaching out! Our team will review your details and contact you shortly.
                    </p>
                    <Button variant="outline" onClick={() => setCompleted(false)}>
                        Start New Request
                    </Button>
                </div>
            )}
        </div>
    );
}
