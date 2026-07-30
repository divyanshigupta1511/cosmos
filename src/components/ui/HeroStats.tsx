"use client";

import StatCard from "@/components/ui/StatCard";

const stats = [
  {
    number: "50+",
    label: "Projects",
  },
  {
    number: "30+",
    label: "Clients",
  },
  {
    number: "98%",
    label: "Success",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-6">
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