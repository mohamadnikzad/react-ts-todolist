import { ITodo } from "./Interfaces";

interface IProps {
  todo: ITodo;
  HandleRemove: (id: number) => void;
  HandleDoneTodo: (id: number) => void;
  HandleEditTodo: (id: number) => void;
}

const Todo: React.FC<IProps> = ({
  todo,
  HandleRemove,
  HandleDoneTodo,
  HandleEditTodo,
}) => {
  return (
    <li className={`${todo.isDone ? "done" : ""}`}>
      <p onClick={() => HandleDoneTodo(todo.id)}>{todo.text}</p>
      <button onClick={() => HandleRemove(todo.id)}>X</button>
      <button onClick={() => HandleEditTodo(todo.id)}>Edit</button>
    </li>
  );
};

export default Todo;
