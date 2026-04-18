export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between" style={{ backgroundColor: '#2c1f18' }}>
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase tracking-widest text-xs" style={{ color: '#c4977a', fontFamily: "'Montserrat', sans-serif" }}>Навигация</h3>
                <a
                  href="#details"
                  className="transition-colors duration-300 text-sm sm:text-base font-light hover:opacity-60"
                  style={{ color: '#f5ede8', fontFamily: "'Montserrat', sans-serif" }}
                >
                  Программа
                </a>
                <a
                  href="#dresscode"
                  className="transition-colors duration-300 text-sm sm:text-base font-light hover:opacity-60"
                  style={{ color: '#f5ede8', fontFamily: "'Montserrat', sans-serif" }}
                >
                  Дресс-код
                </a>
                <a
                  href="#rsvp"
                  className="transition-colors duration-300 text-sm sm:text-base font-light hover:opacity-60"
                  style={{ color: '#f5ede8', fontFamily: "'Montserrat', sans-serif" }}
                >
                  RSVP
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase tracking-widest text-xs" style={{ color: '#c4977a', fontFamily: "'Montserrat', sans-serif" }}>Место</h3>
                <span className="text-sm sm:text-base font-light" style={{ color: '#f5ede8', fontFamily: "'Montserrat', sans-serif" }}>ул. Ленина, 94</span>
                <span className="text-sm sm:text-base font-light" style={{ color: '#f5ede8', fontFamily: "'Montserrat', sans-serif" }}>База «Айвенго»</span>
                <span className="text-sm sm:text-base font-light" style={{ color: '#f5ede8', fontFamily: "'Montserrat', sans-serif" }}>6 июня 2026</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-light italic tracking-wide" style={{ color: '#c4977a' }}>
                Д&nbsp;&amp;&nbsp;Н
              </h1>
              <p className="text-sm sm:text-base font-light" style={{ color: '#9e8070', fontFamily: "'Montserrat', sans-serif" }}>С любовью и нетерпением</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}