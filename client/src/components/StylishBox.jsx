import React from 'react';
import '../css/StylishBox.css'

function StylishBox({ children }) {
  return (
    <div>
      {React.Children.map(children, (child) => (
        <div className="stylish-box">
          {child}
        </div>
      ))}
    </div>
  );
}

export default StylishBox;