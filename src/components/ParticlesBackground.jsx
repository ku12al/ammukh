// src/components/ParticlesBackground.jsx
import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const initialized = useRef(false);

  useEffect(() => {
    // Re-initialize only if not already running
    if (initialized.current) return;

    if (window.FinisherHeader) {
      initialized.current = true;

      new window.FinisherHeader({
        count: 100,
        size: { min: 2, max: 8, pulse: 0 },
        speed: { x: { min: 0, max: 0.4 }, y: { min: 0, max: 0.6 } },
        colors: {
          background: "#f9fafb",
          particles: ["#fbfcca", "#d7f3fe", "#ffd0a7"],
        },
        blending: "overlay",
        opacity: { center: 1, edge: 0 },
        skew: -2,
        shapes: ["c"],
      });
    }
  }, []);

  return (
    <div
      className="finisher-header"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};

export default ParticlesBackground;
