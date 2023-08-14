import React from "react";

export default function Footer() {
    function currentYear(){
        const date = new Date();
        return date.getFullYear()
    }
  return (
  <div className="footer-box">
  <p>Copywrite {currentYear()} </p>
  </div>
   );
}
