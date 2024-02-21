import React from "react";
import { BsGraphDownArrow } from "react-icons/bs";

export default function Expense() {
  return (
    <div className="grid-income">
      <div className="container income-container">
        <div className="container-header">
          Expenses
          <BsGraphDownArrow style={{ marginLeft: 10, fill: "red" }} />
        </div>
        <div className="income-list">
          <div>Maintenance</div>
          <div>10000</div>
        </div>
        <div className="income-list">
          <div>Maintenance</div>
          <div>10000</div>
        </div>
        <div className="income-list">
          <div>Maintenance</div>
          <div>10000</div>
        </div>
      </div>
    </div>
  );
}
