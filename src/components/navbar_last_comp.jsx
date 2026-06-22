import { useState } from "react";

const categories = [
  "Shop All",
  "Computers",
  "Tablets",
  "Drones & Cameras",
  "Audio",
  "Mobile",
  "T.V & Home Cinema",
  "Wearable Tech",
  "Sale",
];

export default function CategoryNav() {
  const [active, setActive] = useState("Mobile");

  return (
    <div className="w-full bg-gray-100 px-6 py-3 flex items-center gap-7 text-sm overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`whitespace-nowrap font-medium ${
            active === cat
              ? "text-purple-500"
              : "text-gray-800 hover:text-gray-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
