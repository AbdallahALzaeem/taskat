 const HERO_IMAGE =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden">
      <img src={HERO_IMAGE} alt="Inside a clothing store" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Welcome to our distinguished store
          </h1>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Shop electronics, footwear, clothing and accessories. Free delivery on orders over $100.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg">
              Shop now
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg">
              Contact us
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <dt className="text-gray-300 text-sm">Products</dt>
              <dd className="text-2xl font-bold text-white">500+</dd>
            </div>
            <div>
              <dt className="text-gray-300 text-sm">Customers</dt>
              <dd className="text-2xl font-bold text-white">12k</dd>
            </div>
            <div>
              <dt className="text-gray-300 text-sm">Returns</dt>
              <dd className="text-2xl font-bold text-white">30 days</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}