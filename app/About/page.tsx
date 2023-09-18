import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import { cursive, heading } from "../layout";
import Image from "next/image";

const page = () => {
  return (
    <SectionWrapper>
      <section className="flex flex-wrap justify-center items-center min-h-screen relative">
        <div className="lg:w-1/2 w-full p-2 max-lg:text-center max-lg:order-2">
          <h2 className={`${cursive.className} py-2 text-4xl text-primary`}>
            Our Mission and Vision
          </h2>
          <h3 className={`${heading.className} py-2 text-2xl font-semibold`}>
            Crafting Unforgettable Travel Experiences
          </h3>
          <p className="py-2 dark:text-zinc-600 text-zinc-800">
            Welcome , where our mission is to passionately redefine the way you
            experience hospitality. We believe in going beyond the ordinary,
            curating exceptional stays that are tailored to your unique desires
            and preferences. Our dedicated team tirelessly scours the globe for
            the most exquisite accommodations, ranging from charming boutique
            inns to opulent resorts, ensuring that every choice is an epitome of
            comfort and luxury. We&apos;re not just a booking platform;
            we&apos;re your trusted companion in the world of travel, committed
            to making each journey a memorable tale. Join us as we embark on
            this adventure of creating unforgettable travel experiences, one
            reservation at a time.
          </p>
        </div>
        <div className="lg:w-1/2 w-full p-2 max-lg:text-center max-lg:order-1 relative">
          <Image
            width={400}
            height={500}
            sizes="100vw"
            alt="About.png"
            src={"/Assets/Interiors/Interior-10.jpg"}
            className="shadow-lg mx-auto py-2 w-1/2 rounded-md object-cover object-center mt-4 "
          />
          <Image
            width={500}
            height={400}
            sizes="100vw"
            alt="About.png"
            src={"/Assets/Interiors/Interior-11.jpg"}
            className="shadow-lg mx-auto rounded-md object-cover object-center py-2"
          />
        </div>
      </section>
    </SectionWrapper>
  );
};

export default page;
