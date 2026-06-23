import CommonBtn from "./common_btn";
import ProductCard from "./product_card";

export default function Product_section() {
  // temp product list
  const products = [
    {
      name: "Fitboot Inspire Fitness Tracker With Heart Rate Tracking",
      image: "/placeholder-fitness-tracker.png",
      originalPrice: "85.00",
      salePrice: "70.00",
      onSale: true,
    },
    {
      name: "Smartphone Z Pixel Max 128GB Unlocked",
      image: "/placeholder-phone.png",
      originalPrice: "85.00",
      salePrice: "70.00",
      onSale: true,
    },
    {
      name: '65" Class Nano LED 4K UHD Smart TV',
      image: "/placeholder-tv.png",
      originalPrice: "85.00",
      salePrice: "70.00",
      onSale: true,
    },
    {
      name: "White Buds Wireless Earbud Headphones",
      image: "/placeholder-earbuds.png",
      originalPrice: null,
      salePrice: "85.00",
      onSale: false,
    },
    {
      name: "White Buds Wireless Earbud Headphones",
      image: "/placeholder-earbuds.png",
      originalPrice: null,
      salePrice: "85.00",
      onSale: false,
    },
    {
      name: "White Buds Wireless Earbud Headphones",
      image: "/placeholder-earbuds.png",
      originalPrice: null,
      salePrice: "85.00",
      onSale: false,
    },
    {
      name: "White Buds Wireless Earbud Headphones",
      image: "/placeholder-earbuds.png",
      originalPrice: null,
      salePrice: "85.00",
      onSale: false,
    },
  ];
  return (
    <>
      <section className="py-16 bg-white mt-10">
        <h2 className="text-center text-4xl font-bold text-stone-900 mb-10">
          Best Sellers
        </h2>

        {/* product shows here */}
        <div className="flex gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-5">
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <CommonBtn text={"view all"} />
        </div>
      </section>
    </>
  );
}
