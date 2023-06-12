import { allMatches } from "@/data/allMatches";
import Image from "next/image";
import { allCountries } from "@/data/countriesSquad";

export default function TeamMatches({ country }) {
  const teamMatches = allMatches.filter((match) => match.homeTeam === country || match.awayTeam === country);
  return (
    <section className="bg-neutral-900 py-2 sm:px-4 sm:py-6 sm:pb-28">
      <h2 className="text-5xl text-center text-white">Matches</h2>
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-[38rem] lg:max-w-[70rem] mt-8">
        {teamMatches.map((match) => {
          let newDate = new Date(match.date);
          let date = newDate.toLocaleDateString([], { hour: "2-digit", minute: "2-digit" }).replaceAll(",", " - ");
          let day = new Date(match.date).toDateString().split(" ")[0];
          return (
            <div className="bg-neutral-300 rounded-lg shadow-md mb-4 overflow-hidden" key={match.matchNumber}>
              <div className="flex items-center justify-between bg-gray-200 border-b border-gray-300 px-4 py-2">
                <div className="text-sm text-gray-800 whitespace-nowrap">
                  {date} {day}
                </div>
                <div className="text-sm text-gray-800 whitespace-nowrap">{match.group}</div>
              </div>
              <div className="grid grid-cols-3 gap-4 px-4 py-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={allCountries.find((country) => country.name === match.homeTeam).flag}
                    alt={match.homeTeam}
                    width={40}
                    height={40}
                    className="border border-neutral-300 min-w-[40px]"
                  />
                  <div className="text-sm text-gray-800">{match.homeTeam}</div>
                </div>
                <div className="text-lg text-gray-800 font-semibold text-center col-span-1">
                  {match.score.home} <span className="text-xs px-2">vs</span> {match.score.away}
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <div className="text-sm text-gray-800">{match.awayTeam}</div>
                  <Image
                    src={allCountries.find((country) => country.name === match.awayTeam).flag}
                    alt={match.awayTeam}
                    width={40}
                    height={40}
                    className="border border-neutral-300 min-w-[40px]"
                  />
                </div>
              </div>
              <div className="bg-neutral-200 border-t border-gray-300 px-4 py-2">
                <div className="text-sm text-gray-800 whitespace-nowrap">{match.stadium}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
