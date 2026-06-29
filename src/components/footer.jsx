import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import FooterLinks from "./footer_links";
import PaymentMethods from "./payment_methods";
import section8_ban from "../assets/section8_ban.avif";

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
      <section className="relative min-h-[500px] overflow-hidden ">
        {/* Image */}
        <img
          src={section8_ban}
          alt={`${section8_ban} banner`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Left Black Panel */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-full
            lg:w-[55%]
            bg-black
            text-white
            flex
            items-center
            px-8
            lg:px-20
          "
          style={{
            clipPath: "polygon(0 0, 82% 0, 92% 100%, 0 100%)",
          }}
        >
          <div className="max-w-md">
            <h2 className="text-5xl font-bold leading-tight">
              Need Help? Check
              <br />
              Out Our Help Center
            </h2>

            <p className="mt-8 text-lg leading-9">
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>

            <button className="mt-10 bg-white hover:bg-[#7c3aed] hover:text-white border border-[#7c3aed] text-[#7C3AED] px-10 py-4 rounded-full text-xl transition-colors duration-300">
              Go to Help Center
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-[#f4f4f4] py-20 px-6 lg:px-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Store Location */}
            <div>
              <h3 className="text-xl font-semibold mb-10">Store Location</h3>

              <div className="space-y-2">
                {storeLocation.map((text, i) => (
                  <p key={i}>{text}</p>
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
