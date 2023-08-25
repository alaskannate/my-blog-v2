import React from "react";
import StylishBox from "../StylishBox";
import TwoSum from "./TwoSum"


export default function LeetCode(){
    const functionalComponents = [<TwoSum />];

    return(
        <div className="functional-showcase">
        {functionalComponents.map((Component, index) => (
          <StylishBox key={index}>
            {Component}
          </StylishBox>
        ))}
      </div>
    )
}