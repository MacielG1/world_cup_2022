"use client";
import { allCountries } from "@/data/countriesSquad.js";
import Image from "next/image";
import Link from "next/link";
import convertToCamelCase from "@/utils/convertToCamelCase.js";
export default function AllCountries({ showAllCountries }) {
  const panelStyle = {
    maxHeight: showAllCountries ? "1000px" : "0",
    transition: `max-height ${showAllCountries ? "0.45s" : "0.15s ease-out"}`,
    overflow: "hidden",
  };
  return (
    <div className="bg-neutral-900 py-4">
      <div className="bg-neutral-900 w-full " style={panelStyle}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 xs:grid-cols-4  sm:grid-cols-8 lg:grid-cols-16 items-center justify-center gap-4">
          {allCountries.map((country) => {
            return (
              <div className="flex flex-col items-center justify-center gap-2 " key={country.name}>
                <Link href={`/countries/${convertToCamelCase(country.name)}`}>
                  <Image src={country.flag} alt={country.name} unoptimized className="rounded-md " style={{ width: 30, height: 25 }} />
                </Link>

                <Link href={`/countries/${convertToCamelCase(country.name)}`}>
                  <span className="text-gray-300 text-sm whitespace-nowrap">{country.name} </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
