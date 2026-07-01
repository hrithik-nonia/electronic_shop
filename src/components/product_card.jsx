function ProductCard({ product }) {
  return (
    <div className="w-[300px] h-[400px] shrink-0 border border-stone-200">
      {/* image shows here */}
      <div className="aspect-square flex items-center justify-center p-8 bg-white relative">
        <img
          src={`http://localhost:8000/uploads/${product.image}`}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
        {product.sale_price && (
          <span className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            SALE
          </span>
        )}
      </div>

      {/* text area */}
      <div className="px-6 pb-6 pt-2">
        <p className="text-stone-900 text-base leading-snug">{product.name}</p>
        <div className="mt-3 flex items-baseline gap-2">
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
      </div>
    </div>
  );
}

export default ProductCard;
