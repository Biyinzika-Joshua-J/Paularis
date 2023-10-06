import ProductCard from "@/components/cards/ProductCard";
import Path from "@/components/shared/Path/Path";
import FilterBtn from "@/components/store/FilterBtn";
import React from "react";

const products = [
  {
    id: 1,
    name: "Bag",
    imgSrc: "/assets/products/p-1.png",
    price: 19.99,
    oldPrice: null,
    ratings: 4.5,
    discount: null,
  },
  {
    id: 2,
    name: "Product 2",
    imgSrc: "/assets/products/p-2.png",
    price: 29.99,
    oldPrice: 39.99,
    ratings: 4.2,
    discount: 25,
  },
  {
    id: 3,
    name: "Product 3",
    imgSrc: "/assets/products/p-3.png",
    price: 14.99,
    oldPrice: null,
    ratings: 4.8,
    discount: null,
  },
  {
    id: 4,
    name: "Product 4",
    imgSrc: "/assets/products/p-4.png",
    price: 44.99,
    oldPrice: null,
    ratings: 4.6,
    discount: null,
  },
  {
    id: 5,
    name: "Product 5",
    imgSrc: "/assets/products/p-5.png",
    price: 9.99,
    oldPrice: 12.99,
    ratings: 4.1,
    discount: 20,
  },
  {
    id: 6,
    name: "Product 6",
    imgSrc: "/assets/products/p-6.png",
    price: 59.99,
    oldPrice: null,
    ratings: 4.9,
    discount: null,
  },
  {
    id: 7,
    name: "Product 7",
    imgSrc: "/assets/products/p-7.png",
    price: 24.99,
    oldPrice: null,
    ratings: 4.4,
    discount: null,
  },
  {
    id: 8,
    name: "Product 8",
    imgSrc: "/assets/products/p-8.png",
    price: 34.99,
    oldPrice: 44.99,
    ratings: 4.3,
    discount: 22,
  },
];




const Store = () => {
  return (
    <main className="">
     <div className="mx-auto w-[90%]">
     <section className="">
        <div className="py-10">
          <Path />
        </div>
      </section>
      <section className="py-10">
        <div className="flex items-center justify-between">
          <h3 className="h3-medium">Products</h3>
          <div className="">
            <FilterBtn/>
          </div>
        </div>
      </section>
      <section className="py-10 flex justify-center flex-col items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {
            products.map((product, idx) => (
              <ProductCard
                key={idx}
                imgSrc={product.imgSrc}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.ratings}
                discout={product.discount}
              />

            ))
          }
        </div>
      </section>
     </div>
    </main>
  );
};

export default Store;
