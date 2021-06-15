import { ITodo } from "./Interfaces";
import TodoItem from "./Todo";

interface IProps {
  todos: ITodo[];
  HandleRemove: (id: number) => void;
  HandleDoneTodo: (id: number) => void;
  HandleEditTodo: (id: number) => void;
}

const TodoList: React.FC<IProps> = ({
  todos,
  HandleRemove,
  HandleDoneTodo,
  HandleEditTodo,
}) => {
  const todoList = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      HandleRemove={HandleRemove}
      HandleDoneTodo={HandleDoneTodo}
      HandleEditTodo={HandleEditTodo}
    />
  ));
  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
};

export default TodoList;
