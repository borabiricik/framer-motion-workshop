import React from "react";
import Tribune from "./Tribune";
import Grass from "./Grass";
import Motorcycle from "./Motorcycle";

const Windmill = () => {
  return (
    <div className="w-full flex justify-between relative overflow-hidden">
      <Tribune className="mt-12" />
      <Tribune className="mt-3" />
      <Tribune />
      <Tribune />
      <Grass />
      <Motorcycle />
    </div>
  );
};

export default Windmill;
