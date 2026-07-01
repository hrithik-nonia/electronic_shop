import { ChevronDown } from "lucide-react";
import SideBarForCategoryProdeuc from "../components/side_bar_for_category_products";
import { useParams } from "react-router-dom";
import ProductCard from "../components/product_card";

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "/images/headphones.png",
    bg: "bg-gray-100",
    onSale: true,
    hasDot: false,
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 199.99,
    originalPrice: null,
    image: "/images/smartwatch.png",
    bg: "bg-gray-100",
    onSale: false,
    hasDot: false,
  },
  {
    id: 3,
    name: "Portable Power Bank 20000mAh",
    price: 29.99,
    originalPrice: 39.99,
    image: "/images/powerbank.png",
    bg: "bg-gray-100",
    onSale: true,
    hasDot: false,
  },
  {
    id: 4,
    name: "USB-C Charging Cable",
    price: 14.99,
    originalPrice: null,
    image: "/images/cable.png",
    bg: "bg-gray-100",
    onSale: false,
    hasDot: false,
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 24.99,
    originalPrice: 34.99,
    image: "/images/chargingpad.png",
    bg: "bg-gray-100",
    onSale: true,
    hasDot: false,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 49.99,
    originalPrice: null,
    image: "/images/speaker.png",
    bg: "bg-gray-100",
    onSale: false,
    hasDot: false,
  },
  {
    id: 7,
    name: "Phone Case with Built-in Stand",
    price: 12.99,
    originalPrice: 16.99,
    image: "/images/phonecase.png",
    bg: "bg-gray-100",
    onSale: true,
    hasDot: false,
  },
  {
    id: 8,
    name: "Screen Protector (Tempered Glass)",
    price: 8.99,
    originalPrice: 12.99,
    image: "/images/screenprotector.png",
    bg: "bg-gray-100",
    onSale: true,
    hasDot: false,
  },
];

export default function ShowProductsByCategory() {
  const { category } = useParams();
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Page header */}
      <div className="px-8 pt-10 pb-15 ">
        <h1 className="text-5xl font-bold text-gray-900">
          {category ? category : "All Products"}
        </h1>
      </div>

      {/* Content */}

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 bg-gray-200 px-8 py-8 border-r border-gray-400">
          <SideBarForCategoryProdeuc />
        </aside>

        {/* Product grid */}
        <main className="flex-1 px-8 py-8">
          <div className="flex justify-between pb-5 ">
            <p className="text-sm text-purple-700">
              {products.length * 16} products
            </p>
            <button className="flex items-center gap-1 text-sm text-gray-700">
              Sort by: Recommended
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
