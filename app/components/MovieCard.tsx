"use client";
import { Button } from "@/components/ui/button";
import { Heart, HeartIcon, PlayCircle } from "lucide-react";
import React, { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";
import { addtowatchlist, deletefromwatchlist } from "../action";
import { usePathname } from "next/navigation";

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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="-mt-14">
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        <PlayCircle className="h-12 w-12" />
      </button>

      <div className="right-5 top-5 absolute z-[14] ">
        {WatchList ? (
          <form action={deletefromwatchlist}>
            <input type="hidden" name="Watchlistid" value={Watchlistid} />
            <input type="hidden" name="pathname" value={pathname} />
            <Button variant="outline" size="icon">
              <HeartIcon
                className=" w-4 h-4  transition-colors duration-200 ease-in-out "
                color="red"
              />
            </Button>
          </form>
        ) : (
          <form action={addtowatchlist}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathname" value={pathname} />
            <Button variant="outline" size="icon">
              <Heart className=" w-4 h-4 " />
            </Button>
          </form>
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

      <PlayVideoModal
        youtubeUrl={youtubeUrl}
        title={title}
        overview={overview}
        key={movieId}
        state={open}
        changeState={setOpen}
        age={age}
        duration={time}
        release={year}
      />
    </div>
  );
};

export default MovieCard;
