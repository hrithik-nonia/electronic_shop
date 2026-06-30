import { ChevronDown } from "lucide-react";
import SideBarForCategoryProdeuc from "./side_bar_for_category_products";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col">
      <div
        className={`relative h-72 ${product.bg} flex items-center justify-center`}
      >
        {product.onSale && (
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            SALE
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-[80%] object-contain"
        />
        {product.hasDot && (
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-red-600" />
        )}
      </div>

      <h3 className="text-gray-900 mt-4 leading-snug">{product.name}</h3>

      <div className="mt-1 flex items-center gap-2">
        {product.originalPrice && (
          <span className="text-purple-700 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
        <span className="text-purple-700">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default function ShowProductsByCategory({
  products = null,
  title = null,
}) {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Page header */}
      <div className="px-8 pt-10 pb-15 ">
        <h1 className="text-5xl font-bold text-gray-900">
          {title || "All Products"}
        </h1>
      </div>

      {/* Content */}

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 bg-gray-200 px-8 py-8 border-r border-gray-400">
          <SideBarForCategoryProdeuc />
        </aside>

        {/* Product grid */}
        <main className="flex-1 px-8 py-8">
          <div className="flex justify-between pb-5 ">
            <p className="text-sm text-purple-700">
              {products && products.length * 16} products
            </p>
            <button className="flex items-center gap-1 text-sm text-gray-700">
              Sort by: Recommended
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
}
