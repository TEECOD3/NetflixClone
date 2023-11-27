import { getServerSession } from "next-auth";
import { authOptions } from "./Utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  return redirect("/Home");
}
