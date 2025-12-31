import SectionContainer from "../components/SectionContainer";
import GlassCard from "../components/GlassCard";
import profileImg from "../assets/kathiyan.png";

const About = () => {
    return (
        <SectionContainer id="about">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-display">
                About <span className="text-gradient-accent">Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <GlassCard className="p-2 rounded-[2rem] bg-white/5 border-white/10 hover:border-cyan-500/30 transition-colors duration-500 group">
                    <div className="aspect-square rounded-3xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img
                            src={profileImg}
                            alt="Kathiyan T"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                </GlassCard>

                <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white font-display">
                        Innovating & <span className="text-cyan-400">Learning</span> Every Day
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed font-light">
                        I am an Aspiring IT Professional passionate about learning new technologies and staying updated with industry trends.
                        I possess strong leadership skills with a calm, strategic approach to team coordination.
                        I am driven by innovation, constantly exploring new ideas to develop cutting-edge solutions.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                            <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Location</span>
                            <span className="block font-bold text-white font-display text-lg">Chennai, India</span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                            <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Email</span>
                            <span className="block font-bold text-white font-display text-lg break-words">kathiyan1472@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default About;
