import React from "react";

export default function Footer() {
    function currentYear(){
        const date = new Date();
        return date.getFullYear()
    }
  return (
    <footer>
    <p>Copywrite {currentYear()} </p>
    </footer>
   );
}
