import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/4bdc9d0f-dff4-4977-9f32-24463f5c9ef9/files/3822a8c1-a6c7-4db5-9d9f-c44023727825.jpg"
            alt="Свадебный ужин"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <h3 id="dresscode" className="absolute top-12 left-6 text-white uppercase z-10 text-xs tracking-[0.3em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Дресс-код & пожелания
      </h3>

      <div className="absolute bottom-12 left-6 z-10 text-left max-w-xs sm:max-w-md md:max-w-lg">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic leading-snug mb-5">
          Нежные светлые оттенки — наш дресс-код.
        </p>
        <p className="text-white/80 text-sm md:text-base leading-relaxed font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Мы мечтаем о тёплой, душевной и по-особенному нежной атмосфере —<br />
          поэтому просим воздержаться от возгласов «Горько!».<br className="hidden md:block" />
          <br />
          Если вы захотите порадовать нас подарком —<br />
          будем искренне благодарны вашей щедрости в денежном эквиваленте.
        </p>
      </div>
    </div>
  );
}