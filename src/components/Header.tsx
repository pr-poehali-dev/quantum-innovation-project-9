interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-light">Дмитрий & Нина</div>
        <nav className="flex gap-8">
          <a
            href="#details"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Детали
          </a>
          <a
            href="#dresscode"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Дресс-код
          </a>
        </nav>
      </div>
    </header>
  );
}