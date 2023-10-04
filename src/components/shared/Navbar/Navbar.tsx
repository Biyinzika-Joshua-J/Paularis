import React from "react";
import Link from "next/link";
import { navLinks } from "../../../constants/navbar";
import NavSearchForm from "./NavSearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Theme from "./Theme";
import { Button } from "@/components/ui/button";
import NavMenuDesktop from "./NavMenuDesktop";


const Navbar = () => {
  return (
    <nav className="border-b border-black pb-2 dark:bg-[#333333]">
      <div className="bg-black text-center text-sm py-2">
        <span className="main-text-color ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <Link
          href={"/shop"}
          className="text-white font-bold ml-4 underline underline-offset-2"
        >
          Shop Now
        </Link>
      </div>
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto pt-4">
        <div className="logo">
          <Link className="h3-bold" href={"/"}>
            Paularis
          </Link>
        </div>
      <NavMenuDesktop/>
        <div className="flex items-center">
          <div className="mr-2">
            <NavSearchForm />
          </div>
          <Theme />
          <div className="ml-2">
            <button className="relative">
              <span className="bg-color-secondary2 text-white  rounded-full w-4 h-4 absolute -top-2 font-extrabold left-4 text-sm">
                2
              </span>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
