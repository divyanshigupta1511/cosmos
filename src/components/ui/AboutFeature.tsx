"use client";

interface AboutFeatureProps {
  number: string;
  title: string;
  description: string;
}

export default function AboutFeature({
  number,
  title,
  description,
}: AboutFeatureProps) {
  return (
    <div
  className="
    rounded-2xl
    bg-purple-50
    p-4
    sm:p-5
  "
>
      <p
  className="
    text-sm
    font-semibold
    text-gray-900
    sm:text-base
  "
>
        {number} — {title}
      </p>

     <p
  className="
    mt-2
    text-sm
    leading-6
    text-gray-600
    sm:text-base
  "
>
        {description}
      </p>
    </div>
  );
}