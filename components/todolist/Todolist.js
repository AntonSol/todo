import { Button } from "../common/Button/Button.js";
import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.js";
import { Header } from "./Header/header.js";
import { Taskslist } from "./Taskslists/Taskslist.js";
export function Todolist(todolistData) {
  const container = document.createElement("div");
  const headerElement = Header(todolistData.todolist.title);
  const taskslistElement = Taskslist(todolistData.todolist.tasks);
  const BtnElement = Button("+", () => {});
  const addNewTaskDialogElement = AddNewTaskDialog();
  container.append(
    headerElement,
    taskslistElement,
    BtnElement,
    addNewTaskDialogElement
  );

  return container;
}
