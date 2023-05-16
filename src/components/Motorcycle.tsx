import Image from "next/image";
import React from "react";
import Tire from "./Tire";
import { motion } from "framer-motion";

const Motorcycle = () => {
  return (
    <motion.div
      className="absolute bottom-20 right-0"
      initial={{ translateX: "0px" }}
      animate={{ translateX: "-2000px" }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    >
      <div>
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{
            duration: 0.3,
            repeatDelay: 0,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
            type: "tween",
          }}
        >
          <Image
            src={"/car.png"}
            className="z-10 w-[300px] h-[300px]"
            width={300}
            height={300}
            alt="Bike"
          />
        </motion.div>
        <Tire className="-bottom-12 left-2" />
        <Tire className="-bottom-12 right-8" />
      </div>
    </motion.div>
  );
};

export default Motorcycle;
