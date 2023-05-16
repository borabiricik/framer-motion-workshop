import React from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../src/layout/Layout";
import { Variants, motion } from "framer-motion";
import { AiFillAmazonCircle } from "react-icons/ai";

const Hover: NextPageWithLayout = () => {
  const variants: Variants = {
    closed: {
      width: 0,
      marginLeft: "0px",
      opacity: 0,
      marginInline: 0,
    },
    open: {
      width: "auto",
      marginLeft: "8px",
      opacity: 1,
      marginInline: "8px",
    },
  };
  return (
    <div className="flex flex-col gap-y-4 items-start p-4">
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: {
            type: "spring",
            duration: 0.1,
            bounce: 0.07,
            damping: 2,
          },
        }}
        className="bg-blue-200 px-4 py-1"
        animate
      >
        Hover me !
      </motion.button>

      <motion.button
        initial="closed"
        whileHover="open"
        animate="closed"
        className="bg-slate-200 border border-gray-400 px-2 py-1 rounded-full flex items-center overflow-hidden"
      >
        <AiFillAmazonCircle />
        <motion.span variants={variants}>Amazon</motion.span>
      </motion.button>
    </div>
  );
};

Hover.getLayout = (page) => <Layout>{page}</Layout>;

export default Hover;
