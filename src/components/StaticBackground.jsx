/**
 * Static CSS-only background fallback for low-end devices
 * Replaces Aurora WebGL shader with a performant CSS gradient
 */
const StaticBackground = () => {
    return (
        <div
            className="aurora-static-fallback"
            style={{
                position: 'absolute',
                inset: 0,
                background: `
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(31, 151, 166, 0.3), transparent),
          radial-gradient(ellipse 60% 40% at 70% 100%, rgba(18, 123, 153, 0.2), transparent),
          radial-gradient(ellipse 50% 30% at 30% 80%, rgba(87, 120, 112, 0.15), transparent),
          linear-gradient(180deg, rgba(24, 24, 27, 0.9) 0%, rgba(24, 24, 27, 1) 100%)
        `,
                zIndex: -1,
            }}
        />
    );
};

export default StaticBackground;
