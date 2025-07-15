import { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formsubmit.co/da79e88613df22c68996b907334d40a9", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      }
    } catch (err) {
      // Podrías mostrar un error visual aquí si lo deseas
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative max-w-lg mx-auto bg-gradient-to-br from-emerald-900/90 via-slate-900/95 to-emerald-800/90 p-12 rounded-3xl border-2 border-emerald-500/40 shadow-emerald-400/10 shadow-2xl mt-16 backdrop-blur-xl overflow-hidden">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl animate-pulse z-0" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse z-0" />
      <h2 className="relative z-10 text-4xl font-black text-white mb-10 flex items-center gap-3 tracking-tight drop-shadow-[0_2px_12px_rgba(16,185,129,0.25)]">
        <Mail className="text-emerald-400 drop-shadow-[0_2px_8px_rgba(16,185,129,0.25)]" size={32} />
        ¡Hablemos!
      </h2>
      {sent ? (
        <div className="relative z-10 text-emerald-400 text-xl font-bold flex items-center gap-2 justify-center py-16 animate-fade-in">
          <Send size={26} className="animate-bounce" /> ¡Mensaje enviado! Pronto te responderé.
        </div>
      ) : (
        <form className="relative z-10 space-y-8" onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label className="block text-slate-200 font-bold mb-2 tracking-wide text-lg text-left" htmlFor="name">
              <User className="inline mr-2 text-emerald-400" size={20} />Nombre
            </label>
            <input
              className="w-full px-5 py-3 rounded-2xl bg-slate-900/80 border-2 border-emerald-700/40 focus:border-emerald-400 text-white placeholder:text-slate-500 font-semibold focus:bg-slate-800/80 outline-none transition-all shadow-lg focus:shadow-emerald-500/20 text-lg"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              minLength={2}
              maxLength={40}
            />
          </div>
          <div>
            <label className="block text-slate-200 font-bold mb-2 tracking-wide text-lg text-left" htmlFor="email">
              <Mail className="inline mr-2 text-emerald-400" size={20} />Email
            </label>
            <input
              className="w-full px-5 py-3 rounded-2xl bg-slate-900/80 border-2 border-emerald-700/40 focus:border-emerald-400 text-white placeholder:text-slate-500 font-semibold focus:bg-slate-800/80 outline-none transition-all shadow-lg focus:shadow-emerald-500/20 text-lg"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
              minLength={5}
              maxLength={60}
            />
          </div>
          <div>
            <label className="block text-slate-200 font-bold mb-2 tracking-wide text-lg text-left" htmlFor="message">
              <MessageSquare className="inline mr-2 text-emerald-400" size={20} />Mensaje
            </label>
            <textarea
              className="w-full px-5 py-3 rounded-2xl bg-slate-900/80 border-2 border-emerald-700/40 focus:border-emerald-400 text-white placeholder:text-slate-500 font-semibold focus:bg-slate-800/80 outline-none transition-all min-h-[120px] resize-none shadow-lg focus:shadow-emerald-500/20 text-lg"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Escribe tu mensaje..."
              minLength={10}
              maxLength={500}
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-extrabold rounded-2xl transition-all duration-200 shadow-xl hover:shadow-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 disabled:opacity-60 disabled:cursor-not-allowed text-xl tracking-wide uppercase"
            disabled={loading}
          >
            <Send size={22} className={loading ? 'animate-spin' : 'animate-pulse'} /> {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      )}
    </div>
  );
};


