import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../Utils/auth";

type Props = {};

const EmailAndName = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      <p>{session?.user?.email}</p>
    </div>
  );
};

export default EmailAndName;
