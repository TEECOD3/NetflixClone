"use client";
import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import React, { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

type iAppProps = {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  Duration: number;
};

const MovieButtons = ({
  overview,
  youtubeUrl,
  id,
  age,
  title,
  releaseDate,
  Duration,
}: iAppProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className="text-lg font-medium"
        onClick={() => {
          setOpen(true);
        }}
      >
        <PlayCircle className="h-6 w-6 mr-2  " />
        play
      </Button>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        className="text-lg font-medium  bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="h-6 w-6 mr-2 " />
        learn more
      </Button>

      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        key={id}
        release={releaseDate}
        overview={overview}
        title={title}
        youtubeUrl={youtubeUrl}
        duration={Duration}
      />
    </>
  );
};

export default MovieButtons;
