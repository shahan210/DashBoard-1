import React from "react";
import Header from "./Header";
import Income from "./Income";
import Expense from "./Expense";
import Graph from "./Graph";
import IncomeDnd from "./IncomeDnd";
import ExpenseDnd from "./ExpenseDnd";
import Transaction from "./Transaction";
import PieChart from "./PieChart";
import Savings from "./Savings";

export default function Dash() {
  return (
    <div className="dash">
      <Header />
      <div className="dash-grid">
        <Income />
        <Expense />
        <Savings />
        <PieChart />
        <Graph />
        <div className="grid-dragndrop dash-grid-span-3 ">
          <IncomeDnd />
          <ExpenseDnd />
        </div>
        <Transaction />
      </div>
    </div>
  );
}
