import SectionContainer from "../components/SectionContainer";
import GlassCard from "../components/GlassCard";
import { Trophy, Users, Star, Award, Sparkles, Crown } from "lucide-react";

export const Awards = () => {
    const awards = [
        {
            title: "Sri Sankarathanu Pillai Merit Award",
            desc: "Awarded for outstanding contributions to societal causes during the academic year 2024-2025.",
            icon: Crown,
            color: "text-amber-400",
            bg: "bg-amber-400/10",
            border: "group-hover:border-amber-400/50",
            shadow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
        },
        {
            title: "Second Place in INNOVISION 2K24",
            desc: "A National Level Event held in Rajalakshmi Engineering College by Department of Information Technology.",
            icon: Trophy,
            color: "text-gray-300",
            bg: "bg-gray-400/10",
            border: "group-hover:border-gray-400/50",
            shadow: "group-hover:shadow-[0_0_30px_rgba(156,163,175,0.3)]"
        },
        {
            title: "3rd Place in Code Mania",
            desc: "Coding competition at Trojans IT Symposium, Chennai Institute of Technology (CIT).",
            icon: Award,
            color: "text-orange-400",
            bg: "bg-orange-400/10",
            border: "group-hover:border-orange-400/50",
            shadow: "group-hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]"
        }
    ];

    return (
        <SectionContainer id="awards">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-display">
                Honors & <span className="text-gradient-accent">Awards</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {awards.map((item, idx) => (
                    <GlassCard key={idx} className={`flex flex-col gap-6 border-white/5 transition-all duration-500 group relative overflow-hidden ${item.border} ${item.shadow}`}>
                        <div className="absolute top-0 right-0 p-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-100 opacity-50 transition-opacity" />

                        <div className={`${item.bg} p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500`}>
                            <item.icon className={item.color} size={32} />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-3 font-display leading-tight">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionContainer>
    );
};

export const ExtraCurricular = () => {
    return (
        <SectionContainer id="extra-curricular">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-display">
                Beyond The <span className="text-gradient-accent">Code</span>
            </h2>
            <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto px-4 h-full">

                {/* Event Organization - Spans 3 columns */}
                <GlassCard className="md:col-span-3 border-white/5 hover:border-cyan-500/30 group relative overflow-hidden min-h-[300px] flex flex-col justify-end p-8">
                    <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <Sparkles size={200} strokeWidth={0.5} />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl">
                                <Star className="text-cyan-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white font-display">Event Organization</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-light text-lg">
                            Orchestrated major campus events including <span className="text-white font-medium">Recharge '24/25</span>, <span className="text-white font-medium">Design Summit</span>, and <span className="text-white font-medium">INNOVISION</span>. Managed logistics, team coordination, and execution for 500+ participants.
                        </p>
                    </div>
                </GlassCard>

                {/* Leadership - Spans 2 columns */}
                <GlassCard className="md:col-span-2 border-white/5 hover:border-purple-500/30 group relative overflow-hidden min-h-[300px] flex flex-col justify-end p-8">
                    <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <Users size={180} strokeWidth={0.5} />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-purple-500/10 rounded-xl">
                                <Users className="text-purple-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white font-display">Leadership</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-light text-lg">
                            Class Representative (4 Years). Bridging the gap between faculty and students, ensuring smooth academic operations and peer support.
                        </p>
                    </div>
                </GlassCard>
            </div>
        </SectionContainer>
    );
};
