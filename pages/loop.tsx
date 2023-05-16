import React from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../src/layout/Layout";
import { motion } from "framer-motion";

const Loop: NextPageWithLayout = () => {
  return (
    <div className="bg-orange-300 h-screen flex items-center justify-center">
      <motion.div
        initial={{
          borderRadius: "10px",
          rotate: 0,
          scale: 1,
        }}
        animate={{
          borderRadius: ["5%", "50%", "50%", "5%"],
          scale: [null, 1.2, 1.2, 1],
          rotate: [null, 360, 360, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          repeatDelay: 1,
          times: [0, 0.2, 0.5, 0.8, 1],
          ease: "easeInOut",
        }}
        className="bg-white w-[500px] h-[500px]"
      ></motion.div>
    </div>
  );
};

Loop.getLayout = (page) => <Layout>{page}</Layout>;

export default Loop;
