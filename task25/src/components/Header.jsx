import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "../data/navItems"; // عدّل المسار حسب مكان ملف الداتا

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenSub(null);
  };

  return (
    <nav dir="rtl" className="sticky top-0 z-50 bg-slate-900 text-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-2xl font-bold text-emerald-400">
          موقعي
        </a>

        {/* قائمة الشاشات الكبيرة */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.children.length === 0 ? (
              <li key={item.id}>
                <a href={item.link} className="hover:text-emerald-400">
                  {item.name}
                </a>
              </li>
            ) : (
              <li key={item.id} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="flex items-center gap-1 hover:text-emerald-400"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                </button>

                <div className="absolute right-0 top-full hidden w-48 pt-3 group-hover:block group-focus-within:block">
                  <ul className="rounded-md bg-slate-800 py-2 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <a href={child.link} className="block px-4 py-2 hover:bg-slate-700">
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          )}
        </ul>

        {/* زر قائمة الموبايل */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={mobileOpen}
          className="md:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* قائمة الموبايل */}
      {mobileOpen && (
        <ul className="border-t border-slate-800 px-6 py-4 md:hidden">
          {navItems.map((item) =>
            item.children.length === 0 ? (
              <li key={item.id}>
                <a href={item.link} onClick={closeMobile} className="block py-3 hover:text-emerald-400">
                  {item.name}
                </a>
              </li>
            ) : (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenSub(openSub === item.id ? null : item.id)}
                  aria-expanded={openSub === item.id}
                  className="flex w-full items-center justify-between py-3 hover:text-emerald-400"
                >
                  {item.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${openSub === item.id ? "rotate-180" : ""}`}
                  />
                </button>

                {openSub === item.id && (
                  <ul className="mb-2 rounded-md bg-slate-800 py-1">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <a href={child.link} onClick={closeMobile} className="block px-4 py-2 hover:bg-slate-700">
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}