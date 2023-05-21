import TodoList from "./components/Todos/TodoList/TodoList";
import TodoInput from "./components/Todos/TodoInput/TodoInput";

import "./App.css";
import { useState } from "react";

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addTodoHandler = (enteredText: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodos;
    });
  };

  const deleteItemHandler = (todoID: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoID);
      return updatedTodos;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No todos found. Maybe add one?</p>
  );

  if (todos.length > 0) {
    content = <TodoList items={todos} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id="todo-form">
        <TodoInput onAddTodo={addTodoHandler} />
      </section>
      <section id="todos">{content}</section>
    </div>
  );
};

export default App;
