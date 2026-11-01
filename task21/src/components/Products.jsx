import { useEffect, useState } from "react";
import { products } from "../data/products";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

export default function Products({ category, setCategory, maxPrice, setMaxPrice, priceLimit, addToCart }) {
  const [selected, setSelected] = useState(null); // المنتج المفتوح في النافذة

  const filtered = products.filter(
    (p) => (category === "All" || p.category === category) && p.price <= maxPrice
  );

  const reset = () => {
    setCategory("All");
    setMaxPrice(priceLimit);
  };

  return (
    <section
      id="products"
      className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 scroll-mt-16"
    >
      <Filters
        category={category}
        setCategory={setCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        onReset={reset}
        priceLimit={priceLimit}
      />

      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          <p className="text-lg">No products match these filters.</p>
          <button onClick={reset} className="mt-3 text-blue-600 font-semibold hover:underline">Reset filters</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} onView={setSelected} />
          ))}
        </div>
      )}

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          onAdd={(p) => {
            addToCart(p);
            setSelected(null);
          }}
        />
      )}
    </section>
  );
}

/* ---------- نافذة تفاصيل المنتج ---------- */
function ProductModal({ product, onClose, onAdd }) {
  // إغلاق بزر Esc + منع تمرير الصفحة خلف النافذة
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const details = [
    { label: "Brand", value: product.brand },
    { label: "Made in", value: product.madeIn },
    { label: "Type", value: product.type },
    { label: "Warranty", value: product.warranty },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
      >
        <div className="relative bg-gray-100">
          <img src={product.image} alt={product.name} className="w-full h-64 md:h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 text-2xl leading-none text-gray-700 hover:bg-white md:hidden"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="p-8 flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-blue-600 font-medium text-sm">{product.category}</p>
              <h2 id="product-title" className="text-2xl font-bold text-gray-900 mt-1">{product.name}</h2>
            </div>
            <button
              onClick={onClose}
              className="hidden md:block text-3xl leading-none text-gray-400 hover:text-gray-900"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4">
            {details.map((d) => (
              <div key={d.label} className="bg-gray-50 rounded-xl p-3">
                <dt className="text-xs text-gray-500">{d.label}</dt>
                <dd className="font-semibold text-gray-900 mt-0.5">{d.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="font-semibold text-gray-900 mt-6 mb-3">Features</h3>
          <ul className="space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            <button
              onClick={() => onAdd(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}