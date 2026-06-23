"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 5000, suffix: "+", label: "Happy Clients" },
  { value: 4.4, suffix: "★", label: "Google Rating" },
];

function useCountUp(target: number, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return { count, ref };
}

function StatItem({ stat }: { stat: (typeof stats)[0] }) {
  const decimals = stat.value % 1 !== 0 ? 1 : 0;
  const { count, ref } = useCountUp(stat.value, 2200, decimals);

  return (
    <div ref={ref} className="text-center px-6 py-4">
      <div className="font-playfair font-bold text-[#000000]" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
        {decimals > 0 ? count.toFixed(1) : Math.round(count)}
        <span className="text-[#B89A7A]">{stat.suffix}</span>
      </div>
      <p className="font-montserrat text-sm tracking-widest uppercase text-[#6B665F] mt-2">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#FFFFFF] section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-[#B89A7A] text-center mb-4">
          Our Story in Numbers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E7E2D8]">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
