import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/4bdc9d0f-dff4-4977-9f32-24463f5c9ef9/files/549b8313-5151-430a-bbc1-a82a29d85147.jpg"
          alt="Свадебная церемония"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-8 opacity-80 font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          6 июня 2026 года
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light italic tracking-wide mb-6 leading-none">
          Дмитрий<br /><span className="not-italic font-thin opacity-70">&amp;</span><br />Нина
        </h1>
        <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
        <p className="text-base md:text-lg max-w-lg mx-auto opacity-85 font-light leading-relaxed">
          Дорогие наши близкие и друзья, с огромной радостью<br className="hidden md:block" />
          приглашаем вас разделить с нами самый счастливый день
        </p>
        <a
          href="#details"
          className="inline-block mt-10 text-xs uppercase tracking-[0.3em] border border-white/50 px-8 py-3 hover:bg-white/10 transition-all duration-300"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Детали торжества
        </a>
      </div>
    </div>
  );
}