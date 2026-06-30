import { useState } from "react";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "Shop All", path: "/all-products" },
  { name: "Computers", path: "/computer-products" },
  { name: "Tablets", path: "/tablets" },
  { name: "Drones & Cameras", path: "/drones-cameras" },
  { name: "Audio", path: "/audio" },
  { name: "Mobile", path: "/mobile" },
  { name: "T.V & Home Cinema", path: "/tv-home-cinema" },
  { name: "Wearable Tech", path: "/wearable-tech" },
  { name: "Sale", path: "/sale" },
];

export default function CategoryNav() {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full bg-gray-100 px-6 py-3 flex items-center gap-7 text-sm overflow-x-auto font-sans">
      {categories.map(({ name, path }) => (
        <NavLink
          to={path}
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
