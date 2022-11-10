import React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { InboxIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import Coohu from "./Coohu";
import MiniProfile from "./MiniProfile";

export default function SideBar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:p-1">
      {/* Gutargu Logo */}

      <div className="hoverEffect p-0 hover:bg-skin-bird">
        <Image src="/logo/raven.png" width={70} height={70} />
      </div>

      {/* Menu */}

      <div className="mt-4 xl:items-start">
        <MenuItem logo={<HomeIcon />} title="Home" active />
        <MenuItem logo={<HashtagIcon />} title="Explore" />
        <MenuItem logo={<BellIcon />} title="Notifications" />
        <MenuItem logo={<InboxIcon />} title="Messages" />
        <MenuItem logo={<BookmarkIcon />} title="Bookmarks" />
        <MenuItem logo={<ClipboardIcon />} title="Lists" />
        <MenuItem logo={<UserIcon />} title="Profile" />
        <MenuItem logo={<EllipsisHorizontalCircleIcon />} title="More" />
      </div>

      {/* Button */}

      <Coohu />

      {/* Mini-Profile */}
      <MiniProfile />
    </div>
  );
}
