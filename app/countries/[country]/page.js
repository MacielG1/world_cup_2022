import { allCountries } from "@/data/countriesSquad.js";
import convertToTitleCase from "@/utils/convertToTitleCase";
import TeamMatches from "@/components/teams/TeamMatches";
import Image from "next/image";

export async function generateStaticParams() {
  let allCountriesNames = allCountries.map((c) => c.name);

  return allCountriesNames.map((c) => ({ params: { country: c } }));
}

export default function page({ params }) {
  let { country } = params;
  let selectedCountry = convertToTitleCase(country);

  const countrySquad = allCountries.find((c) => c.name === selectedCountry).squad;

  return (
    <div className="bg-neutral-900 text-white h-screen">
      <div className="  max-w-md xs:max-w-[38rem]  sm:max-w-[48rem] lg:max-w-[78rem] mx-auto bg-neutral-900">
        <div className="flex gap-3 justify-center py-4">
          <h2 className="text-center text-5xl py-2 ">{selectedCountry}</h2>
          <Image
            src={allCountries.find((c) => c.name === selectedCountry).flag}
            alt="Country Flag"
            className="rounded-sm cursor-pointer  min-w-[60px]"
            unoptimized
            style={{ width: 100, height: "auto" }}
          />
        </div>
        <div className="container mx-auto">
          <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {Object.entries(countrySquad).map(([position, players], index) => (
              <div className="" key={position}>
                <h2 className="text-center bg-rose-800 text-white py-2 rounded-t-lg">{position}</h2>
                {players.map((player) => (
                  <div className="flex justify-between bg-white last:rounded-b-lg border-b border-gray-300 p-3 shadow-md" key={player.name}>
                    <span className="text-gray-900 font-semibold text-left ">{player.name}</span>
                    <span className="text-gray-600 text-right">{player.club}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <TeamMatches country={selectedCountry} />
    </div>
  );
}
