"use client";

import StatCard from "@/components/ui/StatCard";

const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
  },
  {
    number: "25+",
    label: "Happy Clients",
  },
  {
    number: "5+",
    label: "Years Experience",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
  },
];

export default function AboutStats() {
  return (
   <div
  className="
    mt-10
    grid
    grid-cols-2
    gap-4
    sm:gap-6
    lg:mt-14
"
>
      {stats.map((item) => (
        <StatCard
          key={item.label}
          number={item.number}
          label={item.label}
        />
      ))}
    </div>
  );
}