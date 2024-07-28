import DeleteButton from "./DeleteButton";
import { useTodoContext } from "../lib/hooks";

export default function TodoList() {
  const { todos, deleteTodo, updateTodo } = useTodoContext()
  return (
    <ul>
      {
        todos.length === 0 && (
          <li className="h-full flex justify-center items-center font-semibold">
            Start by adding a todo
          </li>
        )
      }
      {
        todos && todos.map((todo, index) => {
          return (
            <li className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]" key={index}>
              <span className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`} onClick={() => updateTodo(todo.text)}>{todo.text}</span>
              <DeleteButton text={todo.text} handleDelete={() => deleteTodo(todo)} />
            </li>
          );
        })
      }
    </ul>
  );
}
