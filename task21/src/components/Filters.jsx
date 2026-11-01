 import { categories } from "../data/products";

export default function Filters({ category, setCategory, maxPrice, setMaxPrice, onReset, priceLimit }) {
  return (
    <aside className="bg-white rounded-2xl shadow-sm p-7 h-fit lg:sticky lg:top-24">
      <div className="flex items-center justify-between pb-6 border-b border-gray-900">
        <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
        <button onClick={onReset} className="text-blue-600 hover:underline">Reset all</button>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Category</h3>
        <div className="space-y-3">
          {categories.map((c) => (
            <label key={c} className="flex items-center gap-4 cursor-pointer text-gray-700 text-lg">
              <input
                type="radio"
                name="category"
                checked={category === c}
                onChange={() => setCategory(c)}
                className="w-5 h-5 accent-blue-600"
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">Max price</h3>
          <span className="text-lg font-bold text-blue-600">${maxPrice}</span>
        </div>
        <input
          type="range"
          min="0"
          max={priceLimit}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
      </div>
    </aside>
  );
}