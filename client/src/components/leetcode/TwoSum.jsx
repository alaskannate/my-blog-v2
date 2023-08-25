import React from "react";

export default function TwoSum(){

    //task: We have an array of numbers (A) and a target number (T) 
    // we need to find a combo of two numbers that equate to the (T).

    //thoght process: loops, we need to have nested loops, 
    // where the first loop will move though the entire array
    // and the second loop will check all the other numbers for a match to the target number. 


        function generateRandomArray() {
            let nums = [];
            for (var i = 0; i < 10; i++) {
              nums.push(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
            }
            console.log(nums)
            return nums
          }


    return (
        <div>
        <h1>Two Sum</h1>
        <p>{}</p>
        <button onClick={generateRandomArray}>Create Array</button>

        </div>
    )
}