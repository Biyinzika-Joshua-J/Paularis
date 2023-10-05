import React from "react";
import Path from "@/components/shared/Path/Path";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faShop, faTruckField, faAward } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <main className="">
      <section className="mx-auto w-[90%]">
        <div className="py-10">
          <Path />
        </div>
      </section>
      <section className="lg:ml-[5%] max-lg:w-[90%] max-lg:mx-auto">
        <div className="py-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
            <div className="">
              <h1 className="h1-bold">Our Story</h1>
              <p className="text-xl py-4">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p className="text-xl py-4">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <div className=" w-full h-auto">
              <Image
                src={"/assets/main/about.png"}
                width={500}
                height={500}
                alt="about"
                className="object-fit h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-[90%] flex flex-col justify-center items-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5">
            <div className="border border-gray-600 w-64 h-56 py-4 px-6 flex flex-col items-center justify-evenly rounded-md shadow-2xl">
              {/* icon here */}
              <div className="">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="text-4xl bg-color-secondary2 text-white w-10 h-10 py-4 px-4 rounded-full"
                />
              </div>

              <div className="text-center">
                <h3 className="h3-bold py-2">50M UGX</h3>
                <p>Annual gross sales in our store!</p>
              </div>
            </div>
            <div className="border border-gray-600 w-64 h-56 py-4 px-6 flex flex-col items-center justify-evenly rounded-md shadow-2xl">
              {/* icon here */}
              <div className="">
                <FontAwesomeIcon
                  icon={faShop}
                  className="text-4xl bg-color-secondary2 text-white w-10 h-10 py-4 px-4 rounded-full"
                />
              </div>

              <div className="text-center">
                <h3 className="h3-bold py-2">500</h3>
                <p>Current customers!</p>
              </div>
            </div>
            <div className="border border-gray-600 w-64 h-56 py-4 px-6 flex flex-col items-center justify-evenly rounded-md shadow-2xl">
              {/* icon here */}
              <div className="">
                <FontAwesomeIcon
                  icon={faTruckField}
                  className="text-4xl bg-color-secondary2 text-white w-10 h-10 py-4 px-4 rounded-full"
                />
              </div>

              <div className="text-center">
                <h3 className="h3-bold py-2">20</h3>
                <p>We supply 20 companies currently!</p>
              </div>
            </div>
            <div className="border border-gray-600 w-64 h-56 py-4 px-6 flex flex-col items-center justify-evenly rounded-md shadow-2xl">
              {/* icon here */}
              <div className="">
                <FontAwesomeIcon
                  icon={faAward}
                  className="text-4xl bg-color-secondary2 text-white w-10 h-10 py-4 px-4 rounded-full"
                />
              </div>

              <div className="text-center">
                <h3 className="h3-bold py-2">3</h3>
                <p>Our current awards!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-[90%] mx-auto">
          <div className="bg-color-secondary flex flex-col items-center pt-10 min-h-72 justify-between">
            <Image
              src={"/assets/main/person-1.png"}
              alt="Team"
              height={300}
              width={300}
              className="object-fit "
            />
            <div className="bg-white w-full text-center">
              <h4 className="font-semibold text-2xl pt-4 pb-2">Steven</h4>
              <p>Founder & Chairman</p>
              <div className="">
                <Link href={"/"}></Link>
              </div>
            </div>
          </div>
          <div className="bg-color-secondary flex flex-col items-center pt-10 justify-between">
            <Image
              src={"/assets/main/person-2.png"}
              alt="Team"
              height={300}
              width={300}
              className="object-fit  "
            />
            <div className="bg-white w-full text-center ">
              <h4 className="font-semibold text-2xl pt-4 pb-2">Jimmy</h4>
              <p>CFO</p>
              <div className="">
                <Link href={"/"}></Link>
              </div>
            </div>
          </div>
          <div className="bg-color-secondary flex flex-col items-center pt-10 justify-between">
            <Image
              src={"/assets/main/person-3.png"}
              alt="Team"
              height={300}
              width={200}
              className="object-fit"
            />
            <div className="bg-white w-full text-center">
              <h4 className="font-semibold text-2xl pt-4 pb-2">Nicoli</h4>
              <p>Founder & Chairman</p>
              <div className="">
                <Link href={"/"}></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto py-20 w-[80%] flex items-center justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/icons/services.png"
              height={70}
              width={70}
              alt="Services"
              className="object-fit"
            />
            <h4 className="font-semibold text-xl pt-2 uppercase">
              Free and Fast Delivery
            </h4>
            <p className="py-2">Free delivery for all orders over $140!</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/icons/support.png"
              height={70}
              width={70}
              alt="Services"
              className="object-fit"
            />
            <h4 className="font-semibold text-xl pt-2 uppercase">
              24/7 customer service
            </h4>
            <p className="py-2">Friendly 24/7 customer support</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/icons/money.png"
              height={70}
              width={70}
              alt="Services"
              className="object-fit"
            />
            <h4 className="font-semibold text-xl pt-2 uppercase">
              Money back guarntee
            </h4>
            <p className="py-2">We refund money within 30 days.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
