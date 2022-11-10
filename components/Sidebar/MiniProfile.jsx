import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

export default function MiniProfile() {
  return (
    <div className="hoverEffect text-gray-700 flex items-center justify-start xl:justify-start mt-auto">
      <img src="/logo/user.png" className="h-12 w-12 rounded xl:mr-2"></img>
      <div className="leading-5 hidden xl:inline">
        <h4 className="font-bold  text-gray-700">Ansh Ohri</h4>
        <p className="text-gray-500">@anshohri</p>
      </div>
      <EllipsisHorizontalIcon className="h-7 w-7 self-center xl:ml-8 hidden xl:inline" />
    </div>
  );
}
