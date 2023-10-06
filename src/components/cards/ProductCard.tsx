import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
    imgSrc : string
    name : string
    price : number
    oldPrice?: number | null
    rating?: number | null
    discout?:number | null
}

const ProductCard = ({imgSrc, name, price, oldPrice, rating, discout}:Props) => {
  return (
    <Card className="max-w-[300px] cursor-pointer">
      <CardHeader className="bg-color-secondary overflow-hidden h-[200px] max-h-[300px] min-h[100px]">
        <Image
            src={imgSrc}
            alt="product"
            width={300}
            height={300}
            className=" object-cover hover:scale-110 transition-all duration-500 h-full"
        />
      </CardHeader>
      <CardContent className="px-0">
        <Button className="w-full">
            <Image
                src={'/assets/icons/cart-light.png'}
                alt="cart"
                width={20}
                height={20}
                className=" object-fill"
            />
            <span className="ml-2 text-white">
                Add to Cart
            </span>
        </Button>
      </CardContent>
      <CardFooter>
       <div className="">
       <h4 className="py-2 font-bold line-clamp-1 text-xl">
            {name}
        </h4>
        <div className="flex items-center">
            <span className="mr-2 text-red-500 text-base">
                {price} UGX
            </span>
            <span className="mr-2 text-gray-300 text-xl line-through">
                {oldPrice && `${oldPrice} UGX`} 
            </span>
            
        </div>
      {
        rating && (  <div className="flex items-center pt-4">
        <Image
            src={'/assets/icons/five-star.png'}
            alt="five start rating"
            width={100}
            height={50}
            className=""
        />
        <span className="ml-2 text-sm text-gray-400">
            {rating}
        </span>
    </div>)
      }
       </div>

      </CardFooter>
    </Card>
  );
};

export default ProductCard;
