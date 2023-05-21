import { SetStateAction, useState } from "react";

import Button from "../../UI/Button/Button";

interface TodoInputProps {
  onAddTodo: (enteredText: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const todoInputChangeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    props.onAddTodo(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Todo List</label>
        <input type="text" onChange={todoInputChangeHandler} />
      </div>
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoInput;
