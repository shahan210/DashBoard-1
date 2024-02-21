import { Note1 } from "iconsax-react";
import React from "react";

export default function Savings() {
  return (
    <div className="grid-income">
      <div className="container income-container">
        <div className="container-header">Savings <Note1 size="26" color="#dce775"/></div>
        <div className="income-list">
          <div>Real Estate</div>
          <div>2000</div>
        </div>
        <div className="income-list">
          <div>Real Estate</div>
          <div>2000</div>
        </div>
        <div className="income-list">
          <div>Real Estate</div>
          <div>2000</div>
        </div>
      </div>
    </div>
  );
}
