import SectionContainer from "../components/SectionContainer";
import GlassCard from "../components/GlassCard";
import {
    Code2, Coffee, FileCode, Palette, FileJson, Zap,
    Atom, Server, Database, GitBranch, Smartphone, PenTool,
    Terminal, Command, Cpu, Globe, Layers, Box
} from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Language",
            icon: Code2,
            skills: [
                { name: "C++", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { name: "Java", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
                { name: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
                { name: "Dart", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" }
            ]
        },
        {
            title: "Frameworks & Tech",
            icon: Layers,
            skills: [
                { name: "HTML", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
                { name: "CSS", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
                { name: "React.js", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
                { name: "Tailwind CSS", color: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/20" }
            ]
        },
        {
            title: "Backend & Database",
            icon: Server,
            skills: [
                { name: "MongoDB", color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
                { name: "MySQL", color: "text-blue-600", bg: "bg-blue-600/10", border: "border-blue-600/20" },
                { name: "Node.js", color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
                { name: "Express.js", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: Box,
            skills: [
                { name: "Git/GitHub", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
                { name: "Figma", color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
                { name: "Linux", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
                { name: "MacOS", color: "text-gray-300", bg: "bg-gray-100/10", border: "border-gray-500/20" }
            ]
        }
    ];

    return (
        <SectionContainer id="skills">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-white font-display">
                Technical <span className="text-gradient-accent">Arsenal</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {skillCategories.map((category, idx) => (
                    <GlassCard key={idx} className="h-full flex flex-col hover:border-cyan-500/30 transition-colors p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                                <category.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white font-display tracking-wide">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className={`
                                        pl-3 pr-4 py-2 rounded-full border ${skill.border} ${skill.bg} 
                                        hover:bg-opacity-20 hover:border-opacity-40 transition-all duration-300 
                                        cursor-default group flex items-center gap-2
                                    `}
                                >
                                    <div className={`w-2 h-2 rounded-full ${skill.color.replace('text-', 'bg-')} shadow-[0_0_8px_currentColor]`} />
                                    <span className={`text-sm font-medium ${skill.color} font-display tracking-wide`}>
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Skills;
