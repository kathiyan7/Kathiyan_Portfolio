import React from 'react';
import { motion } from 'framer-motion';

const GlowButton = ({ children, onClick, href, className = "", icon: Icon }) => {
    const BaseButton = motion[href ? 'a' : 'button'];

    return (
        <BaseButton
            href={href}
            onClick={onClick}
            className={`relative px-8 py-3 rounded-full bg-cyan-500 text-black font-bold font-display
                 overflow-hidden group flex items-center justify-center gap-2
                 hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.5)] 
                 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {Icon && <Icon size={20} className="group-hover:translate-x-1 transition-transform" />}
            </span>

            {/* Shimmer Effect */}
            <motion.div
                className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                animate={{ left: "200%" }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    repeatDelay: 3
                }}
            />
        </BaseButton>
    );
};

export default GlowButton;
