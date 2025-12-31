import SectionContainer from "../components/SectionContainer";
import GlassCard from "../components/GlassCard";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
    const educationData = [
        {
            year: "2022 - 2026",
            degree: "B. Tech Information Technology",
            institution: "Rajalakshmi Engineering College",
            details: "Pursuing undergraduate degree in Information Technology. Current CGPA: 8.0"
        },
        {
            year: "2021 - 2022",
            degree: "Higher Secondary School Education",
            institution: "Velammal Matriculation Higher Secondary School",
            details: "Focus on Computer Science and Mathematics. Percentage: 94%"
        }
    ];

    return (
        <SectionContainer id="education">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-display">
                Educational <span className="text-gradient-accent">Journey</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-8 relative px-4">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent -z-10" />

                {educationData.map((item, idx) => (
                    <GlassCard key={idx} className={`relative md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} border-l-4 !border-l-cyan-500 hover:!border-l-cyan-400`}>
                        {/* Dot on timeline */}
                        <div className={`absolute top-10 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] hidden md:block ${idx % 2 === 0 ? '-left-[calc(2rem+9px)]' : '-right-[calc(2rem+9px)]'}`} />

                        <div className="flex items-center gap-3 text-cyan-400 mb-2 text-sm font-medium tracking-wide">
                            <Calendar size={16} />
                            <span>{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1 font-display">{item.degree}</h3>
                        <h4 className="text-gray-400 mb-4 flex items-center gap-2 text-sm">
                            <GraduationCap size={16} />
                            {item.institution}
                        </h4>
                        <p className="text-gray-300 font-light leading-relaxed text-sm">
                            {item.details}
                        </p>
                    </GlassCard>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Education;
