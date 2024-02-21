import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
export default function Income() {
  return (
    <div className="grid-income">
      <div className="container income-container">
        <div className="container-header">
          INCOME <BsGraphUpArrow style={{fill:"green", marginLeft:10}} />
        </div>
        <div className="income-list"></div>
      </div>
    </div>
  );
}
