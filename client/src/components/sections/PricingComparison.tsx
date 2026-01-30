import { Check, X } from 'lucide-react';

interface PricingTier {
    name: string;
    color: string;
    purpose: string;
    pages: string;
    adminPanel: boolean | string;
    contentEdit: string;
    payments: boolean | string;
    cart: boolean | string;
    orders: boolean | string;
    inventory: boolean | string;
    bestFor: string;
    price: string;
}

const pricingData: PricingTier[] = [
    {
        name: 'Starter',
        color: 'emerald',
        purpose: 'Information',
        pages: 'Fixed',
        adminPanel: false,
        contentEdit: 'Developer',
        payments: false,
        cart: false,
        orders: false,
        inventory: false,
        bestFor: 'Small Business',
        price: '₹7,999',
    },
    {
        name: 'Business',
        color: 'blue',
        purpose: 'Enquiries',
        pages: 'Dynamic',
        adminPanel: true,
        contentEdit: 'Owner',
        payments: false,
        cart: false,
        orders: false,
        inventory: false,
        bestFor: 'Services',
        price: '₹15,999',
    },
    {
        name: 'E-Commerce',
        color: 'rose',
        purpose: 'Selling',
        pages: 'Products',
        adminPanel: 'Full',
        contentEdit: 'Owner',
        payments: true,
        cart: true,
        orders: true,
        inventory: true,
        bestFor: 'Online Store',
        price: '₹23,999',
    },
    {
        name: 'Custom',
        color: 'purple',
        purpose: 'Tailored',
        pages: 'Unlimited',
        adminPanel: 'Enterprise',
        contentEdit: 'Owner',
        payments: 'Custom',
        cart: 'Custom',
        orders: 'Custom',
        inventory: 'Custom',
        bestFor: 'Enterprise',
        price: 'Contact Us',
    },
];

const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
        emerald: {
            bg: 'bg-emerald-500/20',
            text: 'text-emerald-400',
            border: 'border-emerald-500/30',
        },
        blue: {
            bg: 'bg-blue-500/20',
            text: 'text-blue-400',
            border: 'border-blue-500/30',
        },
        rose: {
            bg: 'bg-rose-500/20',
            text: 'text-rose-400',
            border: 'border-rose-500/30',
        },
        purple: {
            bg: 'bg-purple-500/20',
            text: 'text-purple-400',
            border: 'border-purple-500/30',
        },
    };
    return colors[color] || colors.emerald;
};

