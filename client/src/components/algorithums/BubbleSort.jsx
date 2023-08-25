import React, {useState} from 'react';


// When user presses button creates 10 random numbers.

// when user pressese sort button, will bubble sort using bubblethe below. 


export default function BubbleSort() {
  const [numbers, setNumbers] = useState([]);
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [scrambledNumbers, setScrambledNumbers] = useState([]);

  function generateRandomNumbers() {
    let nums = [];
    for (var i = 0; i < 10; i++) {
      nums.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    }
    setNumbers(nums);
    setSortedNumbers([]);
    setScrambledNumbers([]);
  }


      function bubbleSort() {
        let sortedNums = [...numbers];
        let n = sortedNums.length;
        for (var i = 0; i < n - 1; i++) {
          for (var current = 0; current < n - i - 1; current++) {
            if (sortedNums[current] > sortedNums[current + 1]) { 
              var temp = sortedNums[current]; 
              sortedNums[current] = sortedNums[current + 1]; 
              sortedNums[current + 1] = temp; 
            }
          }
        }
        setSortedNumbers(sortedNums)
    }

    function scramble(array) {
      for (let i = array.length - 1; i > 0; i--) {
        // Generate random index between 0 and i (inclusive)
        const pos = Math.floor(Math.random() * (i + 1));
        
        // Swap the elements at positions i and pos
        const temp = array[i];
        array[i] = array[pos];
        array[pos] = temp;
      }
    
      return array;
    }
    
    function scrambleSortedNumbers() {
      const scrambled = scramble([...sortedNumbers]);
      setScrambledNumbers(scrambled);
    }
    
    
    return (
      <div  id="bubble-sort-container" className="container">
        {numbers.length > 0 && <h1>{numbers.join(', ')}</h1>}
        <br/>
        <button className="bubble-sort" onClick={generateRandomNumbers}>#1 Create a Random Array</button>
        {sortedNumbers.length > 0 && <h1>{sortedNumbers.join(', ')}</h1>}
        <br/>
        <button className="bubble-sort" onClick={bubbleSort} disabled={numbers.length === 0}>#2 Bubble Sort the Array</button>
        {scrambledNumbers.length > 0 && <h1>{scrambledNumbers.join(', ')}</h1>}
        <br/>
        <button className="bubble-sort" onClick={scrambleSortedNumbers} disabled={sortedNumbers.length === 0}>#3 Scramble the Array</button>
      </div>
    );
  }

