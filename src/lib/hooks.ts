import { useContext } from "react";
import { UserContext } from "../components/UserProvider";

export function useTodoContext() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("Forgot to wrap app in provider")
  }
  return context
}