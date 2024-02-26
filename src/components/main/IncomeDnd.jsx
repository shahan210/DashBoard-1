import React, { useState } from "react";
import { TbDragDrop2 } from "react-icons/tb";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
export default function IncomeDnd() {
  const [income, setIncome] = useState([
    {
      label: { name: "Salary", value: 5000 },
    },
    {
      label: { name: "Rent", value: 2000 },
    },
    {
      label: { name: "Stock", value: 1000 },
    },
  ]);
  function DragEnd(e) {
    // console.log("works");
    const { over, active } = e;
    // console.log("active", active);
    // console.log("over", over.id);
    if (active.id !== over.id) {
      setIncome((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        // console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
  return (
    <div className="grid-income dash-grid-span-2">
      <div className="container dnd-container">
        <div className="container-header">
          Income List <TbDragDrop2 style={{ marginLeft: 10 }} />
        </div>
        <div className="drag-conrtainer">
          <DndContext collisionDetection={closestCenter} onDragEnd={DragEnd}>
            <div align="center">
              <SortableContext
                strategy={verticalListSortingStrategy}
                items={income}
              >
                {income.map((item) => (
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
