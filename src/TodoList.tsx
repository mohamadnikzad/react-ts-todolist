import { ITodo } from "./Interfaces";
import TD from "./Todo";

interface IProps {
  todos: ITodo[];
  HandleRemove: (id: number) => void;
  HandleDoneTodo: (id: number) => void;
}

const TodoList: React.FC<IProps> = ({
  todos,
  HandleRemove,
  HandleDoneTodo,
}) => {
  const todoList = todos.map((todo) => (
    <TD
      key={todo.id}
      todo={todo}
      HandleRemove={HandleRemove}
      HandleDoneTodo={HandleDoneTodo}
    />
  ));
  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
};

export default TodoList;
