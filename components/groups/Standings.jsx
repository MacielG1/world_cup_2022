import Image from "next/image";
import Link from "next/link";
import { allCountries } from "@/data/countriesSquad";

export default function Standings({ data }) {
  return (
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
                  {data?.table.map((team) => (
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
  );
}
