import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectionWrapper: React.FC<Props> = ({ children }) => {
  return <main className="max-w-[1640px] mx-auto py-4 my-4">{children}</main>;
};

export default SectionWrapper;
