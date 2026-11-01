 import { useEffect, useState } from "react";

export default function Header({ cart, updateQty, removeFromCart, clearCart }) {
  const [open, setOpen] = useState(false);

  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const checkout = () => {
    alert(`Order placed! Total: $${total.toFixed(2)}`);
    clearCart();
    setOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#products" className="text-2xl font-bold text-gray-900">zaeem shop</a>

          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex gap-6 font-medium text-gray-700">
              <a href="#products" className="hover:text-blue-600">Products</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </nav>

            <button
              onClick={() => setOpen(true)}
              className="relative p-2 rounded-lg hover:bg-gray-100"
              aria-label="Open cart"
            >
              <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h12M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* خلفية معتمة */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* نافذة السلة */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Your cart</h2>
          <button onClick={() => setOpen(false)} className="text-3xl leading-none text-gray-500 hover:text-gray-900" aria-label="Close cart">×</button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-500 p-6 text-center">
            <p className="text-lg">Your cart is empty.</p>
            <button onClick={() => setOpen(false)} className="mt-4 text-blue-600 font-semibold hover:underline">Browse products</button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto p-6 space-y-5">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500 hover:underline">Remove</button>
                    </div>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 rounded-lg border hover:bg-gray-100">−</button>
                      <span className="w-6 text-center font-semibold">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 rounded-lg border hover:bg-gray-100">+</button>
                      <span className="ml-auto font-bold">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="p-6 border-t space-y-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button onClick={checkout} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg">
                Checkout
              </button>
              <button onClick={clearCart} className="w-full text-gray-500 hover:text-gray-900 text-sm">Clear cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}