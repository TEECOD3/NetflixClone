import React from "react";
import Navbar from "../components/Navbar";
import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="px-5 lg:px-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold">Recently added</h1>
      <RecentlyAdded />
    </div>
  );
};

export default Homepage;
