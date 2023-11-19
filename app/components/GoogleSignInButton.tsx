"use client";
import React from "react";
import googleicon from "../../public/google.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

type Props = {};

const GoogleSignInButton = (props: Props) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="w-10 h-10"
      onClick={() => {
        signIn("google");
      }}
    >
      <Image className="h-6 w-6" src={googleicon} alt="google icon"></Image>
    </Button>
  );
};

export default GoogleSignInButton;
