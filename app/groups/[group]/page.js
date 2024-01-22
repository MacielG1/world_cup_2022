import fsPromises from "fs/promises";
import path from "path";
import convertToTitleCase from "@/utils/convertToTitleCase";
import { allMatches } from "@/data/allMatches";
import Standings from "@/components/groups/Standings";
import GroupMatches from "@/components/groups/GroupMatches";
import GroupTeams from "@/components/groups/GroupTeams";

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

  let teamNames = data.table.map((team) => team.team.name);

  let groupMatches = allMatches.filter((match) => match.group === convertToTitleCase(params.group));

  return (
    <div className="bg-neutral-900 text-white h-full">
      <div className="  max-w-md xs:max-w-[40rem] lg:max-w-[80rem] mx-auto">
        <h2 className="text-center text-5xl py-2">{convertToTitleCase(data.group)}</h2>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:gap-10 lg:grid-cols-3 pb-5">
          <GroupTeams teamNames={teamNames} />
          <Standings data={data} />
        </div>
        <GroupMatches groupMatches={groupMatches} />
      </div>
    </div>
  );
}
