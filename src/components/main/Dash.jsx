import React from "react";
import Expense from "./Expense";
import ExpenseDnd from "./ExpenseDnd";
import Graph from "./Graph";
import Header from "./Header";
import Income from "./Income";
import IncomeDnd from "./IncomeDnd";
import Savings from "./Savings";

export default function Dash() {
  return (
    <div className="dash">
      <Header />
      <div className="dash-container-1">
        <div className="dash-container-2">
          <div className="dash-grid">
            <Income />
            <Expense />
            <Savings />
            <Graph />
            <div className="grid-dragndrop dash-grid-span-3">
              <IncomeDnd />
              <ExpenseDnd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
