import SectionContainer from "../components/SectionContainer";
import { Award } from "lucide-react";

const Certificates = () => {
    return (
        <SectionContainer id="certificates">
            <h2 className="text-4xl font-bold mb-12 text-center text-white"><span className="border-b-4 border-blue-500 pb-2">Certifications</span></h2>
            <div className="flex justify-center">
                <div className="glass-card p-8 rounded-xl text-center max-w-md w-full border border-blue-500/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all">
                    <div className="w-20 h-20 bg-blue-500/20 rounded-full mx-auto mb-6 flex items-center justify-center text-blue-400">
                        <Award size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Problem Solving (Intermediate)</h3>
                    <p className="text-md text-gray-400 font-medium">HackerRank</p>
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <span className="text-xs text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/20">Verified Credential</span>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Certificates;
