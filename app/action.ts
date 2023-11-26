"use server";
import { revalidatePath } from "next/cache";
import prisma from "./Utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./Utils/auth";

export async function addtowatchlist(formdata: FormData) {
  "use server";
  const movieid = formdata.get("movieId");
  const pathname = formdata.get("pathname") as string;
  const session = await getServerSession(authOptions);

  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieid),
    },
  });

  revalidatePath(pathname);
}

export async function deletefromwatchlist(formdata: FormData) {
  "use server";
  const watchlistid = formdata.get("Watchlistid") as string;
  const pathname = formdata.get("pathname") as string;

  const data = await prisma.watchList.delete({
    where: {
      id: watchlistid,
    },
  });

  revalidatePath(pathname);
}
