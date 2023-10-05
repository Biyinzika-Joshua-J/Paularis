"use client";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
    isError? : boolean
}

const Path = ({isError}:Props) => {
  const pathname = usePathname();
  return <div className="">
        <span className="main-text-color1">
            Home /
        </span>
        <span className="">
            {" "}
            {
                isError  ? '404Error' : pathname.substring(1)
            }
        </span>
  </div>;
};

export default Path;
