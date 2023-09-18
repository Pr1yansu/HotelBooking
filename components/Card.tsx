import { cursive, heading } from "@/app/layout";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

interface Props {
  data: {
    id: number;
    title: string;
    location: string;
    price: string;
    image: string;
    rating: number;
    reviewCount: number;
  };
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full text-sm px-4 my-8 cursor-pointer">
      <Image
        src={data.image}
        alt={data.image}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full rounded-lg object-center object-cover"
      />
      <div className="max-md:flex justify-between items-center mt-2">
        <div className="flex items-baseline md:justify-between py-2">
          <h5
            className={`${heading.className} lg:text-lg text-base text-primary`}
          >
            {data.title}
          </h5>
          <span className={`${cursive.className} mx-2 text-base text-gray-500`}>
            {data.location}
          </span>
        </div>
        <div className="flex items-baseline md:justify-between py-2">
          <span className={`${heading.className} text-base`}>{data.price}</span>
          <span className="mx-2 flex text-sm text-gray-500">
            {data.rating} ({data.reviewCount}
            <AiFillStar size={18} className="text-primary" />)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
