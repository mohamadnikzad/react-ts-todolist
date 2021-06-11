import React, { useState } from "react";
import { ITodo } from "./Interfaces";
import TodoList from "./TodoList";

// interface Todo {
//   id: number;
//   text: string;
//   isDone: boolean;
// }

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (text) {
      const id: number = Math.floor(Math.random() * (999 - 1) + 1);
      const todo: ITodo = { id, text, isDone: false };
      setTodos([...todos, todo]);
      setText("");
    }
  };

  const HandleRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const HandleDoneTodo = (id: number) => {
    const item = todos.filter((todo) => todo.id === id);
    item[0].isDone = !item[0].isDone;
    const newTodos: ITodo[] = todos.filter((todo) => todo.id !== id);
    newTodos.push(item[0]);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>TS TODO LIST</h1>
      <form onSubmit={(e: React.FormEvent) => addTodo(e)}>
        <input
          type="text"
          placeholder="add todo"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button type="submit">Add</button>
      </form>
      <hr />
      <TodoList
        todos={todos}
        HandleRemove={HandleRemove}
        HandleDoneTodo={HandleDoneTodo}
      />
    </div>
  );
};

export default App;
