export const data = {
  todolist: {
    id: crypto.randomUUID(),
    title: "Todolist",
    tasks: [
      {
        id: crypto.randomUUID(),
        title: "Learn HTML",
      },
      {
        id: crypto.randomUUID(),
        title: "Learn CSS",
      },
      {
        id: crypto.randomUUID(),
        title: "Learn JS",
      },
      {
        id: crypto.randomUUID(),
        title: "Learn React",
      },
    ],
    addNewTaskDialog: {
      isOpen: false,
    },
  },
};

let notifysubscriber = function () {};

export function subscribe(subscriber) {
  notifysubscriber = subscriber;
}
export function deleteTask(taskId) {
  const tasks = data.todolist.tasks;
  data.todolist.tasks = tasks.filter((t) => t.id !== taskId);
  notifysubscriber();
}
export function addTask(taskTitle) {
  const newTask = {
    id: crypto.randomUUID(),
    title: taskTitle,
  };
  data.todolist.tasks.push(newTask);
  notifysubscriber();
}
export function openAddNewTaskDialog() {
  data.todolist.addNewTaskDialog.isOpen =
    !data.todolist.addNewTaskDialog.isOpen;
  notifysubscriber();
}
export function closeAddNewTaskDialog() {
  data.todolist.addNewTaskDialog.isOpen = false;
  notifysubscriber();
}
