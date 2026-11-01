 import { useState } from "react";

const initial = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) err.message = "Message must be at least 10 characters.";
    if (Object.keys(err).length) return setErrors(err);

    console.log("Contact form:", form);
    setSent(true);
    setForm(initial);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
      errors[field] ? "border-red-500" : "border-gray-200"
    }`;

  return (
    <section id="contact" className="bg-white py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Contact us</h2>
          <p className="text-gray-600 mt-4 text-lg max-w-md">
            Questions about an order, shipping or returns? Send us a message and we’ll reply within 24 hours.
          </p>

          <ul className="mt-10 space-y-4 text-gray-700">
            <li><span className="font-semibold text-gray-900">Email: </span>abdallahzaeem32@gmail.com</li>
            <li><span className="font-semibold text-gray-900">Phone: </span>+972594015816</li>
            <li><span className="font-semibold text-gray-900">Address: </span>Gaza</li>
          </ul>

          <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200 aspect-[16/10]">
            <iframe
              title="Store location"
              src="https://maps.google.com/maps?q=Gaza&z=14&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-gray-50 rounded-2xl p-8 space-y-5 h-fit">
          <label className="block">
            <span className="block font-semibold text-gray-800 mb-2">Name</span>
            <input name="name" value={form.name} onChange={handleChange} className={inputClass("name")} placeholder="Your full name" />
            {errors.name && <span className="block text-sm text-red-600 mt-1">{errors.name}</span>}
          </label>

          <label className="block">
            <span className="block font-semibold text-gray-800 mb-2">Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass("email")} placeholder="you@example.com" />
            {errors.email && <span className="block text-sm text-red-600 mt-1">{errors.email}</span>}
          </label>

          <label className="block">
            <span className="block font-semibold text-gray-800 mb-2">Message</span>
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} className={inputClass("message")} placeholder="How can we help?" />
            {errors.message && <span className="block text-sm text-red-600 mt-1">{errors.message}</span>}
          </label>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg">
            Send message
          </button>

          {sent && (
            <p className="text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-center">
              Message sent. We’ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}