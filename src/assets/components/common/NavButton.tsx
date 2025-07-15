
interface NavButtonProps {
  id: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: (id: string) => void;
}

const NavButton: React.FC<NavButtonProps> = ({ id, icon: Icon, label, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
      active 
        ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-2xl shadow-emerald-500/25' 
        : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/50 hover:border-emerald-500/50'
    }`}
  >
    <Icon size={18} className={`transition-transform duration-300 ${active ? 'rotate-12' : 'group-hover:rotate-6'}`} />
    <span className="hidden sm:inline font-semibold">{label}</span>
    {active && (
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl -z-10"></div>
    )}
  </button>
);

export default NavButton;
