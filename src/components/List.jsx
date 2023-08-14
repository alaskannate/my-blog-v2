import React from "react";
import calculateHypotenuse, {convertTemperature,} from "../calculations.js"

export default function List() {
  return (
<div className="calc-box">
<div className="calc">
        <ul>
      <li>{convertTemperature(100,"c")}</li>
      <li>{calculateHypotenuse(2,4)}</li>
        </ul>
    </div>
</div>

  );
}

