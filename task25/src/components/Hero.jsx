import { useState } from "react";

const VIDEO_ID = "aqz-KE-bpKQ";

export default function Hero() {
  const [play, setPlay] = useState(false);

  return (
    <section id="home" className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-10 px-4 py-16 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-extrabold md:text-5xl">نبني لك موقعك من الفكرة للإطلاق</h1>
        <p className="mt-5 text-lg text-slate-600">تصميم سريع وواضح يشتغل على كل الشاشات.</p>
        <a href="#contact" className="mt-8 inline-block rounded-lg bg-teal-600 px-6 py-3 text-white">تواصل معنا</a>
      </div>

      <div
        className="aspect-video overflow-hidden rounded-2xl bg-black"
        onMouseEnter={() => setPlay(true)}
        onMouseLeave={() => setPlay(false)}
      >
        {play ? (
          <iframe
            title="فيديو تعريفي"
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=1&loop=1&playlist=${VIDEO_ID}`}
          />
        ) : (
          <img
            alt="معاينة الفيديو التعريفي"
            className="h-full w-full object-cover"
            src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
          />
        )}
      </div>
    </section>
  );
}