import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

export type TodoType = {
  text: string;
  isCompleted: boolean;
};

type Props = {
  children: ReactNode
}

type UserContextType = {
  todos: TodoType[];
  addTodo: (value: TodoType) => void
  deleteTodo: (value: TodoType) => void
  updateTodo: (value: string) => void
  completedTodo: number
};

const contextValue: UserContextType = {
  todos: [],
  addTodo: () => { },
  deleteTodo: () => { },
  updateTodo: () => { },
  completedTodo: 0
};

export const UserContext = createContext<UserContextType>(contextValue);

export default function UserProvider({ children }: Props) {
  const { isAuthenticated } = useKindeAuth()
  const savedTodos = localStorage.getItem("todos")
  const [todos, setTodos] = useState<TodoType[]>(() => savedTodos ? JSON.parse(savedTodos): [])
  
  const completedTodo = todos.filter((todo) => todo.isCompleted).length;

  const addTodo = (todo: TodoType) => {
    if (todos.length === 3 && !isAuthenticated) {
      alert("You have to be logged in!")
      return
    }
    setTodos([...todos, todo])
  }
  const deleteTodo = (value: TodoType) => {
    const allTodos = todos.filter((todo) => todo.text !== value.text)
    setTodos(allTodos)
  }
  const updateTodo = (value: string) => {
    todos
      .filter((todo) =>
        todo.text === value ? (todo.isCompleted = !todo.isCompleted) : null
      )
    setTodos([...todos].sort((a, b) => Number(b.isCompleted) - Number(a.isCompleted)).reverse())
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <UserContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, completedTodo }}>
      {children}
    </UserContext.Provider>
  )
}
