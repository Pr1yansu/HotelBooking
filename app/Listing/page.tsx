import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import Filter from "@/components/Filter";
import MasonryStructure from "@/components/MasonryStructure";

const page = () => {
  return (
    <SectionWrapper>
      <section className="relative">
        <Filter />
        <MasonryStructure />
      </section>
    </SectionWrapper>
  );
};

export default page;
