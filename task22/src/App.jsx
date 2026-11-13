import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div dir="rtl">
      <Header count={count} />
      <Hero />
      <Products add={() => setCount(count + 1)} />
    </div>
  );
}