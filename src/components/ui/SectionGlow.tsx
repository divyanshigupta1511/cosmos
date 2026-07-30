interface SectionGlowProps {
  className?: string;
}

export default function SectionGlow({
  className = "",
}: SectionGlowProps) {
  return (
    <div
      className={`
        absolute
        left-1/2
        top-20
        h-[450px]
        w-[450px]
        -translate-x-1/2
        rounded-full
        bg-purple-200/40
        blur-[150px]
        ${className}
      `}
    />
  );
}