import React from "react";
import prisma from "../Utils/db";
import Image from "next/image";
import MovieCard from "./MovieCard";
import { authOptions } from "../Utils/auth";
import { getServerSession } from "next-auth";

type Props = {};

const getdata = async (userid: string) => {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: {
        where: {
          userId: userid,
        },
      },
      imageString: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
  });

  return data;
};
const RecentlyAdded = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const data = await getdata(session?.user?.email as string);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((movie, id) => (
        <div key={movie.id} className="relative h-48 ">
          <Image
            src={movie.imageString}
            alt="Movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          ></Image>

          <div className="h-60 relative w-full ease-in-out cursor-pointer transform transition z-10 duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
              <Image
                src={movie.imageString}
                alt="Movie"
                width={800}
                height={800}
                className="rounded-lg -z-10 absolute w-full h-full object-cover"
              ></Image>
              <MovieCard
                movieId={movie.id}
                overview={movie.overview}
                title={movie.title}
                Watchlistid={movie.WatchLists[0]?.id}
                youtubeUrl={movie.youtubeString}
                WatchList={movie.WatchLists.length > 0 ? true : false}
                key={movie.id}
                year={movie.release}
                time={movie.duration}
                age={movie.age}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentlyAdded;
