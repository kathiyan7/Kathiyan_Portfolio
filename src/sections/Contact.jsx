import SectionContainer from "../components/SectionContainer";
import GlassCard from "../components/GlassCard";
import { Mail, Phone, MapPin, Linkedin, Github, Code, Terminal } from "lucide-react";

const Contact = () => {
    return (
        <SectionContainer id="contact">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-display">
                Get In <span className="text-gradient-accent">Touch</span>
            </h2>
            <div className="max-w-4xl mx-auto px-4">
                <GlassCard className="text-center p-12 !bg-white/5 border-white/10">
                    <h3 className="text-3xl font-bold text-white mb-6 font-display">Let's work together!</h3>
                    <p className="text-gray-400 mb-12 leading-relaxed text-lg font-light max-w-2xl mx-auto">
                        I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400">
                                <Phone size={24} />
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                                <p className="font-medium text-white font-display">+91 63696 72695</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400">
                                <Mail size={24} />
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email</p>
                                <a href="mailto:kathiyan1472@gmail.com" className="font-medium text-white hover:text-cyan-400 transition-colors font-display block break-all">kathiyan1472@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400">
                                <MapPin size={24} />
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Location</p>
                                <p className="font-medium text-white font-display">Chennai, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: Linkedin, href: "https://www.linkedin.com/in/kathiyan-t", color: "text-blue-400" },
                            { icon: Github, href: "https://github.com/kathiyan7", color: "text-white" },
                            { icon: Code, href: "https://leetcode.com/u/kathiyan/", color: "text-yellow-500" },
                            { icon: Terminal, href: "https://www.hackerrank.com/profile/kathiyan1472", color: "text-green-500" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-4 rounded-full bg-black/30 border border-white/10 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] ${social.color} transition-all transform hover:scale-110 duration-300`}
                            >
                                <social.icon size={28} />
                            </a>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </SectionContainer>
    );
};

export default Contact;
