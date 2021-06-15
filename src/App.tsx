import React, { useState } from "react";
import { ITodo } from "./Interfaces";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState<number | null>(null);
  const addTodo = (e: React.FormEvent) => {
    console.log("clicked");
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
    //**this method will work but it push the done todo to bottom of the list
    // const item = todos.filter((todo) => todo.id === id);
    // item[0].isDone = !item[0].isDone;
    // const newTodos: ITodo[] = todos.filter((todo) => todo.id !== id);
    // newTodos.push(item[0]);
    // setTodos(newTodos);
    const myTodos: ITodo[] = [...todos];
    myTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
    });
    setTodos(myTodos);

    //this will work too but i dont understand it :(
    // myTodos.find(todo=> todo.id === id)!.isDone = !myTodos.find(todo=> todo.id === id)!.isDone
    // setTodos(myTodos);
  };

  const HandleEditTodo = (id: number) => {
    document.getElementById("myinput")?.focus();
    setIsEditing(true);
    setCurrentTodoId(id);
    const item = todos.filter((todo) => todo.id === id);
    setText(item[0].text);
  };

  const EditTodo = (e: React.FormEvent) => {
    e.preventDefault();
    todos.forEach((todo) => {
      if (todo.id === currentTodoId) {
        todo.text = text;
      }
    });
    setText("");
    setIsEditing(false);
    setCurrentTodoId(null);
  };
  console.log(isEditing);
  return (
    <div className="App">
      <h1>TS TODO LIST</h1>
      <form onSubmit={(e: React.FormEvent) => e.preventDefault()}>
        <input
          type="text"
          placeholder="add todo"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          id="myinput"
        />
        {!isEditing && (
          <button type="submit" onClick={(e: React.FormEvent) => addTodo(e)}>
            add
          </button>
        )}
        {isEditing && (
          <button type="button" onClick={(e: React.FormEvent) => EditTodo(e)}>
            edit
          </button>
        )}
      </form>
      <hr />
      <TodoList
        todos={todos}
        HandleRemove={HandleRemove}
        HandleDoneTodo={HandleDoneTodo}
        HandleEditTodo={HandleEditTodo}
      />
    </div>
  );
};

export default App;
