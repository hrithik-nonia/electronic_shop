import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Store Location */}
          <div>
            <h3 className="text-3xl font-semibold mb-10">Store Location</h3>

            <div className="space-y-4 text-lg">
              <p>500 Terry Francine Street</p>
              <p>San Francisco, CA 94158</p>
              <p>info@mysite.com</p>
              <p>123-456-7890</p>
            </div>

            <div className="flex items-center gap-5 mt-10">
              <Facebook
                size={24}
                className="cursor-pointer hover:scale-110 transition"
              />
              <Instagram
                size={24}
                className="cursor-pointer hover:scale-110 transition"
              />
              <Twitter
                size={24}
                className="cursor-pointer hover:scale-110 transition"
              />
              <Youtube
                size={24}
                className="cursor-pointer hover:scale-110 transition"
              />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-3xl font-semibold mb-10">Shop</h3>

            <ul className="space-y-4 text-lg">
              <li>
                <a href="#">Shop All</a>
              </li>
              <li>
                <a href="#">Computers</a>
              </li>
              <li>
                <a href="#">Tablets</a>
              </li>
              <li>
                <a href="#">Drones & Cameras</a>
              </li>
              <li>
                <a href="#">Audio</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
              <li>
                <a href="#">T.V & Home Cinema</a>
              </li>
              <li>
                <a href="#">Wearable Tech</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-3xl font-semibold mb-10">Customer Support</h3>

            <ul className="space-y-4 text-lg">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-3xl font-semibold mb-10">Policy</h3>

            <ul className="space-y-4 text-lg">
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
