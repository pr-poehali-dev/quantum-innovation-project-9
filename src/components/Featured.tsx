export default function Featured() {
  const schedule = [
    { time: "13:30", label: "Сбор гостей", desc: "ул. Ленина, 94" },
    { time: "15:00", label: "Начало праздника", desc: "База отдыха «Айвенго»" },
    { time: "17:00", label: "Общая фотосессия", desc: "Вместе запечатлеем этот день" },
  ];

  return (
    <div id="details" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Свадебный пейзаж"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-6 text-sm tracking-widest text-neutral-500">Программа торжества</h3>
        <div className="flex flex-col gap-6 mb-10">
          {schedule.map((item) => (
            <div key={item.time} className="flex items-start gap-6 border-b border-neutral-100 pb-6">
              <span className="text-2xl lg:text-3xl font-bold text-neutral-900 w-20 shrink-0">{item.time}</span>
              <div>
                <p className="text-lg lg:text-xl font-semibold text-neutral-900">{item.label}</p>
                <p className="text-sm text-neutral-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-500 leading-relaxed">
          Специальный автобус отправится с ул. Ленина, 94 и доставит всех гостей до базы отдыха «Айвенго» к 15:00.
        </p>
      </div>
    </div>
  );
}