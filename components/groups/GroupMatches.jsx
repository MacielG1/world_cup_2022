import Image from "next/image";
import Link from "next/link";
import { allCountries } from "@/data/countriesSquad";

export default function GroupMatches({ groupMatches }) {
  return (
    <div className="mt-3 pb-10 sm:max-w-[45rem] lg:max-w-[60rem] mx-auto">
      <h5 className="text-center text-6xl text-rose-700 py-1">{groupMatches[0].group} Matches</h5>
      <div className="flex flex-col rounded-3xl border mt-3 border-gray-400 bg-neutral-800 py-3 px-4 shadow-sm transition duration-300">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-[38rem] lg:max-w-[70rem] mt-8">
          {groupMatches.map((match) => {
            let newDate = new Date(match.date);
            let date = newDate.toLocaleDateString([], { hour: "2-digit", minute: "2-digit" }).replaceAll(",", " - ");
            let day = new Date(match.date).toDateString().split(" ")[0];
            return (
              <div className="bg-gray-300 rounded-lg shadow-md mb-4 overflow-hidden" key={match.matchNumber}>
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
                      className="border border-neutral-300 min-w-[30px]"
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
                      className="border border-neutral-300 min-w-[30px]"
                    />
                  </div>
                </div>
                <div className="bg-gray-200 border-t border-gray-300 px-4 py-2">
                  <div className="text-sm text-gray-800 whitespace-nowrap">{match.stadium}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
