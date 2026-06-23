import AutoCarousel from "../components/carousel";
// images for sections
import section1_ban1 from "../assets/section1-ban.avif";
import section1_ban2 from "../assets/section1-ban2.avif";
import section4_ban from "../assets/section4-ban.avif";
import section8_ban from "../assets/section8_ban.avif";
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
          <section className="mt-10">
            <div className="text-center py-25 bg-white text-3xl font-semibold mb-3">
              Brands
            </div>

            {/* main content */}
            <section className="w-full bg-[#7B1FFF] py-16 px-6 md:px-10">
              <div className="max-w-5xl mx-auto text-white">
                {/* Heading */}
                <div className="text-center">
                  <h2 className="text-4xl font-bold">Newsletter</h2>
                  <p className="mt-4 text-lg text-white/90">
                    Sign up to receive updates on new arrivals and special
                    offers
                  </p>
                </div>

                {/* Form */}
                <form className="mt-12">
                  <label className="block text-lg mb-4">
                    Email <span>*</span>
                  </label>

                  <div className="flex flex-col lg:flex-row gap-6">
                    <input
                      type="email"
                      placeholder=""
                      className="
                      flex-1
                      h-14
                      rounded-full
                      border border-white
                      bg-transparent
                      px-6
                      outline-none
                      text-white
                      placeholder:text-white/60
                      py-3.5
                    "
                    />

                    <button
                      type="submit"
                      className="
                      h-14
                      px-12
                      rounded-full
                      bg-black
                      text-white
                      text-lg
                      hover:bg-transparent
                      border-black
                      border
                      transition
                    "
                    >
                      Subscribe
                    </button>
                  </div>

                  {/* Checkbox */}
                  <label className="mt-8 flex items-center gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      className="
                      h-5
                      w-5
                      border
                      border-white
                      bg-transparent
                      accent-white
                    "
                    />
                    <span className="text-xl">
                      Yes, subscribe me to your newsletter. *
                    </span>
                  </label>
                </form>
              </div>
            </section>
          </section>
        </section>

        {/* section 8 */}
        <section className="relative min-h-[500px] overflow-hidden mt-20">
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
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </p>

              <button className="mt-10 bg-white hover:bg-[#7c3aed] hover:text-white border border-[#7c3aed] text-[#7C3AED] px-10 py-4 rounded-full text-xl transition-colors duration-300">
                Go to Help Center
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
