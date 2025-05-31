import React from "react";
import generateFloatingCircles from "./floatingCircles2";

const FloatingBackground = () => {
  const bubbles = generateFloatingCircles(400);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${bubble.bg} floating-bubble`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: bubble.top,
            bottom: bubble.bottom,
            left: bubble.left,
            right: bubble.right,
            opacity: bubble.opacity,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay * 0.2}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingBackground;
