import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import { authOptions } from "../Utils/auth";
import Navbar from "../components/Navbar";

type Props = {
  children: ReactNode;
};

const Homelayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
};

export default Homelayout;
