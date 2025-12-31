import SectionContainer from "../components/SectionContainer";
import GlassCard from "../components/GlassCard";
import { FolderGit2, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Quiz Web Application",
            tech: ["HTML", "CSS", "JS", "Node.js", "MongoDB"],
            description: "Christmas-Themed Quiz Web App where users enter details, take a quiz with randomized questions, and submit responses to MongoDB. Features snowfall effects, festive decorations, and secure server-side validation preventing duplicate attempts."
        },
        {
            title: "Customer Care Chatbot",
            tech: ["React", "react-simple-chatbot"],
            description: "Interactive Chatbot to streamline user interactions for complaints, feedback, and polls. Features multi-level support, custom messaging, real-time issue escalation, and form submission handling."
        },
        {
            title: "Via Band",
            tech: ["ESP32", "IoT", "Web/Mobile App"],
            description: "Wearable health monitoring system using ESP32 and sensors (MPU6050, MAX30102, GPS). Includes a web/mobile app for real-time data visualization, alerts, hospital locator, and emergency notifications."
        }
    ];

    return (
        <SectionContainer id="projects">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-display">
                Featured <span className="text-gradient-accent">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <GlassCard key={index} className="h-full flex flex-col p-0 overflow-hidden group border-white/5 hover:border-cyan-500/30">
                        <div className="h-48 bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center relative overflow-hidden group-hover:from-cyan-900/20 group-hover:to-blue-900/20 transition-all duration-500">
                            {/* Abstract Pattern */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <Code2 size={64} className="text-gray-700 group-hover:text-cyan-400/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12" />

                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 bg-black/40 backdrop-blur-sm">
                                <button className="p-3 rounded-full bg-white/10 hover:bg-cyan-500 text-white transition-all hover:scale-110" title="View Code">
                                    <FolderGit2 size={24} />
                                </button>
                                <button className="p-3 rounded-full bg-white/10 hover:bg-cyan-500 text-white transition-all hover:scale-110" title="View Demo">
                                    <ExternalLink size={24} />
                                </button>
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold mb-4 text-white font-display group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed font-light">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-cyan-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Projects;
