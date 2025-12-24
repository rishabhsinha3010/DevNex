import { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-gradient-to-r from-cyan to-blue-500 text-navy font-bold hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] border border-transparent',
            secondary: 'bg-navy-light text-white border border-white/10 hover:bg-white/5 hover:border-cyan/50',
            outline: 'border-2 border-cyan/50 text-cyan hover:bg-cyan/10 hover:border-cyan',
            ghost: 'text-gray-300 hover:text-cyan hover:bg-white/5',
            glow: 'bg-navy text-cyan border border-cyan shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:bg-cyan/5'
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
        };

        return (
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                ref={ref}
                className={cn(
                    'relative inline-flex items-center justify-center rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan disabled:pointer-events-none disabled:opacity-50 tracking-wide overflow-hidden',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center">{props.children as React.ReactNode}</span>
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
