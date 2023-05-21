import { HTMLAttributes, ReactNode, useState } from "react";
import "./TodoItem.css";

export interface TodoItemProps {
  id: string;
  text: string;
  onDelete: (arg0: string) => void;
  children: ReactNode;
}

const TodoItem: React.FC<TodoItemProps & HTMLAttributes<HTMLLIElement>> = (
  props
) => {
  const [deleteText, setDeleteText] = useState("");

  const deleteHandler = () => {
    setDeleteText("(Deleted!");
    props.onDelete(props.id);
  };

  return (
    <li className="todo-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default TodoItem;
