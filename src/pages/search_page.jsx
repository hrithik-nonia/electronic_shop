import { useState } from "react";
import { Search } from "lucide-react";

const TRENDING_PRODUCTS = [
  {
    id: 1,
    name: 'Ocean Pro 11 - 12.3" Touch Screen',
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80",
    price: 70,
    originalPrice: 85,
    onSale: true,
  },
  {
    id: 2,
    name: 'JP - Space Tablet 10.4" Wi-Fi 32GB',
    image:
      "https://images.unsplash.com/photo-1585789575171-79d8a6bdf1ea?w=400&q=80",
    price: 70,
    originalPrice: 85,
    onSale: true,
  },
  {
    id: 3,
    name: 'Shel 50" Class LED 4K UHD Smart TV',
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    price: 85,
    originalPrice: null,
    onSale: false,
  },
  {
    id: 4,
    name: 'Sheer 10.2" Tablet With Wi-Fi , 32GB',
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80",
    price: 85,
    originalPrice: null,
    onSale: false,
  },
];

function ProductCard({ product }) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        {product.onSale && (
          <span className="absolute top-0 left-0 bg-purple-600 text-white text-xs font-semibold tracking-wide px-3 py-1.5 z-10">
            SALE
          </span>
        )}
        <div className="h-72 flex items-center justify-center bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      <h3 className="text-gray-900 mt-4">{product.name}</h3>

      <div className="mt-1 flex items-center gap-2">
        {product.originalPrice && (
          <span className="text-gray-400 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
        <span className="text-purple-700">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Search bar row */}
      <div className="flex items-center gap-6 px-8 pt-8 pb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            autoFocus
            className="w-full border border-gray-300 rounded-md pl-11 pr-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
          />
        </div>
        <button
          onClick={onClose}
          className="text-gray-900 hover:text-gray-600 whitespace-nowrap"
        >
          Close
        </button>
      </div>

      {/* Trending products */}
      <div className="px-8 pb-12">
        <h2 className="font-bold text-gray-900 mb-6">Trending products</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRENDING_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
