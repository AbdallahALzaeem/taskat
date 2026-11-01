 import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const PRICE_LIMIT = 200;

export default function App() {
  // الفلاتر
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(PRICE_LIMIT);

  // السلة
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addToCart = (product) =>
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...product, qty: 1 }];
    });

  const updateQty = (id, qty) =>
    setCart((prev) =>
      qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cart={cart}
        updateQty={updateQty}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <Hero />
      <Products
        category={category}
        setCategory={setCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        priceLimit={PRICE_LIMIT}
        addToCart={addToCart}
      />
      <Contact />
      <Footer onCategorySelect={setCategory} />
    </div>
  );
}