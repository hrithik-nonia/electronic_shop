export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col w-[300px] h-[400px] shrink-0 border border-stone-200 p-3 ">
      <div
        className={`relative h-[65%] aspect-square ${product.bg} flex items-center justify-center self-center`}
      >
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-md ${product.badgeColor}`}
        >
          {product.badge}
        </span>

        <img
          src={`http://localhost:8000/uploads/${product.image}`}
          alt={product.name}
          className=" h-full object-cover rounded-2xl hover:scale-102 hover:shadow-2xl"
        />
        {product.sale_price && (
          <span className="absolute top-0 left-0 z-10 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            SALE
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-1 flex-1">
        <p className="text-stone-900 text-base leading-snug">{product.name}</p>
        <div className=" flex items-baseline gap-2">
          {product.sale_price && (
            <>
              <span className="text-violet-600 line-through text-sm">
                ${product.price}
              </span>

              <span className="text-violet-600 font-medium">
                ${product.sale_price}
              </span>
            </>
          )}
          {!product.sale_price && (
            <span className="text-violet-600 font-medium">
              ${product.price}
            </span>
          )}
        </div>

        <button className="mt-3 bg-blue-600 hover:bg-transparent border hover:text-blue-600 text-white text-sm font-medium rounded-full py-2 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
