import { BsClipboard2Data } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import React from "react";

export default function Savings() {
  return (
    <div className="grid-income">
      <div className="container income-container">
        <div className="container-icons">
          <BsClipboard2Data color="#dce775" />
          <HiOutlineDotsHorizontal cursor={"pointer"} />
        </div>

        <div className="container-header">Savings</div>
        <div className="income-list">
          <div className="dash-money">$ 7,834</div>
          <div className="dash-percentage">+16.54%</div>
        </div>
      </div>
    </div>
  );
}
