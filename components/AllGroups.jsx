import Image from 'next/image';
import Link from 'next/link';
import { allCountries } from '@/data/countriesSquad';
import convertToTitleCase from '@/utils/convertToTitleCase';
import convertToCamelCase from '@/utils/convertToCamelCase';
export default function AllGroups() {
  function groupByGroup(countries) {
    return countries.reduce((result, country) => {
      let group = country.group;
      let { name, flag } = country;
      let newCountry = { name, flag };
      (result[group] = result[group] || []).push(newCountry);
      return result;
    }, {});
  }
  let allGroups = groupByGroup(allCountries);

  return (
    <section className=" bg-neutral-900 py-2 sm:px-4 sm:py-8 sm:pb-28">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-[38rem]  lg:max-w-[100rem] ">
        <h1 className="text-6xl text-gray-300">Groups</h1>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-3  ">
          {Object.entries(allGroups).map(([group, countries]) => {
            return (
              <div
                key={group}
                className="flex flex-col rounded-3xl border border-gray-400  bg-neutral-950 py-4 px-8 shadow-sm transition duration-300  "
              >
                <h3 className="mt-2 text-4xl text-gray-200">
                  <Link
                    className="cursor-pointer tracking-tight text-rose-700 hover:text-rose-900 transition duration-300"
                    href={`/groups/${convertToCamelCase(group)}`}
                  >
                    {convertToTitleCase(group)}
                  </Link>
                </h3>
                {Object.entries(countries).map(([country, data]) => (
                  <div
                    key={country}
                    className="flex items-center pt-6 gap-4 xl:gap-8 px-8 sm:px-4 md:6px xl:px-8 "
                  >
                    <Link href={`/countries/${convertToCamelCase(data.name)}`}>
                      <span className="inline-flex items-center justify-center rounded-lg bg-zinc-300/10 p-1 shadow-lg group hover:bg-gray-700 transition duration-300">
                        <div className="flag-container rounded-lg cursor-pointer w-12 sm:w-16  md:w-20 xl:w-28">
                          <Image
                            src={data.flag}
                            alt="Country Flag"
                            className="rounded-lg object-contain w-full h-full"
                            unoptimized
                          />
                        </div>
                      </span>
                    </Link>
                    <h3 className="text-gray-300 text-lg sm:text-2xl cursor-pointer">
                      <Link
                        href={`/countries/${convertToCamelCase(data.name)}`}
                      >
                        <span className="whitespace-nowrap">{data.name}</span>
                      </Link>
                    </h3>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
