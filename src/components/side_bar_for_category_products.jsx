import { useState } from "react";
export default function SideBarForCategoryProdeuc() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const categories = [
    "All Products",
    "Best Sellers",
    "Computers",
    "Drones & Cameras",
    "Headphones",
    "Home Page Best Sellers",
    "Home Page Sale",
    "Mobile",
    "Sale",
    "Speakers",
    "Tablets",
    "TV & Home Cinema",
    "Wearable Tech",
  ];
  return (
    <>
      <div className=" pb-5 border-b border-gray-400">
        <p className="text-gray-900 font-medium">Browse by</p>
      </div>
      <ul className="flex flex-col gap-3">
        {categories &&
          categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`text-left text-sm hover:text-purple-700 transition-colors ${
                  activeCategory === cat
                    ? "text-gray-900 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
