import { Search, User, Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full bg-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
        TechShed
      </span>

      {/* Right icons */}
      <div className="flex items-center gap-6">
        <button className="text-gray-700 hover:text-gray-900">
          <Search className="w-5 h-5" strokeWidth={1.8} />
        </button>

        <button className="flex items-center gap-1.5 text-gray-900 hover:text-gray-600">
          <span className="bg-gray-900 rounded-full p-1">
            <User className="w-3.5 h-3.5 text-white" strokeWidth={2} />
          </span>
          <span className="text-sm font-medium text-blue-500">Log In</span>
        </button>

        <button className="text-gray-700 hover:text-gray-900">
          <Heart className="w-5 h-5" strokeWidth={1.8} />
        </button>

        <button className="relative text-gray-700 hover:text-gray-900">
          <ShoppingCart className="w-5 h-5" strokeWidth={1.8} />
          <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] leading-none font-medium rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </div>
  );
}
