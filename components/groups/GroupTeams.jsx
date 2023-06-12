import Image from "next/image";
import Link from "next/link";
import { allCountries } from "@/data/countriesSquad";
import convertToCamelCase from "@/utils/convertToCamelCase";

export default function GroupTeams({ teamNames }) {
  return (
    <div className="flex flex-col rounded-3xl border border-gray-400 bg-neutral-800 py-3 px-4 shadow-sm transition duration-300">
      <h5 className="text-center text-6xl text-rose-700 py-1">Teams</h5>
      <div className="flex flex-col gap-2 ">
        {teamNames.map((name) => (
          <div className="flex gap-5 items-center px-12 py-1 " key={name}>
            <Link href={`/countries/${convertToCamelCase(name)}`}>
              <Image
                src={allCountries.find((country) => country.name === name).flag}
                alt={name}
                unoptimized
                className="rounded-lg min-w-[80px]"
                style={{ width: 100, height: "auto" }}
              />
            </Link>
            <p className="text-xl">
              <Link href={`/countries/${name.toLowerCase()}`}>{name}</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
