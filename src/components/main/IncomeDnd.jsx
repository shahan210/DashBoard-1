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
    { label: ["Salary", 5000] },
    { label: ["Rent", 2000] },
    { label: ["Stock", 1000] },
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
            <Container align="center">
              <SortableContext
                strategy={verticalListSortingStrategy}
                items={lang}
              >
                {lang.map((item) => (
                  <SortableItem key={item} id={item} />
                ))}
              </SortableContext>
            </Container>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
