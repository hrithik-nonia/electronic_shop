import { ChevronDown } from "lucide-react";
import ProductCard from "../components/product_card";

const PRODUCTS = [
  {
    id: 1,
    name: "Minimalist Leather Watch",
    subtitle: "Quartz, Japanese Movement",
    price: 120.0,
    badge: "New",
    badgeColor: "bg-orange-200 text-orange-900",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=80",
    bg: "bg-[#d9bfa0]",
    liked: true,
  },
  {
    id: 2,
    name: "Bluetooth Noise-Cancelling Headphones",
    subtitle: "Active NC, 30h battery",
    price: 249.99,
    badge: "New",
    badgeColor: "bg-teal-200 text-teal-900",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
    bg: "bg-[#1c1c1c]",
    liked: true,
  },
  {
    id: 3,
    name: "Bluetooth Noise-Cancelling Headphones",
    subtitle: "Active NC, 30h battery",
    price: 249.99,
    badge: "New",
    badgeColor: "bg-teal-200 text-teal-900",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
    bg: "bg-[#3a3a3a]",
    liked: true,
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug",
    subtitle: "Active NC, 30h battery",
    price: 25.5,
    badge: "New",
    badgeColor: "bg-orange-200 text-orange-900",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
    bg: "bg-[#cfc6bb]",
    liked: true,
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug",
    subtitle: "Active NC, 30h battery",
    price: 25.5,
    badge: "New",
    badgeColor: "bg-gray-300 text-gray-900",
    image:
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=400&q=80",
    bg: "bg-[#1c1c1c]",
    liked: true,
  },
  {
    id: 6,
    name: "Minimalist Leather Watch",
    subtitle: "Quartz, Japanese Movement",
    price: 120.0,
    badge: "New",
    badgeColor: "bg-orange-200 text-orange-900",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=80",
    bg: "bg-[#d9bfa0]",
    liked: true,
  },
  {
    id: 7,
    name: "Bluetooth Noise-Cancelling Headphones",
    subtitle: "Active NC, 30h battery",
    price: 249.99,
    badge: "New",
    badgeColor: "bg-teal-200 text-teal-900",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
    bg: "bg-[#c9c9c9]",
    liked: true,
  },
  {
    id: 8,
    name: "Ceramic Coffee Mug",
    subtitle: "Active NC, 30h battery",
    price: 25.5,
    badge: "New",
    badgeColor: "bg-orange-200 text-orange-900",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
    bg: "bg-[#cfc6bb]",
    liked: true,
  },
  {
    id: 9,
    name: "Ceramic Coffee Mug",
    subtitle: "Active NC, 30h battery",
    price: 25.5,
    badge: "New",
    badgeColor: "bg-green-300 text-green-900",
    image:
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=400&q=80",
    bg: "bg-[#1c1c1c]",
    liked: true,
  },
  {
    id: 10,
    name: "Ceramic Coffee Mug",
    subtitle: "Active NC, 30h battery",
    price: 25.5,
    badge: "New",
    badgeColor: "bg-gray-300 text-gray-900",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
    bg: "bg-[#cfc6bb]",
    liked: true,
  },
];

function Dropdown({ label }) {
  return (
    <button className="flex items-center gap-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50">
      {label}
      <ChevronDown className="w-4 h-4" />
    </button>
  );
}

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 px-6 py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">My Wishlist</h1>
        <p className="text-gray-500 mt-1">
          You have saved {PRODUCTS.length} items.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-900">All Products</h2>
        <div className="flex gap-3">
          <Dropdown label="All Products" />
          <Dropdown label="In Stock" />
          <Dropdown label="Price: Low to High" />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
