import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    // Grouping less critical links could be done for mobile, but keeping flat for now
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold cursor-pointer text-white tracking-wider font-display"
                >
                    PORTFOLIO<span className="text-cyan-400">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            spy={true}
                            offset={-80}
                            activeClass="text-cyan-400 font-semibold"
                            className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm uppercase tracking-wide font-display hover:text-shadow-glow"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white bg-transparent border-0 p-0 focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-nav border-t border-white/5 py-6">
                    <div className="flex flex-col items-center space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                offset={-80}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 text-lg hover:text-white cursor-pointer font-display"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
