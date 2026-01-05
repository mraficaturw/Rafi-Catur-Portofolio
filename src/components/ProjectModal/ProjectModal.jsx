import { useState, useEffect } from "react";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Delay for enter animation
      setTimeout(() => setIsVisible(true), 10);
    } else {
      document.body.style.overflow = "unset";
      setIsVisible(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen && !isClosing) return null;
  if (!project) return null;

  // Get theme color from project
  const themeColor = project.borderColor || "#8B5CF6";

  return (
    <>
      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes modalSlideOut {
          from {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
        }
        
        @keyframes backdropFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes backdropFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px var(--glow-color), 0 0 40px var(--glow-color-dim); }
          50% { box-shadow: 0 0 30px var(--glow-color), 0 0 60px var(--glow-color-dim); }
        }
        
        .modal-backdrop {
          animation: backdropFadeIn 0.3s ease-out forwards;
        }
        
        .modal-backdrop.closing {
          animation: backdropFadeOut 0.3s ease-out forwards;
        }
        
        .modal-content {
          animation: modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .modal-content.closing {
          animation: modalSlideOut 0.3s ease-out forwards;
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .project-image-container {
          position: relative;
          overflow: hidden;
        }
        
        .project-image-container::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(24, 24, 27, 1) 0%, transparent 100%);
          pointer-events: none;
        }
        
        .glow-border {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        /* Modern Custom Scrollbar */
        .modal-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--scrollbar-thumb) transparent;
        }
        
        .modal-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .modal-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }
        
        .modal-scrollbar::-webkit-scrollbar-thumb {
          background: var(--scrollbar-thumb);
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        
        .modal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--scrollbar-thumb-hover);
        }
        
        .modal-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop ${isClosing ? 'closing' : ''}`}
        onClick={handleBackdropClick}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)"
        }}
      >
        <div
          className={`relative bg-zinc-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden modal-content glow-border ${isClosing ? 'closing' : ''}`}
          style={{
            border: `2px solid ${themeColor}`,
            '--glow-color': `${themeColor}66`,
            '--glow-color-dim': `${themeColor}33`,
          }}
        >
          {/* Gradient overlay at top */}
          <div
            className="absolute top-0 left-0 right-0 h-1 z-20"
            style={{ background: project.gradient || `linear-gradient(90deg, ${themeColor}, #000)` }}
          />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-30 text-zinc-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:rotate-90 hover:cursor-pointer"
            style={{
              backgroundColor: `${themeColor}20`,
              border: `1px solid ${themeColor}40`
            }}
          >
            <FiX size={20} />
          </button>

          {/* Project Image */}
          <div className="project-image-container w-full h-48 sm:h-64">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 shimmer-effect pointer-events-none" />
          </div>

          {/* Content */}
          <div
            className="relative z-10 p-6 -mt-10 overflow-y-auto max-h-[calc(90vh-16rem)] modal-scrollbar"
            style={{
              '--scrollbar-thumb': `${themeColor}60`,
              '--scrollbar-thumb-hover': themeColor
            }}
          >
            {/* Title with gradient underline */}
            <div className="mb-4">
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                style={{ textShadow: `0 0 30px ${themeColor}40` }}
              >
                {project.title}
              </h2>
              <div
                className="h-1 w-20 rounded-full"
                style={{ background: project.gradient || themeColor }}
              />
            </div>

            {/* Subtitle */}
            <p
              className="text-sm font-medium mb-4"
              style={{ color: themeColor }}
            >
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-zinc-300 text-base leading-relaxed mb-6">
              {project.fullDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 font-semibold p-3 px-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: project.gradient || themeColor,
                  boxShadow: `0 4px 20px ${themeColor}40`
                }}
              >
                <FiGithub size={18} />
                <span>View Source Code</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 font-semibold p-3 px-5 rounded-xl border transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    borderColor: themeColor,
                    color: themeColor
                  }}
                >
                  <FiExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Bottom gradient accent */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: project.gradient || `linear-gradient(90deg, ${themeColor}, #000)` }}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
