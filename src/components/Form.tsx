import { useState } from "react";
import Button from "./Button";
import { useTodoContext } from "../lib/hooks";

export default function Form() {
  const { addTodo } = useTodoContext()
  const [todo, setTodo] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    todo && addTodo({ text: todo, isCompleted: false });
    setTodo("")
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px] outline-[#ccc]"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <Button name="Add to list" />
    </form>
  );
}
