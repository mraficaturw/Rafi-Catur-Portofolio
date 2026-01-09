/**
 * Static profile card fallback for low-end devices
 * Replaces 3D Lanyard with a simple animated card
 */
const StaticProfileCard = () => {
    return (
        <div className="flex justify-center items-center p-4">
            <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

                {/* Card container */}
                <div className="relative bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700/50 shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
                    {/* ID Card style header */}
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-700/50">
                        <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                        <span className="text-xs text-zinc-400 uppercase tracking-wider">Developer ID</span>
                    </div>

                    {/* Profile image */}
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-sm opacity-50" />
                            <img
                                src="./assets/profile.png"
                                alt="Profile"
                                className="relative w-24 h-24 rounded-full object-cover border-2 border-zinc-700"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-white mb-1">M. Rafi Catur W.</h3>
                        <p className="text-sm text-teal-400 mb-2">Web Developer</p>
                        <p className="text-xs text-zinc-500">@mraficw</p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-3 right-3 w-8 h-8 border border-zinc-700/50 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticProfileCard;
