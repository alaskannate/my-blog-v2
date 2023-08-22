import React from "react";


export default function CardContent(props){
  const keepUnder100 = content => content.length > 100 ? content.substring(0, 250) + " read more..." : content;

    return(
        <div className="card-content">
        <h3>Q. {props.title}</h3>
        <p><strong>A. </strong> {keepUnder100(props.content)}</p>
      </div> 
    );
}