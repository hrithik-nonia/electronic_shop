import AutoCarousel from "../components/carousel";
// images for sections
import section1_ban1 from "../assets/section1-ban.avif";
import section1_ban2 from "../assets/section1-ban2.avif";
import section4_ban from "../assets/section4-ban.avif";
// logoes for sections
import { Truck, PackageCheck, Percent, RotateCw } from "lucide-react";

import Product_section from "../components/product_section";
import CommonBtn from "../components/common_btn";

// --------------------------------
export default function Home() {
  // content for section 1
  const bannerContent = [
    {
      img: section1_ban1,
      h1: "Up to 30% off",
      h2: "Holiday Deals",
      h3: "Selected Smartphone Brands ",
    },
    {
      img: section1_ban2,
      h1: "Take Your Sound Anywhere",
      h2: "Just In",
      h3: "Top Headphone Brands",
    },
  ];

  // content for section 2
  const features = [
    {
      icon: Truck,
      title: "Curb-side",
      subtitle: "pickup",
    },
    {
      icon: PackageCheck,
      title: "Free shipping on",
      subtitle: "orders over $50",
    },
    {
      icon: Percent,
      title: "Low prices",
      subtitle: "guaranteed",
    },
    {
      icon: RotateCw,
      title: "Available to",
      subtitle: "you 24/7",
    },
  ];

  return (
    <>
      <section className="bg-gray-200">
        {/* carousel */}
        <AutoCarousel />

        <section className="md:px-10">
          {/* section 1 */}
          <section className="grid md:grid-cols-2 py-10 gap-10">
            {bannerContent.map(({ img, h1, h2, h3 }) => (
              <div className="relative w-full">
                <img
                  src={img}
                  alt={`${img} banner`}
                  className="h-[450px] lg:h-full object-cover"
                />
                <div className="absolute inset-0  font-sans md:w-[40%] w-[60%] lg:top-20 lg:left-20 top-15 left-8 text-white">
                  <h2 className="lg:text-lg">{h2}</h2>
                  <h1 className=" text-5xl font-bold leading-15">{h1}</h1>
                  <h3 className="lg:text-lg mt-3">{h3}</h3>

                  <button className="self-start bg-white border border-white hover:bg-transparent hover:text-white transition-colors duration-300 text-black px-10 py-2 rounded-full mt-5">
                    shop
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* section 2 */}

          <section className="border-t border-b border-stone-200 bg-white">
            <div className="md:max-w-7xl md:mx-auto px-6 py-15 grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-15">
              {features.map(({ icon: Icon, title, subtitle }, i) => (
                <div key={i} className="md:flex items-center ">
                  <Icon
                    className="w-12 h-12  text-stone-900 shrink-0 "
                    strokeWidth={1.5}
                  />
                  <p className="md:text-xl text-base font-semibold text-stone-900 leading-snug ">
                    {title}
                    <br />
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* section 3 */}
          <Product_section />

          {/* section 4 */}
          <section className="mt-10">
            <div className="bg-white text-center text-3xl font-semibold py-25 mb-3">
              Shop by Category
            </div>

            {/* ------------- */}
            <div className="relative w-full overflow-hidden ">
              {/* image */}
              <img
                src={section4_ban}
                alt={`${section4_ban} banner`}
                className="h-[200px] lg:h-full"
              />

              {/* Left section - red background (image placeholder), diagonal cut */}
              <div
                className="absolute z-10 inset-y-0 lg:right-0 w-[45%] bg-white "
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 25% 100%)",
                }}
              />

              {/* Best Price badge - sits on the diagonal cut */}
              <div className=" absolute left-[52%] top-12 z-10 flex h-36 w-36 items-center justify-center rounded-full bg-red-600 text-center shadow-lg">
                <span className="text-xl font-bold leading-tight text-white">
                  Best
                  <br />
                  Price
                </span>
              </div>

              {/* Right section - text content */}
              <div className=" absolute top-0 right-0 z-20 flex h-full w-[40%] flex-col justify-center px-12 lg:px-20 ">
                <p className="text-2xl font-semibold text-stone-900">
                  Save up to
                </p>

                <p className="mt-2 text-7xl font-extrabold text-stone-900 leading-none">
                  $150
                </p>

                <p className="mt-6 text-2xl font-bold text-stone-900 leading-snug">
                  on selected laptop
                  <br />& tablets brands
                </p>

                <p className="mt-3 text-sm text-stone-600">
                  Terms and conditions apply
                </p>

                <CommonBtn text={"shop"} />
              </div>
            </div>
          </section>

          {/* section 5 */}
          <Product_section />

          {/* section 6 */}
          <section className="w-full overflow-hidden bg-white mt-10">
            <div className="relative h-[600px] flex">
              {/* Left Content */}
              <div
                className="relative z-10 w-full lg:w-[45%] bg-[#ffffff] flex flex-col justify-center px-8 lg:px-16"
                style={{
                  clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                }}
              >
                <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 w-fit">
                  Today's Special
                </span>

                <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-black">
                  Best Arial View in Town
                </h2>

                <div className="flex items-end gap-4 mt-8">
                  <span className="text-7xl font-bold text-violet-600">
                    30%
                  </span>

                  <span className="text-7xl font-bold text-black">OFF</span>
                </div>

                <h3 className="mt-6 text-2xl lg:text-3xl font-semibold text-black">
                  on professional camera drones
                </h3>

                <p className="mt-8 text-gray-700">
                  Limited quantities.
                  <br />
                  See product detail pages for availability.
                </p>

                <CommonBtn text={"shop"} />
              </div>

              {/* Right Image */}
              <div className="absolute inset-0 lg:left-[35%]">
                <img
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f"
                  alt="Drone"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* section 7 */}

          {/* section 8 */}
        </section>
      </section>
    </>
  );
}
