import { Header } from "./Header/header.js";
import { Taskslist } from "./Taskslists/Taskslist.js";
export function Todolist(todolistData) {
  const container = document.createElement("div");
  const headerElement = Header(todolistData.todolist.title);
  const taskslistElement = Taskslist(todolistData.todolist.tasks);
  container.append(headerElement, taskslistElement);

  return container;
}
