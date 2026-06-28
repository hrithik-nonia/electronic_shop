import CommonBtn from "./common_btn";
import ProductCard from "./product_card";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Product_section({ title, fetchFn }) {
  const LIMIT = 10;

  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const scrollContainerRef = useRef(null);
  const sentinelRef = useRef(null);
  const observerRef = useRef(null);

  // latest state ko ref mein rakho taaki stable callback ke andar bhi fresh value mile
  const stateRef = useRef({ hasMore, loading, skip });
  useEffect(() => {
    stateRef.current = { hasMore, loading, skip };
  }, [hasMore, loading, skip]);

  const fetchProducts = async (currentSkip) => {
    if (stateRef.current.loading) return;
    setLoading(true);
    try {
      const data = await fetchFn(currentSkip, LIMIT);
      setProducts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newItems = data.filter((p) => !existingIds.has(p.id));
        return [...prev, ...newItems];
      });
      setHasMore(data.length === LIMIT);
      setSkip(currentSkip + LIMIT);
    } catch (error) {
      console.error(`Failed to fetch ${title}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let active = true;
    (async () => {
      await fetchProducts(0);
      if (!active) return;
    })();
    return () => {
      active = false;
    };
  }, []);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    const { hasMore, loading, skip } = stateRef.current;
    if (target.isIntersecting && hasMore && !loading) {
      fetchProducts(skip);
    }
  }, []);

  useEffect(() => {
    if (!sentinelRef.current || !scrollContainerRef.current) return;

    observerRef.current = new IntersectionObserver(handleObserver, {
      root: scrollContainerRef.current,
      threshold: 0.1,
    });

    observerRef.current.observe(sentinelRef.current);

    return () => observerRef.current?.disconnect();
  }, [handleObserver]);

  return (
    <>
      <section className="py-16 bg-white mt-10">
        <h2 className="text-center text-4xl font-bold text-stone-900 mb-10">
          {title}
        </h2>

        <div
          className="flex gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-5"
          ref={scrollContainerRef}
        >
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
          <div ref={sentinelRef} className="w-1 shrink-0" />
        </div>

        <div className="flex justify-center mt-10">
          <CommonBtn text={"view all"} />
        </div>
      </section>
    </>
  );
}
