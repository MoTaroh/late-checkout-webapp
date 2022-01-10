import { UserCircleIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import SearchBox from "../SearchBox";
import SearchBoxNav from "./SearchBoxNav";

// TODO: ひどすぎる実装なので後ほど修正する

const NavBar2 = () => {
  const [state, setState] = useState(false);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-16 py-4 bg-white shadow md:h-20">
      <div className="container flex items-center justify-between h-full">
        <h1 className="text-2xl font-bold sm:hidden text-hotel-green">L</h1>
        <h1 className="hidden text-2xl font-bold sm:block text-hotel-green">
          LongSty
        </h1>
        <SearchBoxNav state={state} setState={setState}></SearchBoxNav>
        <button className="hidden px-4 py-2 font-bold text-white rounded-md sm:block hover:bg-hotel-green-darker bg-hotel-green">
          Login
        </button>
        <div className="block sm:hidden">
          <UserCircleIcon className="w-8 h-8 text-gray-500"></UserCircleIcon>
        </div>
      </div>
      {state && (
        <div className="flex flex-col px-6 py-8 bg-white lg:hidden">
          <div className="flex justify-end">
            <button onClick={() => setState(!state)}>
              <XIcon className="w-6 h-6 text-gray-700"></XIcon>
            </button>
          </div>
          <SearchBox></SearchBox>
        </div>
      )}
    </div>
  );
};

export default NavBar2;
