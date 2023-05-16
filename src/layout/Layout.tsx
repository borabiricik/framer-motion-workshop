import { useScroll } from "framer-motion";
import Link from "next/link";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-2 bg-red-500"
      ></motion.div>
      <header className="bg-gray-200 flex items-center justify-center p-4 gap-x-4">
        <Link href={"/"}>
          <button>Home</button>
        </Link>
        <Link href={"/hover"}>
          <button>Hover</button>
        </Link>
        <Link href={"/scroll"}>
          <button>Scroll</button>
        </Link>
        <Link href={"/loop"}>
          <button>Loop</button>
        </Link>
        <Link href={"/to-do"}>
          <button>TO-DO List</button>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
