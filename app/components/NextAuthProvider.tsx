"use client";
import { SessionProvider } from "next-auth/react";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const NextAuthProvider = (props: Props) => {
  const { children } = props;
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
