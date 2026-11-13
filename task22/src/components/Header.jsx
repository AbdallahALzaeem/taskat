export default function Header({ count }) {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">متجري</h1>

        <nav className="flex gap-6">
          <a href="#" className="hover:text-blue-600">الرئيسية</a>
          <a href="#" className="hover:text-blue-600">المنتجات</a>
          <a href="#" className="hover:text-blue-600">تواصل معنا</a>
        </nav>

        <div className="bg-gray-100 px-4 py-2 rounded-lg">🛒 {count}</div>
      </div>
    </header>
  );
}