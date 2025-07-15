import { Github, Mail } from 'lucide-react'


export const Footer = () => {
  return (
      <footer className="relative z-10 text-center py-12 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-slate-400 mb-6 text-lg">
            © 2025 Gonzalo Dominguez. Desarrollado con React & TypeScript
          </p>
          <div className="flex justify-center gap-8">
            <a href="mailto:gonzaloemanuel39@gmail.com" className="p-3 bg-slate-800/70 hover:bg-emerald-500/20 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-110">
              <Mail size={24} className="text-slate-400 hover:text-emerald-400 transition-colors" />
            </a>
            <a href="https://github.com/gonzalodominguez39" className="p-3 bg-slate-800/70 hover:bg-emerald-500/20 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-110">
              <Github size={24} className="text-slate-400 hover:text-emerald-400 transition-colors" />
            </a>
          </div>
        </div>
      </footer>
  )
}
