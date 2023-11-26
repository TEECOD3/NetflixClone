import { authOptions } from "@/app/Utils/auth";
import prisma from "@/app/Utils/db";
import MovieCard from "@/app/components/MovieCard";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const getdata = async (category: string, userid: string) => {
  switch (category) {
    case "Shows": {
      const data = prisma.movie.findMany({
        where: { category: "show" },
        select: {
          age: true,
          duration: true,
          id: true,
          overview: true,
          title: true,
          release: true,
          youtubeString: true,
          imageString: true,
          WatchLists: {
            where: {
              userId: userid,
            },
          },
        },
      });
      return data;
    }
    case "Movies": {
      const data = prisma.movie.findMany({
        where: {
          category: "movie",
        },

        select: {
          age: true,
          duration: true,
          id: true,
          overview: true,
          title: true,
          release: true,
          youtubeString: true,
          imageString: true,
          WatchLists: {
            where: {
              userId: userid,
            },
          },
        },
      });
      return data;
    }

    case "RecentlyAdded": {
      const data = prisma.movie.findMany({
        where: { category: "recent" },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          overview: true,
          release: true,
          youtubeString: true,
          imageString: true,
          WatchLists: {
            where: {
              userId: userid,
            },
          },
        },
      });
      return data;
    }

    default: {
      throw new Error("there was an error ");
    }
  }
};

type Props = {
  params: {
    genre: string;
  };
};
const CategoryPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);
  const data = await getdata(params.genre, session?.user?.email as string);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-60">
          <Image
            src={movie.imageString}
            alt={movie.title}
            width={500}
            height={500}
            className="rounded-sm absolute w-full h-full object-cover"
          />
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

export default CategoryPage;
