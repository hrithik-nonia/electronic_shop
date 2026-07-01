import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { useParams } from "react-router-dom";

const accordionData = [
  {
    title: "Product Info",
    content:
      "10.4-inch display, 32GB storage, Wi-Fi only. Lightweight aluminum body built for everyday browsing, reading, and streaming.",
  },
  {
    title: "Return & Refund Policy",
    content:
      "Returns accepted within 30 days of delivery. Item must be unused and in original packaging. Refunds processed within 5-7 business days.",
  },
  {
    title: "Shipping Info",
    content:
      "Free standard shipping on orders over $50. Estimated delivery in 3-5 business days. Express shipping available at checkout.",
  },
];

function AccordionItem({ title, content, isOpen, onToggle }) {
  // id taken here
  const { id } = useParams();
  console.log(id);

  return (
    <div className="border-t border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-gray-900">{title}</span>
        <span className="text-xl font-light text-gray-700 leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 text-sm text-gray-500 leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);
  const [wishlisted, setWishlisted] = useState(false);

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  return (
    <div className="min-h-screen bg-[#e9e9e9] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-[#e9e9e9] grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-white flex items-center justify-center p-10">
          <svg
            viewBox="0 0 300 420"
            className="max-h-[520px] w-auto"
            aria-label="JP - Space Tablet 10.4 inch back view"
          >
            <defs>
              <linearGradient
                id="tabletBody"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f3f3f3" />
                <stop offset="55%" stopColor="#d9d9d9" />
                <stop offset="100%" stopColor="#c9c9c9" />
              </linearGradient>
            </defs>
            <rect
              x="20"
              y="10"
              width="260"
              height="400"
              rx="28"
              fill="url(#tabletBody)"
              stroke="#bbb"
              strokeWidth="1"
            />
            {/* camera */}
            <circle cx="70" cy="55" r="9" fill="#2a2a2a" />
            <circle cx="70" cy="55" r="4" fill="#111" />
            {/* volume buttons */}
            <rect x="16" y="90" width="4" height="30" rx="2" fill="#a9a9a9" />
            <rect x="16" y="130" width="4" height="30" rx="2" fill="#a9a9a9" />
            {/* speaker grille */}
            <g fill="#b7b7b7">
              {Array.from({ length: 14 }).map((_, i) => (
                <circle key={i} cx={60 + i * 13} cy={395} r="2" />
              ))}
            </g>
          </svg>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center py-4">
          <p className="text-xs tracking-wide text-gray-500 mb-2">SKU: 0063</p>

          <h1 className="text-3xl font-semibold text-gray-900 leading-tight mb-4">
            JP - Space Tablet 10.4" Wi-Fi 32GB
          </h1>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-gray-400 line-through text-lg">$85.00</span>
            <span className="text-violet-600 text-xl font-medium">$70.00</span>
          </div>

          <label className="text-sm text-gray-800 mb-2">
            Quantity <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-full w-fit mb-6">
            <button
              onClick={decrement}
              className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-800"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center text-gray-900">{quantity}</span>
            <button
              onClick={increment}
              className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-800"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <button className="flex-1 bg-violet-600 hover:bg-violet-700 transition-colors text-white rounded-full py-3.5 font-medium">
              Add to Cart
            </button>
            <button
              onClick={() => setWishlisted((w) => !w)}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-violet-600 shrink-0"
              aria-label="Add to wishlist"
            >
              <Heart
                size={18}
                className={
                  wishlisted
                    ? "fill-violet-600 text-violet-600"
                    : "text-violet-600"
                }
              />
            </button>
          </div>

          <button className="w-full bg-black hover:bg-gray-800 transition-colors text-white rounded-full py-3.5 font-medium mb-6">
            Buy Now
          </button>

          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            I'm a product description. This is a great place to "sell" your
            product and grab buyers' attention. Describe your product clearly
            and concisely. Use unique keywords. Write your own description
            instead of using manufacturers' copy.
          </p>

          <div>
            {accordionData.map((item, idx) => (
              <AccordionItem
                key={item.title}
                title={item.title}
                content={item.content}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
