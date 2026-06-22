const keywords = [
  "Hair",
  "·",
  "Skin",
  "·",
  "Beauty",
  "·",
  "Dressings",
  "·",
  "Wellness",
  "·",
  "Hair",
  "·",
  "Skin",
  "·",
  "Beauty",
  "·",
  "Dressings",
  "·",
  "Wellness",
  "·",
];

export default function Marquee() {
  return (
    <div className="marquee-wrapper border-y border-[#B89A7A]/20">
      <div className="marquee-track">
        {[...keywords, ...keywords].map((word, i) => (
          <span
            key={i}
            className={`font-montserrat text-sm tracking-[0.3em] uppercase mx-6 ${
              word === "·"
                ? "text-[#B89A7A]"
                : "text-[#F7F6F2]/80"
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
