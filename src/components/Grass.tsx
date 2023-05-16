import Image from "next/image";
import React from "react";

const Grass = () => {
  return <Image src={"/grass.png"} alt="Grass" fill className="-z-10" />;
};

export default Grass;
