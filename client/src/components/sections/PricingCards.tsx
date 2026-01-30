import { Check, X, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface PricingCardProps {
    name: string;
    color: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    maintenance?: string;
    features: Array<{ text: string; included: boolean }>;
    badge?: string;
    onSelect: () => void;
}

const getColorClasses = (color: string) => {
    const colors: Record<string, {
        badge: string;
        badgeText: string;
        priceBox: string;
        button: string;
        checkBg: string;
        checkText: string;
    }> = {
        emerald: {
            badge: 'bg-cyan-500/20 border-cyan-500/50',
            badgeText: 'text-cyan-400',
            priceBox: 'border-cyan-500/30 bg-cyan-500/5',
            button: 'border-cyan-500/50 hover:bg-cyan-500/10',
            checkBg: 'bg-cyan-500/20',
            checkText: 'text-cyan-400',
        },
        blue: {
            badge: 'bg-blue-500/20 border-blue-500/50',
            badgeText: 'text-blue-400',
            priceBox: 'border-blue-500/30 bg-blue-500/5',
            button: 'border-blue-500/50 hover:bg-blue-500/10',
            checkBg: 'bg-blue-500/20',
            checkText: 'text-blue-400',
        },
        rose: {
            badge: 'bg-rose-500/20 border-rose-500/50',
            badgeText: 'text-rose-400',
            priceBox: 'border-rose-500/30 bg-rose-500/5',
            button: 'border-rose-500/50 hover:bg-rose-500/10',
            checkBg: 'bg-rose-500/20',
            checkText: 'text-rose-400',
        },
        purple: {
            badge: 'bg-purple-500/20 border-purple-500/50',
            badgeText: 'text-purple-400',
            priceBox: 'border-purple-500/30 bg-purple-500/5',
            button: 'border-purple-500/50 hover:bg-purple-500/10',
            checkBg: 'bg-purple-500/20',
            checkText: 'text-purple-400',
        },
    };
    return colors[color] || colors.emerald;
};

function PricingCard({ name, color, price, originalPrice, discount, maintenance, features, badge, onSelect }: PricingCardProps) {
    const colors = getColorClasses(color);

    return (
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 flex flex-col h-full">
            {/* Header */}
            <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
                {badge && (
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase ${colors.badge} ${colors.badgeText}`}>
                        <Sparkles className="w-3 h-3" />
                        {badge}
                    </div>
                )}
            </div>

            {/* Price Box */}
            <div className={`mb-4 p-4 rounded-xl border text-center ${colors.priceBox}`}>
                {originalPrice && discount && (
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-gray-500 text-base line-through">{originalPrice}</span>
                        <span className="px-2 py-0.5 rounded bg-red-500/20 text-xs text-red-400 font-bold uppercase border border-red-500/20">
                            {discount}
                        </span>
                    </div>
                )}
                <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="text-3xl font-extrabold text-white">{price}</span>
                    {price === '₹0' && (
                        <span className="text-gray-400 text-sm font-medium">Development Cost</span>
                    )}
                </div>
                {maintenance && (
                    <>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600/50 to-transparent my-3" />
                        <p className={`text-sm font-semibold ${colors.badgeText}`}>
                            {maintenance}
                        </p>
                    </>
                )}
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-4 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        {feature.included ? (
                            <div className={`${colors.checkBg} p-1 rounded-full shrink-0`}>
                                <Check className={`w-3.5 h-3.5 ${colors.checkText}`} />
                            </div>
                        ) : (
                            <div className="bg-red-500/10 p-1 rounded-full shrink-0">
                                <X className="w-3.5 h-3.5 text-red-500" />
                            </div>
                        )}
                        <span className={`text-xs leading-tight ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <Button
                className={`w-full border-2 ${colors.button} transition-all`}
                variant="outline"
                onClick={onSelect}
            >
                {name === 'Custom' ? 'Contact Us' : `Choose ${name}`}
            </Button>
        </div>
    );
}

export function PricingCards({ onSelectPackage }: { onSelectPackage: (packageName: string) => void }) {
    const pricingPlans = [
        {
            name: 'Starter',
            color: 'emerald',
            price: '₹7,999',
            features: [
                { text: 'Purpose: Information', included: true },
                { text: 'Pages: Fixed', included: true },
                { text: 'Admin Panel: No', included: false },
                { text: 'Content Edit: Developer', included: true },
                { text: 'Payments: No', included: false },
                { text: 'Cart: No', included: false },
                { text: 'Orders: No', included: false },
                { text: 'Inventory: No', included: false },
                { text: 'Best For: Small Business', included: true },
            ],
        },
        {
            name: 'Business',
            color: 'blue',
            price: '₹15,999',
            features: [
                { text: 'Purpose: Enquiries', included: true },
                { text: 'Pages: Dynamic', included: true },
                { text: 'Admin Panel: Yes', included: true },
                { text: 'Content Edit: Owner', included: true },
                { text: 'Payments: No', included: false },
                { text: 'Cart: No', included: false },
                { text: 'Orders: No', included: false },
                { text: 'Inventory: No', included: false },
                { text: 'Best For: Services', included: true },
            ],
        },
        {
            name: 'E-Commerce',
            color: 'rose',
            price: '₹23,999',
            features: [
                { text: 'Purpose: Selling', included: true },
                { text: 'Pages: Products', included: true },
                { text: 'Admin Panel: Full', included: true },
                { text: 'Content Edit: Owner', included: true },
                { text: 'Payments: Yes', included: true },
                { text: 'Cart: Yes', included: true },
                { text: 'Orders: Yes', included: true },
                { text: 'Inventory: Yes', included: true },
                { text: 'Best For: Online Store', included: true },
            ],
        },
        {
            name: 'Custom',
            color: 'purple',
            price: 'Contact Us',
            badge: 'ENTERPRISE',
            features: [
                { text: 'Purpose: Tailored', included: true },
                { text: 'Pages: Unlimited', included: true },
                { text: 'Admin Panel: Enterprise', included: true },
                { text: 'Content Edit: Owner', included: true },
                { text: 'Payments: Custom', included: true },
                { text: 'Cart: Custom', included: true },
                { text: 'Orders: Custom', included: true },
                { text: 'Inventory: Custom', included: true },
                { text: 'Best For: Enterprise', included: true },
            ],
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
                <PricingCard
                    key={plan.name}
                    {...plan}
                    onSelect={() => onSelectPackage(plan.name)}
                />
            ))}
        </div>
    );
}
