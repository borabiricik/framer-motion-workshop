import React, { ImgHTMLAttributes } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

const Tire = ({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <motion.div
      className={classNames("absolute", className)}
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <Image
        src={"/tire.png"}
        className={classNames("z-10 w-[70px] h-[70px]")}
        width={70}
        height={70}
        alt="Tire 1"
      />
    </motion.div>
  );
};

export default Tire;
