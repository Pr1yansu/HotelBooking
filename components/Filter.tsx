"use client";
import React, { useState } from "react";
import { MdFilterList, MdFilterAltOff } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import AllFilters from "./AllFilters";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const handleFilter = () => {
    setOpen(!open);
  };
  return (
    <>
      <button
        title="Filter"
        className="fixed p-1 bg-primary top-16 left-4 text-white rounded-full shadow-md hover:bg-purple-500 duration-300 z-10"
        onClick={handleFilter}
      >
        {open ? <MdFilterAltOff size={24} /> : <MdFilterList size={24} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="w-80 px-4 py-3 rounded-lg dark:bg-black/75 bg-zinc-200/25 shadow-md fixed top-20 left-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 320 }}
            exit={{ opacity: 0, width: 0 }}
          >
            <h5 className="text-center text-primary border-primary text-lg border-b-2 relative">
              Filter
            </h5>
            <AllFilters />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Filter;
