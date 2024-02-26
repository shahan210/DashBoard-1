import React from "react";
import { BsGraphDownArrow } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function Expense() {
  return (
    <div className="grid-income">
      <div className="container income-container">
        <div className="container-icons">
          <BsGraphDownArrow style={{ fill: "red" }} />
          <HiOutlineDotsHorizontal cursor={"pointer"} />
        </div>

        <div className="container-header">Expense</div>
        <div className="income-list">
          <div className="dash-money">$ 4,672</div>
          <div className="dash-percentage-expense">-2.67%</div>
        </div>
      </div>
    </div>
  );
}
