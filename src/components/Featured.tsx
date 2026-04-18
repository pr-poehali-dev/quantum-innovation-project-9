export default function Featured() {
  const schedule = [
    { time: "13:30", label: "Сбор гостей", desc: "ул. Ленина, 94" },
    { time: "15:00", label: "Начало праздника", desc: "База отдыха «Айвенго»" },
    { time: "17:00", label: "Общая фотосессия", desc: "Вместе запечатлеем этот день" },
  ];

  return (
    <div id="details" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{ backgroundColor: '#fdf8f5' }}>
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/4bdc9d0f-dff4-4977-9f32-24463f5c9ef9/files/5f75493f-a661-4699-984d-bd1f8a3ed09d.jpg"
          alt="Свадебные детали"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <p className="uppercase mb-6 text-xs tracking-[0.3em] text-rose-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>Программа торжества</p>
        <div className="flex flex-col gap-6 mb-10">
          {schedule.map((item) => (
            <div key={item.time} className="flex items-start gap-6 pb-6" style={{ borderBottom: '1px solid #f0e6e0' }}>
              <span className="text-3xl lg:text-4xl font-light italic w-24 shrink-0" style={{ color: '#c4977a' }}>{item.time}</span>
              <div>
                <p className="text-xl lg:text-2xl font-light" style={{ color: '#4a3728' }}>{item.label}</p>
                <p className="text-sm mt-1 font-light" style={{ color: '#9e8070', fontFamily: "'Montserrat', sans-serif" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed font-light" style={{ color: '#9e8070', fontFamily: "'Montserrat', sans-serif" }}>
          Специальный автобус отправится с ул. Ленина, 94 и доставит<br className="hidden lg:block" /> всех гостей до базы отдыха «Айвенго» к 15:00.
        </p>
      </div>
    </div>
  );
}