import React from "react";
import { getServerSession } from "next-auth/next";

type Props = {};

const Homepage = (props: Props) => {
  return <div>Hello authenticated user</div>;
};

export default Homepage;
