 export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-right">
          <h2 className="text-5xl font-bold mb-4">أهلاً بك في متجري</h2>
          <p className="text-lg mb-8">أفضل المنتجات بأحسن الأسعار</p>
          <button  className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition">
            تسوّق الآن
          </button>
        </div>

        <div className="flex-1">
          <img src="https://picsum.photos/600/400" alt="منتجات المتجر" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}