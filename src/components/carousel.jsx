import { useState, useEffect } from "react";
import ban1 from "../assets/banner_img/ban-1.avif";
import ban2 from "../assets/banner_img/ban-2.avif";
import ban3 from "../assets/banner_img/ban-3.avif";

const slides = [ban1, ban2, ban3];

export default function AutoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-gray-100 ">
        {/* Image */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={slides[index]}
            alt={`Slide ${index + 1}`}
            className=" w-full lg:h-full min-h-[400px] object-cover transition-all duration-500"
          />
        </div>

        {/* text on the carousal */}
        <div className=" absolute inset-0 lg:w-1/3 w-[80%] top-[15%] md:left-[15%] pl-5">
          {/* Badge */}
          <span className="inline-block self-start bg-red-600 text-white text-xs lg:text-sm font-medium px-3 py-1.5 rounded-sm md:mb-6 mb-3">
            Best Prices
          </span>

          {/* Heading */}
          <h1 className="text-3xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight">
            Incredible Prices on All Your Favorite Items
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-sm lg:text-base text-stone-700">
            Get more for less on selected brands
          </p>

          {/* CTA */}
          <button className="mt-6 self-start bg-violet-600 border border-violet-600 hover:bg-transparent hover:text-violet-600 transition-colors duration-300 text-white font-medium md:px-7 md:py-3 py-1.5 px-3 rounded-full">
            Shop Now
          </button>
        </div>
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
