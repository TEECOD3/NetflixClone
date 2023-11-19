"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";

type Props = {};

const GithubSignInButton = (props: Props) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="w-10 h-10"
      onClick={() => {
        signIn("github");
      }}
    >
      <GithubIcon />
    </Button>
  );
};

export default GithubSignInButton;
