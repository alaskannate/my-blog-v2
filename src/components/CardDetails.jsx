import React from "react";


export default function CardContent(props){
    return(
        <div className="card-content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>Note Created by: {props.userName}</p>
      </div> 
    );
}