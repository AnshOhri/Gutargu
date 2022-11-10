import React from "react";

export default function MenuItem(props) {
  return (
    <div className="hoverEffect flex items-center text-gray-700 justify-start text-lg space-x-3">
      <div className="h-7 w-7">{props.logo}</div>
      <span className={`${props.active && "font-bold"} hidden xl:inline`}>
        {props.title}
      </span>
    </div>
  );
}
