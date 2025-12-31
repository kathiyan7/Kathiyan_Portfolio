import SectionContainer from "../components/SectionContainer";
import GlassCard from "../components/GlassCard";
import { Briefcase, Building2 } from "lucide-react";

const Experience = () => {
    return (
        <SectionContainer id="experience">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-display">
                Professional <span className="text-gradient-accent">Experience</span>
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto px-4">
                <GlassCard className="border-l-4 !border-l-cyan-500 hover:!border-l-cyan-400">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="bg-cyan-500/10 p-4 rounded-2xl flex items-center justify-center w-fit h-fit border border-cyan-500/20">
                            <Briefcase className="text-cyan-400" size={32} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                                <div>
                                    <h3 className="text-2xl font-bold text-white font-display mb-1">Web Development Intern</h3>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                                        <Building2 size={16} />
                                        <span>Company Name (if applicable)</span>
                                    </div>
                                </div>
                                <span className="text-xs font-bold bg-cyan-500/10 text-cyan-300 px-3 py-1.5 rounded-full border border-cyan-500/20 uppercase tracking-wide">1 Month</span>
                            </div>

                            <p className="text-cyan-400 font-medium mb-4 text-sm tracking-wide bg-cyan-900/20 w-fit px-3 py-1 rounded">Online Internship</p>

                            <ul className="space-y-3">
                                {["Completed a 1-month online Web Development internship.", "Awarded with a Certificate and Letter of Recommendation."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed font-light">
                                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2.5 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </SectionContainer>
    );
};

export default Experience;
