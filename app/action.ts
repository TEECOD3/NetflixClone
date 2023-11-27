"use server";
import { revalidatePath } from "next/cache";
import prisma from "./Utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./Utils/auth";
import { redirect } from "next/navigation";

export async function addtowatchlist(formdata: FormData) {
  "use server";
  const movieId = formdata.get("movieId");
  const pathname = formdata.get("pathname") as string;
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
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
