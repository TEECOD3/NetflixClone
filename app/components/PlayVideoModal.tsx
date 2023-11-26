import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React from "react";

interface IAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
}

const PlayVideoModal = ({
  changeState,
  overview,
  youtubeUrl,
  age,
  duration,
  release,
  state,
  title,
}: IAppProps) => {
  return (
    <Dialog
      open={state}
      onOpenChange={() => {
        changeState(!state);
      }}
    >
      <DialogContent className="sm:max-w-6xl ">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{overview}</DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p>{release}</p>
            <p className="font-normal py-0.5 border px-0.5 border-gray-200 rounded text-sm">
              {age}+
            </p>
            <p>{duration}h</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeUrl} height={350} className="w-full"></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default PlayVideoModal;
