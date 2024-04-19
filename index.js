import { data } from "./data/data.js";
import { Todolist } from "./components/todolist/Todolist.js";

const root = document.getElementById("root");
const todolistElement = Todolist(data);
root.append(todolistElement);
