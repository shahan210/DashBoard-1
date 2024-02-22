import React from "react";
import { TbDragDrop2 } from "react-icons/tb";
export default function ExpenseDnd() {
  return (
    <div className="grid-income ">
      <div className="container dnd-container">
        <div className="container-header">
          Expense List <TbDragDrop2 style={{ marginLeft: 10 }} />
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
