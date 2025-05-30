const generateFloatingCircles = (count = 40) => {
  const colors = [
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  return Array.from({ length: count }).map((_, i) => ({
    size: Math.floor(Math.random() * 12) + 18, // size between 18–30
    top: Math.random() > 0.5 ? `${Math.floor(Math.random() * 90)}%` : undefined,
    bottom: Math.random() > 0.5 ? `${Math.floor(Math.random() * 90)}%` : undefined,
    left: Math.random() > 0.5 ? `${Math.floor(Math.random() * 90)}%` : undefined,
    right: Math.random() > 0.5 ? `${Math.floor(Math.random() * 90)}%` : undefined,
    bg: colors[Math.floor(Math.random() * colors.length)],
    opacity: 0.15 + Math.random() * 0.15,
    duration: 3 + Math.random() * 2,
    delay: i,
  }));
};

export default generateFloatingCircles;
