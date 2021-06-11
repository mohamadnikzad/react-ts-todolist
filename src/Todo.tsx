import { ITodo } from "./Interfaces";

interface IProps {
  todo: ITodo;
  HandleRemove: (id: number) => void;
  HandleDoneTodo: (id: number) => void;
}

const Todo: React.FC<IProps> = ({ todo, HandleRemove, HandleDoneTodo }) => {
  return (
    <li className={`${todo.isDone ? "done" : ""}`}>
      <p onClick={() => HandleDoneTodo(todo.id)}>{todo.text}</p>
      <button onClick={() => HandleRemove(todo.id)}>X</button>
    </li>
  );
};

export default Todo;
