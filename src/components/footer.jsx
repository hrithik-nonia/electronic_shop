import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import FooterLinks from "./footer_links";
import PaymentMethods from "./payment_methods";

const shopLinks = [
  { link: "/", text: "Shop All" },
  { link: "/", text: "Computers" },
  { link: "/", text: "Tablets" },
  { link: "/", text: "Drones & Cameras" },
  { link: "/", text: "Audio" },
  { link: "/", text: "Mobile" },
  { link: "/", text: "T.V & Home Cinema" },
  { link: "/", text: "Wearable Tech" },
  { link: "/", text: "Sale" },
];

// store location
const storeLocation = [
  "500 Terry Francine Street",
  "San Francisco, CA 94158",
  "info@mysite.com",
  "123-456-7890",
];

// customer support
const customerSupport = [
  { link: "/", text: "Contact Us" },
  { link: "/", text: "Help Center" },
  { link: "/", text: "About Us" },
  { link: "/", text: "Careers" },
];

// policy
const policy = [
  { link: "/", text: "Shipping & Returns" },
  { link: "/", text: "Terms & Conditions" },
  { link: "/", text: "Payment Methods" },
  { link: "/", text: "FAQ" },
];
export default function Footer() {
  return (
    <>
      <footer className="bg-[#f4f4f4] py-20 px-6 lg:px-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Store Location */}
            <div>
              <h3 className="text-xl font-semibold mb-10">Store Location</h3>

              <div className="space-y-2">
                {storeLocation.map((text) => (
                  <p>{text}</p>
                ))}
              </div>

              <div className="flex items-center gap-5 mt-10">
                <CiFacebook
                  size={24}
                  className="cursor-pointer hover:scale-110 transition"
                />
                <CiInstagram
                  size={24}
                  className="cursor-pointer hover:scale-110 transition"
                />
                <CiTwitter
                  size={24}
                  className="cursor-pointer hover:scale-110 transition"
                />
                <CiYoutube
                  size={24}
                  className="cursor-pointer hover:scale-110 transition"
                />
              </div>
            </div>

            {/* Shop */}
            <FooterLinks content={shopLinks} />

            {/* Customer Support */}
            <FooterLinks content={customerSupport} />

            {/* Policy */}
            <FooterLinks content={policy} />
          </div>
        </div>
      </footer>
      {/* payment methods shows here */}
      <PaymentMethods />
    </>
  );
}
