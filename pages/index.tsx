import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../src/layout/Layout";

const Home: NextPageWithLayout = () => {
  const [isVisible, setisVisible] = useState(true);
  const toggleBox = () => setisVisible((prev) => !prev);
  return (
    <div className="p-4">
      <button
        onClick={toggleBox}
        className="bg-blue-200 rounded-full px-4 py-1"
      >
        {isVisible ? "Hide Box" : "Show Box"}
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="bg-red-200 w-[500px] h-[500px]"
            initial={{ x: 0, scale: 0 }}
            animate={{
              x: 200,
              y: 200,
              scale: 1,
              rotate: 360,
              transition: { duration: 2, ease: "easeInOut" },
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 0.5, ease: "anticipate" },
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
