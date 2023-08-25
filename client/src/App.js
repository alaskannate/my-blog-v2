import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import './css/global.css'
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Clicker from "./components/clicker";
import Clock from "./components/Clock";
import BubbleSort from "./components/algorithums/BubbleSort";
import StylishBox from "./components/StylishBox";
import LeetCode from "./components/leetcode/Leetcode";


const App = () => {
  const functionalComponents = [<Clicker />, <Clock />, <BubbleSort />, <LeetCode />];


 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>

     <div className="functional-showcase">
        {functionalComponents.map((Component, index) => (
          <StylishBox key={index}>
            {Component}
          </StylishBox>
        ))}
      </div>
   </div>
 );
};
 
export default App;