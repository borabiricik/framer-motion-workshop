import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const Tribune = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames("flex flex-col items-center", className)}
      {...props}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
        className="z-10"
      >
        <Image
          alt="Tribune bottom"
          src={"/spinner.png"}
          width={200}
          height={200}
          className="w-[200px] h-[200px] z-10 object-contain"
        />
      </motion.div>
      <Image
        alt="Tribune bottom"
        src={"/windmill-bottom.png"}
        width={50}
        height={200}
        className="-translate-y-1/4"
      />
    </div>
  );
};

export default Tribune;