export function PricingComparison() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-bold text-white">
                            Website Pricing Comparison
                        </h2>
                    </div>
                    <p className="text-gray-400 text-lg">Choose the perfect plan for your business needs</p>
                </div>

                {/* Pricing Table */}
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-sm bg-gray-800/30">
                            <table className="min-w-full divide-y divide-gray-700/50">
                                {/* Table Header */}
                                <thead className="bg-gray-800/50">
                                    <tr>
                                        <th scope="col" className="py-6 px-6 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                                            Parameter
                                        </th>
                                        {pricingData.map((tier) => {
                                            const colors = getColorClasses(tier.color);
                                            return (
                                                <th
                                                    key={tier.name}
                                                    scope="col"
                                                    className="py-6 px-6 text-center"
                                                >
                                                    <div className={`inline - flex items - center gap - 2 px - 4 py - 2 rounded - full ${colors.bg} ${colors.text} border ${colors.border} `}>
                                                        <div className={`w - 2 h - 2 rounded - full ${tier.color === 'emerald' ? 'bg-emerald-400' : tier.color === 'blue' ? 'bg-blue-400' : 'bg-rose-400'} `} />
                                                        <span className="font-bold text-base">{tier.name}</span>
                                                    </div>
                                                </th>
                                            );
                                        })}
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-gray-700/30">
                                    {/* Purpose Row */}
                                    <tr className="hover:bg-gray-700/20 transition-colors">
                                        <td className="py-5 px-6 text-sm font-medium text-white">Purpose</td>
                                        {pricingData.map((tier) => (
                                            <td key={tier.name} className="py-5 px-6 text-sm text-gray-300 text-center">
                                                {tier.purpose}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Pages Row */}
                                    <tr className="hover:bg-gray-700/20 transition-colors">
                                        <td className="py-5 px-6 text-sm font-medium text-white">Pages</td>
                                        {pricingData.map((tier) => (
                                            <td key={tier.name} className="py-5 px-6 text-sm text-gray-300 text-center">
                                                {tier.pages}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Admin Panel Row */}
                                    <tr className="hover:bg-gray-700/20 transition-colors">
                                        <td className="py-5 px-6 text-sm font-medium text-white">Admin Panel</td>
                                        {pricingData.map((tier) => (
                                            <td key={tier.name} className="py-5 px-6 text-center">
                                                {typeof tier.adminPanel === 'boolean' ? (
                                                    tier.adminPanel ? (
                                                        <div className="inline-flex items-center gap-1 text-emerald-400">
                                                            <Check className="w-5 h-5" />
                                                            <span className="text-sm">Yes</span>
                                                        </div>
                                                    ) : (
                                                        <div className="inline-flex items-center gap-1 text-rose-400">
                                                            <X className="w-5 h-5" />
                                                            <span className="text-sm">No</span>
                                                        </div>
                                                    )
                                                ) : (
                                                    <span className="text-sm text-gray-300">{tier.adminPanel}</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Content Edit Row */}
                                    <tr className="hover:bg-gray-700/20 transition-colors">
                                        <td className="py-5 px-6 text-sm font-medium text-white">Content Edit</td>
                                        {pricingData.map((tier) => (
                                            <td key={tier.name} className="py-5 px-6 text-sm text-gray-300 text-center">
                                                {tier.contentEdit}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Payments Row */}
                                    <tr className="hover:bg-gray-700/20 transition-colors">
                                        <td className="py-5 px-6 text-sm font-medium text-white">Payments</td>
                                        {pricingData.map((tier) => (
                                            <td key={tier.name} className="py-5 px-6 text-center">
                                                {typeof tier.payments === 'string' ? (
                                                    <span className="text-sm text-purple-400 font-medium">{tier.payments}</span>
                                                ) : tier.payments ? (
                                                    <div className="inline-flex items-center gap-1 text-emerald-400">
                                                        <Check className="w-5 h-5" />
                                                        <span className="text-sm">Yes</span>
                                                    </div>
                                                ) : (
                                                    <div className="inline-flex items-center gap-1 text-rose-400">
                                                        <X className="w-5 h-5" />
                                                        <span className="text-sm">No</span>
                                                    </div>
                                                )}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Cart Row */}
                                    <tr className="hover:bg-gray-700/20 transition-colors">
                                        <td className="py-5 px-6 text-sm font-medium text-white">Cart</td>
                                        {pricingData.map((tier) => (
                                            <td key={tier.name} className="py-5 px-6 text-center">
                                                {typeof tier.cart === 'string' ? (
                                                    <span className="text-sm text-purple-400 font-medium">{tier.cart}</span>
                                                ) : tier.cart ? (
                                                    <div className="inline-flex items-center gap-1 text-emerald-400">
                                                        <Check className="w-5 h-5" />
                                                        <span className="text-sm">Yes</span>
                                                    </div>
                                                ) : (
                                                    <div className="inline-flex items-center gap-1 text-rose-400">
                                                        <X className="w-5 h-5" />
                                                        <span className="text-sm">No</span>
                                                    </div>
                                                )}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Orders Row */}
                                    <tr className="hover:bg-gray-700/20 transition-colors">
                                        <td className="py-5 px-6 text-sm font-medium text-white">Orders</td>
                                        {pricingData.map((tier) => (
                                            <td key={tier.name} className="py-5 px-6 text-center">
                                                {typeof tier.orders === 'string' ? (
                                                    <span className="text-sm text-purple-400 font-medium">{tier.orders}</span>
                                                ) : tier.orders ? (
                                                    <div className="inline-flex items-center gap-1 text-emerald-400">
                                                        <Check className="w-5 h-5" />
                                                        <span className="text-sm">Yes</span>
                                                    </div>
                                                ) : (
                                                    <div className="inline-flex items-center gap-1 text-rose-400">
                                                        <X className="w-5 h-5" />
                                                        <span className="text-sm">No</span>
                                                    </div>
                                                )}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Inventory Row */}
                                    <tr className="hover:bg-gray-700/20 transition-colors">
                                        <td className="py-5 px-6 text-sm font-medium text-white">Inventory</td>
                                        {pricingData.map((tier) => (
                                            <td key={tier.name} className="py-5 px-6 text-center">
                                                {typeof tier.inventory === 'string' ? (
                                                    <span className="text-sm text-purple-400 font-medium">{tier.inventory}</span>
                                                ) : tier.inventory ? (
                                                    <div className="inline-flex items-center gap-1 text-emerald-400">
                                                        <Check className="w-5 h-5" />
                                                        <span className="text-sm">Yes</span>
                                                    </div>
                                                ) : (
                                                    <div className="inline-flex items-center gap-1 text-rose-400">
                                                        <X className="w-5 h-5" />
                                                        <span className="text-sm">No</span>
                                                    </div>
                                                )}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Best For Row */}
                                    <tr className="hover:bg-gray-700/20 transition-colors">
                                        <td className="py-5 px-6 text-sm font-medium text-white">Best For</td>
                                        {pricingData.map((tier) => (
                                            <td key={tier.name} className="py-5 px-6 text-sm text-gray-300 text-center">
                                                {tier.bestFor}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Price Row */}
                                    <tr className="bg-gray-800/50">
                                        <td className="py-6 px-6 text-sm font-bold text-white">Price</td>
                                        {pricingData.map((tier) => {
                                            const colors = getColorClasses(tier.color);
                                            return (
                                                <td key={tier.name} className="py-6 px-6 text-center">
                                                    <div className={`text - 2xl font - bold ${colors.text} `}>
                                                        {tier.price}
                                                    </div>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        All prices are one-time payments. Custom solutions available upon request.
                    </p>
                </div>
            </div>
        </section>
    );
}
