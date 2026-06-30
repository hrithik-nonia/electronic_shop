import ShowProductsByCategory from "../components/category_products";
export default function ComputerProducts() {
  const products = [
    {
      id: 1,
      name: 'Sheer 10.2" Tablet With Wi-Fi , 32GB',
      price: 85.0,
      originalPrice: null,
      onSale: false,
      image:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80",
      bg: "bg-[#1c1c1c]",
    },
    {
      id: 2,
      name: 'JP - Space Tablet 10.4" Wi-Fi 32GB',
      price: 70.0,
      originalPrice: 85.0,
      onSale: true,
      image:
        "https://images.unsplash.com/photo-1585789575171-79d8a6bdf1ea?w=400&q=80",
      bg: "bg-white",
    },
    {
      id: 3,
      name: 'Pilates Go 10.5" Touch-Screen, 64GB With Cover',
      price: 85.0,
      originalPrice: null,
      onSale: false,
      image:
        "https://images.unsplash.com/photo-1623126908029-58c4e8c8e0c6?w=400&q=80",
      bg: "bg-white",
      hasDot: true,
    },
    {
      id: 4,
      name: 'Ove Tablet FD Plus - 10.3", 32GB',
      price: 70.0,
      originalPrice: 85.0,
      onSale: true,
      image:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80",
      bg: "bg-white",
    },
  ];
  return <ShowProductsByCategory title="Computer" products={products} />;
}
