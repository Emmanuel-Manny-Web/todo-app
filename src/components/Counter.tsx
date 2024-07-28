import { useTodoContext } from "../lib/hooks";

export default function Counter() {
  const { completedTodo, todos } = useTodoContext()

  return (
    <p>
      <b>{completedTodo}</b> / {todos && todos.length} todos completed
    </p>
  );
}
