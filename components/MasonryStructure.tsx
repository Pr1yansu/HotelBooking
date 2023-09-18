"use client";
import React from "react";
import Masonry from "@mui/lab/Masonry";
import Card from "@/components/Card";
import { data } from "@/app/Listing/page";

const MasonryStructure = () => {
  return (
    <Masonry columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
      {data.map((item, i) => (
        <div className="col-span-1" key={i}>
          <Card data={item} />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryStructure;
