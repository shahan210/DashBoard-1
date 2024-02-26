import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableItem(props) {
  const { attributes, setNodeRef, listeners, transform, transition } =
    useSortable({ id: props.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="income-list-dnd ">
        <div>{props.id.label.name}</div>
        <div>{props.id.label.value}</div>
      </div>
    </div>
  );
}
