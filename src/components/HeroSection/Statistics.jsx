import { statistics } from "../../constants";

export default function Statistics() {
  return (
    <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
      {statistics.map((stat) => (
        <div key={stat.label}>
          <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
          <p className="font-montserrat text-slate-gray leading-7">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
