import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import EmailSubscriptionForm from "./EmailSubscriptionForm";
import Link from "next/link";
import { account, quickLinks, socials } from "../../../constants/footer";
import TextIconInput from "@/components/forms/TextIconInput";

const Footer = () => {
  return (
    <footer className="bg-black w-full py-4 flex-center flex-col">
      <div className="w-[90%] text-white grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-16  pt-10">
        <div className="">
          <h3 className="h3-bold">Exclusive</h3>
          <h4 className="h4-normal mt-4">Subscribe</h4>
          <div className="mt-4">
            <p className="capitalize font-light line-clamp-1">
              Get 10% Off your first Order!
            </p>
            <div className="mt-4">
              <EmailSubscriptionForm />
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="h3-bold">Account</h3>
          <div className="flex flex-col">
            {account.map((item, idx) => (
              <Link
                href={`/${item.link}`}
                key={idx}
                className="main-text-color text-[15px] w-[fit-content] py-2 cursor-pointer hover:underline underline-offset-4"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="h3-bold">Quick Link</h3>
          <div className="flex flex-col">
            {quickLinks.map((item, idx) => (
              <Link
                href={`/${item.link}`}
                key={idx}
                className="main-text-color text-[15px] w-[fit-content] py-2 cursor-pointer hover:underline underline-offset-4"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="h3-bold">Socials</h3>
          <div className="flex flex-wrap">
            {socials.map((item, idx) => (
              <Link
                className={`mt-4 cursor-pointer ${idx === 0 ? "mr-2" : "mx-2"}`}
                href={`/${item.link}`}
                key={idx}
              >
                <Image
                  src={item.icon}
                  alt="social media icon"
                  height={20}
                  width={20}
                  className=""
                />
              </Link>
            ))}
          </div>
          <div className="flex mt-5">
            <span className="mr-2">Email: </span>
            <Link
              href={"mail:paularis@gmail.com"}
              className="hover:underline underline-offset-4"
            >
              paularis@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-4 text-center">
        <span className="main-text-color1">
          © Copyright Rimel 2022. All right reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
