import React from "react";
import Navbar from "../components/Navbar";
import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";
import Mobilenav from "../components/Mobilenav";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <>
      <div className="px-5 lg:px-0">
        <MovieVideo />
        <Mobilenav />
      </div>
      <h1 className="text-3xl font-bold px-5">Recently added</h1>

      <div className="px-5">
        <RecentlyAdded />
      </div>
    </>
  );
};

export default Homepage;
