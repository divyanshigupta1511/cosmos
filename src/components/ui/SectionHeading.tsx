interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}