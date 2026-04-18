import { useState } from "react";

const RSVP_URL = "https://functions.poehali.dev/97d6444a-3bd3-4a30-9f6f-f14860ded15b";

export default function RSVP() {
  const [form, setForm] = useState({ name: "", guests: "1", attending: "yes", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(RSVP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" style={{ backgroundColor: '#fdf8f5' }} className="px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: '#c4977a', fontFamily: "'Montserrat', sans-serif" }}>
          Подтверждение
        </p>
        <h2 className="text-4xl md:text-5xl font-light italic mb-4" style={{ color: '#4a3728' }}>
          Вы придёте?
        </h2>
        <div className="w-10 h-px mx-auto mb-6" style={{ backgroundColor: '#c4977a' }} />
        <p className="text-sm leading-relaxed mb-12 font-light" style={{ color: '#9e8070', fontFamily: "'Montserrat', sans-serif" }}>
          Пожалуйста, подтвердите своё присутствие до 25 мая 2026 года.
        </p>

        {submitted ? (
          <div className="py-16">
            <p className="text-3xl italic font-light mb-4" style={{ color: '#4a3728' }}>
              Благодарим вас!
            </p>
            <p className="text-sm font-light" style={{ color: '#9e8070', fontFamily: "'Montserrat', sans-serif" }}>
              Мы с нетерпением ждём встречи с вами 6 июня.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#9e8070', fontFamily: "'Montserrat', sans-serif" }}>
                Ваше имя
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Иван Иванов"
                className="w-full px-4 py-3 text-sm outline-none border-b bg-transparent focus:border-rose-300 transition-colors"
                style={{ borderBottom: '1px solid #e8d5c8', color: '#4a3728', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#9e8070', fontFamily: "'Montserrat', sans-serif" }}>
                Вы придёте?
              </label>
              <div className="flex gap-6">
                {[{ val: "yes", label: "С радостью!" }, { val: "no", label: "К сожалению, нет" }].map(opt => (
                  <label key={opt.val} className="flex items-center gap-2 cursor-pointer text-sm font-light" style={{ color: '#4a3728', fontFamily: "'Montserrat', sans-serif" }}>
                    <input
                      type="radio"
                      name="attending"
                      value={opt.val}
                      checked={form.attending === opt.val}
                      onChange={e => setForm({ ...form, attending: e.target.value })}
                      className="accent-rose-300"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            {form.attending === "yes" && (
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#9e8070', fontFamily: "'Montserrat', sans-serif" }}>
                  Количество гостей (включая вас)
                </label>
                <select
                  value={form.guests}
                  onChange={e => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 text-sm outline-none border-b bg-transparent"
                  style={{ borderBottom: '1px solid #e8d5c8', color: '#4a3728', fontFamily: "'Montserrat', sans-serif" }}
                >
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#9e8070', fontFamily: "'Montserrat', sans-serif" }}>
                Пожелание паре (необязательно)
              </label>
              <textarea
                value={form.comment}
                onChange={e => setForm({ ...form, comment: e.target.value })}
                placeholder="Ваши тёплые слова..."
                rows={3}
                className="w-full px-4 py-3 text-sm outline-none border-b bg-transparent resize-none"
                style={{ borderBottom: '1px solid #e8d5c8', color: '#4a3728', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}
              />
            </div>

            {error && (
              <p className="text-xs text-center" style={{ color: '#c4977a', fontFamily: "'Montserrat', sans-serif" }}>{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full py-4 text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-80 disabled:opacity-50"
              style={{ backgroundColor: '#4a3728', color: '#fdf8f5', fontFamily: "'Montserrat', sans-serif" }}
            >
              {loading ? 'Отправляем...' : 'Подтвердить присутствие'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}