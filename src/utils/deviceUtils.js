/**
 * Device capability detection utilities for performance optimization
 */

/**
 * Detects if the device is low-end based on hardware capabilities
 * @returns {boolean} true if device is considered low-end
 */
export const isLowEndDevice = () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return true;

    // Hardware concurrency (CPU cores)
    const cores = navigator.hardwareConcurrency || 2;

    // Device memory (in GB, only available in some browsers)
    const memory = navigator.deviceMemory || 4;

    // Mobile device detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Touch device with small screen (likely mobile)
    const isSmallTouchDevice = 'ontouchstart' in window && window.innerWidth < 768;

    // Consider low-end if:
    // - Less than 4 cores AND less than 4GB memory
    // - OR mobile device with less than 4 cores
    // - OR small touch device
    return (cores <= 2 && memory <= 2) ||
        (isMobile && cores <= 4) ||
        isSmallTouchDevice;
};

/**
 * Checks if WebGL is supported and functional
 * @returns {boolean} true if WebGL is available
 */
export const hasWebGLSupport = () => {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
    } catch (e) {
        return false;
    }
};

/**
 * Gets performance tier for the device
 * @returns {'high' | 'medium' | 'low'} performance tier
 */
export const getPerformanceTier = () => {
    const cores = navigator.hardwareConcurrency || 2;
    const memory = navigator.deviceMemory || 4;

    if (cores >= 8 && memory >= 8) return 'high';
    if (cores >= 4 && memory >= 4) return 'medium';
    return 'low';
};

/**
 * Checks if device supports IntersectionObserver
 * @returns {boolean}
 */
export const hasIntersectionObserver = () => 'IntersectionObserver' in window;
