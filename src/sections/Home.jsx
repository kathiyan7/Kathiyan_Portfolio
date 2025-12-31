import SectionContainer from "../components/SectionContainer";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Download, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import GlowButton from "../components/GlowButton";
import resumePdf from "../assets/Kathiyan Resume.pdf";

const Home = () => {
    return (
        <SectionContainer id="home" className="pt-20 md:pt-32 min-h-screen flex flex-col justify-center">
            <div className="text-center max-w-5xl mx-auto px-4 relative">

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-md"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                    </span>
                    Open for Work & Collaboration
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 font-display tracking-tight leading-tight">
                        Hello, I'm <br />
                        <span className="text-gradient-accent relative inline-block">
                            Kathiyan T
                            {/* Decorative Sparkle */}
                            <Sparkles className="absolute -top-8 -right-8 text-yellow-400/80 animate-pulse hidden md:block" size={40} />
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    Tech Enthusiast | Aspiring IT Professional | Software Developer
                </motion.p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 items-center mb-16">
                    <GlowButton
                        href={resumePdf}
                        icon={Download}
                    >
                        Download CV
                    </GlowButton>

                    <Link to="contact" smooth={true} duration={500}>
                        <button className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-display font-medium transition-all hover:scale-105 hover:border-cyan-400/50 flex items-center gap-2 group">
                            Contact Me
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-cyan-400" />
                        </button>
                    </Link>
                </div>

                {/* Tech Stack Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-8 border-t border-white/5 max-w-4xl mx-auto"
                >
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Powering my projects with</p>
                    <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {['React', 'Tailwind', 'Three.js'].map((tech) => (
                            <span key={tech} className="text-lg font-display text-gray-300 font-semibold">{tech}</span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 animate-bounce"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown size={20} />
            </motion.div>
        </SectionContainer>
    );
};

export default Home;
