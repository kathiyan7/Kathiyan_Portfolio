import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", hoverEffect = true }) => {
    return (
        <motion.div
            className={`glass-card p-8 relative overflow-hidden group ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={hoverEffect ? {
                y: -5,
                rotateX: 2,
                rotateY: 2,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)"
            } : {}}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {children}
        </motion.div>
    );
};

export default GlassCard;
