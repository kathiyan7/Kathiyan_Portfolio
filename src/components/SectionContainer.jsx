import { motion } from "framer-motion";

const SectionContainer = ({ id, children, className = "" }) => {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center relative ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-6 py-12"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionContainer;
