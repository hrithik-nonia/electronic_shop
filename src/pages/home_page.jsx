import AutoCarousel from "../components/carousel";
// images for section 1
import section1_ban1 from "../assets/section1-ban.avif";
import section1_ban2 from "../assets/section1-ban2.avif";

// logos for section 2
import { Truck, PackageCheck, Percent, RotateCw } from "lucide-react";

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
        </section>
      </section>
    </>
  );
}
