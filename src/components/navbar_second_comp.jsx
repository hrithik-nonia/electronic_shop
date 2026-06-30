import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import LoginCard from "./login_and_signup_form";
import { useState } from "react";

export default function Header() {
  const [showLoginCard, setShowLoginCard] = useState(false);

  return (
    <>
      <div className="w-full bg-white px-5 lg:px-10 py-4 flex items-center justify-between ">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-4xl font-bold text-gray-900 tracking-tight"
        >
          TechShed
        </NavLink>

        {/* Right icons */}
        <div className="flex items-center gap-6">
          {/* search option */}
          <NavLink to="/search" className="text-gray-700 hover:text-gray-900">
            <Search className="w-5 h-5" strokeWidth={1.8} />
          </NavLink>

          {/* login option */}
          <button
            className="lg:flex items-center gap-1.5 text-gray-900 hover:text-gray-600 hidden"
            onClick={() => setShowLoginCard(true)}
          >
            <span className="bg-gray-900 rounded-full p-1">
              <User className="w-3.5 h-3.5 text-white" strokeWidth={2} />
            </span>
            <span className="text-sm font-medium ">Log In</span>
          </button>

          {/* liked product option */}
          <button className="text-gray-700 hover:text-gray-900 hidden lg:flex">
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

      {/* Login Card */}
      {showLoginCard && <LoginCard onClose={() => setShowLoginCard(false)} />}
    </>
  );
}
