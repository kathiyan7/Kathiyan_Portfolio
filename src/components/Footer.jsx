
const Footer = () => {
    return (
        <footer className="bg-black/80 backdrop-blur-md py-8 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 font-display">&copy; {new Date().getFullYear()} Kathiyan. All rights reserved.</p>
                {/* <div className="flex justify-center space-x-6 mt-4">
                    <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
                    <span className="hover:text-white cursor-pointer transition-colors">GitHub</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Email</span>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
