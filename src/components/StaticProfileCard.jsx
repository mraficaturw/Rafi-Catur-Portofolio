/**
 * Static profile card fallback for low-end devices
 * Replaces 3D Lanyard with a simple animated card
 */
const StaticProfileCard = () => {
    return (
        <div className="flex justify-center items-center p-2 sm:p-4 w-full">
            <div className="relative group w-full max-w-[280px] sm:max-w-xs">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

                {/* Card container */}
                <div className="relative bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 rounded-2xl p-5 sm:p-6 border border-zinc-700/50 shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
                    {/* ID Card style header - improved layout */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-700/50">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
                            <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-medium">Dev Card</span>
                        </div>
                        {/* Decorative icon - moved here for better layout */}
                        <div className="w-7 h-7 sm:w-8 sm:h-8 border border-zinc-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Profile image */}
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-sm opacity-50" />
                            <img
                                src="./assets/profile.png"
                                alt="Profile"
                                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-zinc-700"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="text-center">
                        <h3 className="text-base sm:text-lg font-bold text-white mb-1">M. Rafi Catur W.</h3>
                        <p className="text-xs sm:text-sm text-teal-400 mb-2">Web Developer</p>
                        <p className="text-[10px] sm:text-xs text-zinc-500">@mraficw</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticProfileCard;
