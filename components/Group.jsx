import fsPromises from "fs/promises";
import path from "path";
import convertToTitleCase from "@/utils/convertToTitleCase";
import { allCountries } from "@/data/countriesSquad";
import { allMatches } from "@/data/allMatches";
import Image from "next/image";
import Link from "next/link";
import convertToCamelCase from "@/utils/convertToCamelCase";
async function getGroup(group) {
  const filePath = path.join(process.cwd(), "data", "db.json");

  let res = await fsPromises.readFile(filePath, "utf8");
  let parsedData = JSON.parse(res);
  let groupData = parsedData.standings.find((standing) => standing.group === group);
  return groupData;
}

export async function generateStaticParams() {
  let allGroups = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return allGroups.map((g) => ({ params: { group: `group${g}` } }));
}

export default async function page({ params }) {
  let data = await getGroup(params.group);

  let teamNames = data?.table?.map((team) => team.team.name);
  // find all matchesm for this group
  let groupMatches = allMatches.filter((match) => match.group === convertToTitleCase(params.group));

  return (
    <div className="bg-neutral-900 text-white h-full">
      <div className="  max-w-md xs:max-w-[40rem] lg:max-w-[80rem] mx-auto">
        <h2 className="text-center text-5xl py-2">{convertToTitleCase(data.group)}</h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:gap-10 lg:grid-cols-3 pb-5">
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
                    <Link href={`/countries/${convertToCamelCase(name)}`}>{name}</Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col col-span-2 rounded-3xl border border-gray-400 bg-neutral-800 py-4 px-4 shadow-sm transition duration-300 ">
            <h5 className="text-center text-6xl text-rose-700 ">Standings</h5>
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-4 lg:-mx-8 ">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg ">
                    <table className="min-w-full divide-y divide-gray-400  ">
                      <thead className="bg-rose-800 ">
                        <tr className="divide-x divide-gray-500 text-gray-200 over">
                          <th scope="col" className="py-3.5 pl-2 pr-2  text-sm font-semibold  text-center align-middle sm:pl-2">
                            Team
                          </th>
                          <th scope="col" className="px-1 py-3.5  text-sm font-semibold  text-center align-middle ">
                            Points
                          </th>
                          <th scope="col" className="px-1 py-3.5  text-sm font-semibold  text-center align-middle ">
                            GP
                          </th>
                          <th scope="col" className="py-3.5 pl-2 pr-2  text-sm font-semibold  text-center align-middle sm:pr-2">
                            W
                          </th>
                          <th scope="col" className="py-3.5 pl-2 pr-2  text-sm font-semibold  text-center align-middle sm:pr-2">
                            L
                          </th>
                          <th scope="col" className="py-3.5 pl-2 pr-2  text-sm font-semibold  text-center align-middle sm:pr-2">
                            D
                          </th>
                          <th scope="col" className="py-3.5 pl-2 pr-2  text-sm font-semibold  text-center align-middle sm:pr-2">
                            GM
                          </th>
                          <th scope="col" className="py-3.5 pl-2 pr-2  text-sm font-semibold  text-center align-middle sm:pr-2">
                            GA
                          </th>
                          <th scope="col" className="py-3.5 pl-2 pr-2  text-sm font-semibold  text-center align-middle sm:pr-2">
                            GD
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-400 bg-gray-200">
                        {data.table.map((team) => (
                          <tr key={team.team.name} className="divide-x divide-gray-500">
                            <td className="whitespace-nowrap p-4 text-sm  text-gray-950 sm:pl-6 flex items-center gap-1 justify-center">
                              <span> {team.team.name}</span>
                              <span>
                                <Image
                                  src={allCountries.find((country) => country.name === team.team.name).flag}
                                  alt={team.team.name}
                                  unoptimized
                                  className="min-w-[20px]"
                                  style={{ width: 15, height: "auto" }}
                                />
                              </span>
                            </td>
                            <td className="whitespace-nowrap p-4 text-center align-middle text-sm text-neutral-950">{team.points}</td>
                            <td className="whitespace-nowrap p-4  text-center align-middle text-sm text-neutral-950">{team.playedGames}</td>
                            <td className="whitespace-nowrap p-4   text-center align-middle text-sm text-neutral-950">{team.won}</td>
                            <td className="whitespace-nowrap p-4   text-center align-middle text-sm text-neutral-950">{team.lost}</td>
                            <td className="whitespace-nowrap p-4   text-center align-middle text-sm text-neutral-950">{team.draw}</td>
                            <td className="whitespace-nowrap p-4   text-center align-middle text-sm text-neutral-950">{team.goalsFor}</td>
                            <td className="whitespace-nowrap p-4   text-center align-middle text-sm text-neutral-950">{team.goalsAgainst}</td>
                            <td className="whitespace-nowrap p-4   text-center align-middle text-sm text-neutral-950">{team.goalDifference}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 pb-10 sm:max-w-[45rem] lg:max-w-[60rem] mx-auto">
          <h5 className="text-center text-6xl text-rose-700 py-1">{convertToTitleCase(data.group)} Matches</h5>
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
                    <div className="bg-gray-200 border-t border-gray-300 px-4 py-2">
                      <div className="text-sm text-gray-800 whitespace-nowrap">{match.stadium}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
