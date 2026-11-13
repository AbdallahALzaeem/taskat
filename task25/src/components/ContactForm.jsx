import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));
    console.log(values); // هون بتحط كود الإرسال للسيرفر
    e.target.reset();
    setSent(true);
  };

  const input = "w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-200";

  return (
    <section id="contact" className="mx-auto max-w-2xl px-4 py-16">
      <h2 className="text-3xl font-bold text-center mt-8">تواصل معنا</h2>

      <form onSubmit={handleSubmit} onChange={() => setSent(false)} className="mt-8 space-y-5">
        <label className="block">الاسم
          <input name="name" required className={input} />
        </label>

        <label className="block">الإيميل
          <input name="email" type="email" required className={input} />
        </label>

        <label className="block">رقم الهاتف
          <input name="phone" type="tel" required pattern="[0-9+\s\-]{7,15}" title="اكتب رقم صحيح" className={input} />
        </label>

        <label className="block">الرسالة
          <textarea name="message" rows={5} required className={input} />
        </label>

        <button className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">
          إرسال الرسالة
        </button>

        {sent && <p className="rounded-lg bg-teal-50 p-3 text-teal-800">تم إرسال الرسالة.</p>}
      </form>
    </section>
  );
}