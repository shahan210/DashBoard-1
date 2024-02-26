import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
export default function Income() {
  return (
    <div className="grid-income">
      <div className="container income-container">
        <div className="container-icons">
          <BsGraphUpArrow style={{ fill: "green" }} />
          <HiOutlineDotsHorizontal cursor={"pointer"} />
        </div>

        <div className="container-header">Income</div>
        <div className="income-list">
          <div className="dash-money">$ 12,834</div>
          <div className="dash-percentage">+1.32%</div>
        </div>
      </div>
    </div>
  );
}
