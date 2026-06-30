import { useState } from "react";
import { Heart, ChevronDown } from "lucide-react";

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

function ProductCard({ product }) {
  const [liked, setLiked] = useState(product.liked);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <div
        className={`relative h-44 ${product.bg} flex items-center justify-center`}
      >
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-md ${product.badgeColor}`}
        >
          {product.badge}
        </span>
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center"
        >
          <Heart
            className={`w-4 h-4 ${
              liked ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="max-h-28 max-w-[70%] object-contain"
        />
      </div>

      <div className="p-4 flex flex-col gap-1 flex-1">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500">{product.subtitle}</p>
        <p className="text-sm font-bold text-gray-900 mt-1">
          ${product.price.toFixed(2)}
        </p>

        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full py-2 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
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
