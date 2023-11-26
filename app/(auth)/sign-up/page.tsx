import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import React from "react";

import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/Utils/auth";
import { redirect } from "next/navigation";

type Props = {};

const Signup = async (props: Props) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/Home");
  }
  return (
    <div className="mt-24 rounded bg-black/80 max-lg:py-32 py-10 px-6 md:pt-10 md:max-w-sm md:px-14 md:mt-0">
      <form method="post " action="api/auth/signin">
        <h1 className="font-semibold text-3xl text-white">Signup</h1>
        <div className="space-y-4 mt-5">
          <Input
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-500 w-full inline-block"
            type="email"
            name="email"
            placeholder="Email"
          />
          <Button className="bg-[#e50914] w-full " variant="destructive">
            signup
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2">
        Already have a account?{" "}
        <Link href="/login" className="text-white hover:underline">
          Login now
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  );
};

export default Signup;
