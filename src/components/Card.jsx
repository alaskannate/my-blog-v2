import * as React from 'react';
import CardDetails from './CardDetails'


export default function Card(props) {
  return (
    <div className="card-box">
    <CardDetails title={props.title} content ={props.content} userName={props.userName} />
    </div>
  );
}