import { useState } from "react";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "Shop All", path: "/filter-by-category/All Products" },
  { name: "Computers", path: "/filter-by-category/Computers" },
  { name: "Tablets", path: "/filter-by-category/Tablets" },
  { name: "Drones & Cameras", path: "/filter-by-category/Drones & Cameras" },
  { name: "Audio", path: "/filter-by-category/Audio" },
  { name: "Mobile", path: "/filter-by-category/Mobile" },
  { name: "T.V & Home Cinema", path: "/filter-by-category/Tv Home Cinema" },
  { name: "Wearable Tech", path: "/filter-by-category/Wearable Tech" },
  { name: "Sale", path: "/filter-by-category/Sale" },
];

export default function CategoryNav() {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full bg-gray-100 px-6 py-3 flex items-center gap-7 text-sm overflow-x-auto font-sans">
      {categories.map(({ name, path }) => (
        <NavLink
          to={path}
          state={{ category: name }}
          key={name}
          onClick={() => setActive(name)}
          className={`whitespace-nowrap font-normal ${
            active === name
              ? "text-purple-500"
              : "text-gray-800 hover:text-gray-600"
          }`}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
}
