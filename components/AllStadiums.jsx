import { stadiums } from "@/data/stadiums";
import Image from "next/image";

export default function AllStadiums() {
  return (
    <div className="bg-neutral-900 ">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-[40rem]  lg:max-w-[70rem] pb-11 ">
        {stadiums.map((stadium, i) => (
          <div className="bg-neutral-700 text-white rounded-lg shadow-lg shadow-neutral-800  p-2 mb-5" key={i}>
            <div className="flex flex-col sm:flex-row justify-between items-center ">
              <div className="flex flex-col mx-auto gap-2 justify-between items-center p-4">
                <h3 className="text-2xl sm:text-4xl font-bold mb-2 text-center text-gray-300">{stadium.name}</h3>
                <p className="flex gap-4 items-center  ">
                  <span className="text-neutral-300">City</span>
                  <span className="font-semibold text-2xl tracking-wide ">{stadium.city}</span>
                </p>
                <p className="flex gap-4 items-center   ">
                  <span className="text-neutral-300">Capacity</span>
                  <span className="font-semibold text-2xl tracking-wide">{stadium.capacity}</span>
                </p>
                <p className="flex gap-4 items-center   ">
                  <span className="text-neutral-300">Number of Matches</span>
                  <span className="font-semibold text-2xl tracking-wide">{stadium.numOfMatches}</span>
                </p>
                {stadium.bigMatches.length > 0 && (
                  <div className="flex py-2 justify-center gap-2">
                    {stadium.bigMatches.map((match) => (
                      <div className="flex bg-gray-100 rounded-lg py-1 px-2 sm:py-2 sm:px-4 items-center justify-center" key={stadium.name + match}>
                        <span className="text-gray-800 font-semibold">{match}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <Image className="w-[25rem] h-fit  object-cover rounded-md" src={stadium.img} alt={stadium.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
