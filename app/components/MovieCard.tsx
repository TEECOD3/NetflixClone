import { Button } from "@/components/ui/button";
import { time } from "console";
import { Heart, PlayCircle } from "lucide-react";
import React from "react";

interface iAppsProps {
  title: string;
  overview: string;
  movieId: number;
  WatchList: boolean;
  Watchlistid: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}
const MovieCard = ({
  movieId,
  overview,
  year,
  age,
  title,
  time,
  WatchList,
  Watchlistid,
  youtubeUrl,
}: iAppsProps) => {
  return (
    <div className="-mt-14">
      <button>
        <PlayCircle className="h-12 w-12" />
      </button>

      <div className="right-5 top-5 absolute z-10 ">
        {WatchList ? (
          <Button variant="outline" size="icon">
            <Heart className="text-red-400 w-4 h-4 " />
          </Button>
        ) : (
          <Button variant="outline" size="icon">
            <Heart className=" w-4 h-4 " />
          </Button>
        )}
      </div>

      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal py-0.5 border px-0.5 border-gray-200 rounded text-sm">
            {age}+
          </p>
          <p className="font-normal text-sm ">{time}</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
