 const products = [
  { id: 1, name: "قميص", price: 20, image: "https://picsum.photos/seed/shirt/400/300" },
  { id: 2, name: "حذاء", price: 45, image: "https://picsum.photos/seed/shoes/400/300" },
  { id: 3, name: "ساعة", price: 60, image: "https://picsum.photos/seed/watch/400/300" },
  { id: 4, name: "حقيبة", price: 35, image: "https://picsum.photos/seed/bag/400/300" },
  { id: 5, name: "نظارة", price: 25, image: "https://picsum.photos/seed/glasses/400/300" },
  { id: 6, name: "قبعة", price: 15, image: "https://picsum.photos/seed/hat/400/300" },
];

export default function Products({ add }) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">منتجاتنا</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow p-4 hover:shadow-xl hover:-translate-y-2 transition">
              <img src={product.image} alt={product.name} className="w-full rounded-lg mb-3" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <button
                onClick={add}
                className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 hover:bg-blue-700"
              >
                أضف للسلة
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}