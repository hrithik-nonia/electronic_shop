import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    label: "Summer Sale",
    sub: "Up to 50% off on all electronics",
    color: "bg-blue-600",
  },
  {
    id: 2,
    label: "New Arrivals",
    sub: "Check out the latest iPhone 13 series",
    color: "bg-purple-600",
  },
  {
    id: 3,
    label: "Free Shipping",
    sub: "On all orders over $50",
    color: "bg-green-600",
  },
];

export default function AutoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-gray-100 h-72">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col items-center justify-center gap-2 ${slide.color} transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-white text-2xl font-bold">{slide.label}</span>
            <span className="text-white/80 text-sm">{slide.sub}</span>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-gray-900" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
