interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-light">Дмитрий & Нина</div>
        <nav className="flex gap-6 md:gap-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <a
            href="#details"
            className="text-white hover:text-white/60 transition-colors duration-300 uppercase text-xs tracking-widest"
          >
            Программа
          </a>
          <a
            href="#dresscode"
            className="text-white hover:text-white/60 transition-colors duration-300 uppercase text-xs tracking-widest"
          >
            Дресс-код
          </a>
          <a
            href="#rsvp"
            className="text-white hover:text-white/60 transition-colors duration-300 uppercase text-xs tracking-widest"
          >
            RSVP
          </a>
        </nav>
      </div>
    </header>
  );
}