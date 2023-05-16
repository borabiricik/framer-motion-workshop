import React, { useRef } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../src/layout/Layout";
import { motion } from "framer-motion";

const Scroll: NextPageWithLayout = () => {
  return (
    <div className="flex items-end h-[2000px] m-10">
      <motion.div
        whileInView={{ rotate: 360, transition: { duration: 2 } }}
        viewport={{ once: true }}
        className="w-[500px] h-[500px] bg-blue-400"
      ></motion.div>
    </div>
  );
};

Scroll.getLayout = (page) => <Layout>{page}</Layout>;

export default Scroll;
