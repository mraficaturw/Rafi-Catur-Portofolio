import { useRef } from "react";
import "./ChromaGrid.css";

// Terima `onItemClick` di props
export const ChromaGrid = ({
    items,
    onItemClick,
    className = "",
    children,
}) => {
    const rootRef = useRef(null);

    // Gunakan `items` yang di-pass dari App.jsx, bukan data demo
    const data = items?.length ? items : [];

    const handleCardMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={rootRef}
            className={`chroma-grid ${className}`}
        >
            {/* Header Content placed inside grid */}
            {children && (
                <div style={{ gridColumn: "1 / -1", zIndex: 5, position: "relative", marginBottom: "2rem" }}>
                    {children}
                </div>
            )}

            {data.map((c, i) => (
                <article
                    key={i}
                    className="chroma-card"
                    onMouseMove={handleCardMove}
                    onClick={() => onItemClick(c)}
                    style={{
                        "--card-border": c.borderColor || "transparent",
                        "--card-gradient": c.gradient,
                        cursor: "pointer",
                    }}
                >
                    <div className="chroma-img-wrapper">
                        <img src={c.image} alt={c.title} loading="lazy" />
                    </div>
                    <footer className="chroma-info">
                        <h3 className="name">{c.title}</h3>
                        {c.handle && <span className="handle">{c.handle}</span>}
                        <p className="role">{c.subtitle}</p>
                        {c.location && <span className="location">{c.location}</span>}
                    </footer>
                </article>
            ))}
        </div>
    );
};

export default ChromaGrid;
