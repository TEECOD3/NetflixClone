import { authOptions } from "@/app/Utils/auth";
import prisma from "@/app/Utils/db";
import { getServerSession } from "next-auth";
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
  const session = getServerSession(authOptions);
  const data = getdata("abc");
  return <div>WatchList</div>;
};

export default WatchList;
