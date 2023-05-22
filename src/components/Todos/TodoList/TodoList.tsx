import TodoItem from "../TodoItem/TodoItem";

import "./TodoList.css";

interface TodoListProps {
  items: { text: string; id: string }[];
  onDeleteItem: (todoID: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul className="todo-list">
      {props.items.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          onDelete={props.onDeleteItem}
          text={todo.text}
        >
          {todo.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
