import React, { useState } from "react";
import { TbDragDrop2 } from "react-icons/tb";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
export default function ExpenseDnd() {
  const [expense, setExpense] = useState([
    { label: ["Loan", 2000] },
    { label: ["Groceries", 1500] },
    { label: ["Bills", 2000] },
    { label: ["Transportaion", 1000] },
  ]);
  return (
    <div className="grid-income ">
      <div className="container dnd-container">
        <div className="container-header">
          Expense List <TbDragDrop2 style={{ marginLeft: 10 }} />
        </div>
        <div className="drag-conrtainer">
          <div className="income-list-dnd">
            <div>Loan</div>
            <div>2000</div>
          </div>
          <div className="income-list-dnd">
            <div>Groceries</div>
            <div>1500</div>
          </div>
          <div className="income-list-dnd">
            <div>Bills</div>
            <div>2000</div>
          </div>
          <div className="income-list-dnd">
            <div>Transportaion</div>
            <div>1000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
