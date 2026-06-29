import { Package } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AnnouncementBar() {
  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/help", label: "Help Center" },
    { to: "/call", label: "Call Us" },
  ];
  return (
    <div className="w-full bg-black text-white px-10 md:py-5 py-2.5 flex items-center justify-between text-sm">
      {/* Left: shipping message */}
      <div className="flex items-center gap-2">
        <Package className="w-4 h-4" strokeWidth={1.8} />
        <span>Free Shipping for orders over $50</span>
      </div>

      {/* Right: links + phone */}
      <div className="lg:flex items-center gap-6 hidden">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="underline hover:text-gray-300"
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
