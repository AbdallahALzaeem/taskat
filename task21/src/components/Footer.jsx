 import { categories } from "../data/products";

export default function Footer({ onCategorySelect }) {
  const goToCategory = (c) => {
    onCategorySelect(c);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-white">Zaeem Shop</h3>
          <p className="mt-4 leading-relaxed">Electronics, footwear, clothing and accessories, delivered to your door.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Shop</h4>
          <ul className="space-y-3">
            {categories.filter((c) => c !== "All").map((c) => (
              <li key={c}>
                <button onClick={() => goToCategory(c)} className="hover:text-white">{c}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Help</h4>
          <ul className="space-y-3">
            <li><a href="#contact" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="mb-4">Get new arrivals and offers by email.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); e.target.reset(); alert("Subscribed!"); }}
            className="flex gap-2"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl font-semibold">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-center">
          © {new Date().getFullYear()} ShopHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}