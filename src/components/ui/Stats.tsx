"use client";

const stats = [
  {
    value: "50+",
    label: "Projects",
  },
  {
    value: "30+",
    label: "Clients",
  },
  {
    value: "98%",
    label: "Success",
  },
];

export default function Stats() {
  return (
    <div
      className="
      mt-14
      grid
      max-w-lg
      grid-cols-3
      gap-6
      "
    >
      {stats.map((item) => (
        <div key={item.label}>
          <h3
            className="
            text-3xl
            font-bold
            text-gray-900
            "
          >
            {item.value}
          </h3>

          <p
            className="
            text-sm
            text-gray-500
            "
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}