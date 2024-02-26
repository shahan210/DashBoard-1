import React, { useState } from "react";
import { TbDragDrop2 } from "react-icons/tb";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
export default function ExpenseDnd() {
  const [expense, setExpense] = useState([
    {
      label: { name: "Loan", value: 2000 },
    },
    {
      label: { name: "Groceries", value: 1500 },
    },
    {
      label: { name: "Bills", value: 2000 },
    },
    {
      label: { name: "Transportaion", value: 1000 },
    },
  ]);
  function DragEnd(e) {
    // console.log("works");
    const { over, active } = e;
    // console.log("active", active);
    // console.log("over", over.id);
    if (active.id !== over.id) {
      setExpense((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        // console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
  return (
    <div className="grid-income ">
      <div className="container dnd-container">
        <div className="container-header">
          Expense List <TbDragDrop2 style={{ marginLeft: 10 }} />
        </div>
        <div className="drag-conrtainer">
          <DndContext collisionDetection={closestCenter} onDragEnd={DragEnd}>
            <div align="center">
              <SortableContext
                strategy={verticalListSortingStrategy}
                items={expense}
              >
                {expense.map((item) => (
                  <SortableItem key={item} id={item} />
                ))}
              </SortableContext>
            </div>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
