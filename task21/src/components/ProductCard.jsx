 import { useState } from "react";

export default function ProductCard({ product, onAdd, onView }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
      {/* الضغط على الصورة يفتح التفاصيل */}
      <button
        onClick={() => onView(product)}
        className="aspect-[4/3] bg-gray-100 overflow-hidden block w-full"
        aria-label={`View details of ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </button>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-blue-600 font-medium tracking-wide text-sm">{product.category}</p>

        {/* الضغط على الاسم يفتح التفاصيل */}
        <button onClick={() => onView(product)} className="text-left">
          <h3 className="text-xl font-bold text-gray-900 mt-2 hover:text-blue-600">{product.name}</h3>
        </button>

        <p className="text-sm text-gray-500 mt-1">Made in {product.madeIn}</p>

        <div className="flex items-center justify-between mt-auto pt-6">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <button
            onClick={handleAdd}
            className={`px-5 py-3 rounded-xl font-semibold text-white transition-colors ${
              added ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}