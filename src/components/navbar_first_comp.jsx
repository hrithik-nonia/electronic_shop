import { Package } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-black text-white px-10 md:py-5 py-2.5 flex items-center justify-between text-sm">
      {/* Left: shipping message */}
      <div className="flex items-center gap-2">
        <Package className="w-4 h-4" strokeWidth={1.8} />
        <span>Free Shipping for orders over $50</span>
      </div>

      {/* Right: links + phone */}
      <div className="lg:flex items-center gap-6 hidden">
        <a href="#" className="underline hover:text-gray-300">
          About
        </a>
        <a href="#" className="underline hover:text-gray-300">
          Contact
        </a>
        <a href="#" className="underline hover:text-gray-300">
          Help Center
        </a>
        <span className="flex items-center gap-1">
          Call Us
          <a href="tel:1234567890" className="underline hover:text-gray-300">
            123-456-7890
          </a>
        </span>
      </div>
    </div>
  );
}
