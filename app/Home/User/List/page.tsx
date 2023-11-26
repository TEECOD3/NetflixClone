import { authOptions } from "@/app/Utils/auth";
import prisma from "@/app/Utils/db";
import MovieCard from "@/app/components/MovieCard";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const getdata = async (userid: string) => {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userid,
    },
    select: {
      Movie: {
        select: {
          age: true,
          duration: true,
          id: true,
          overview: true,
          title: true,
          release: true,
          youtubeString: true,
          imageString: true,
          WatchLists: true,
        },
      },
    },
  });

  return data;
};
type Props = {};

const WatchList = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const data = await getdata(session?.user?.email as string);

  return (
    <>
      <h1 className="text-white text-4xl underline mt-10 font-bold px-5 sm:px-0 capitalize">
        your watchlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
        {data.map((movie) => (
          <div key={movie.Movie?.id} className="relative h-60">
            <Image
              src={movie.Movie?.imageString as string}
              alt={movie.Movie?.title as string}
              width={500}
              height={500}
              className="rounded-sm absolute w-full h-full object-cover"
            />
            <div className="h-60 relative w-full ease-in-out cursor-pointer transform transition z-10 duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
                <Image
                  src={movie.Movie?.imageString as string}
                  alt="Movie"
                  width={800}
                  height={800}
                  className="rounded-lg -z-10 absolute w-full h-full object-cover"
                ></Image>
                <MovieCard
                  movieId={movie.Movie?.id as number}
                  overview={movie.Movie?.overview as string}
                  title={movie.Movie?.title as string}
                  Watchlistid={movie.Movie?.WatchLists[0]?.id as string}
                  youtubeUrl={movie.Movie?.youtubeString as string}
                  WatchList={
                    (movie.Movie?.WatchLists.length as number) > 0
                      ? true
                      : false
                  }
                  key={movie.Movie?.id}
                  year={movie.Movie?.release as number}
                  time={movie.Movie?.duration as number}
                  age={movie.Movie?.age as number}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchList;
