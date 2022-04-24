import addTodoToView from "./todoList.js";

let todoList = [];

const $todoAddButton = document.querySelector("#addTodo");
const $inputValue = document.querySelector("#todoInput");

const clearInput = () => {
  $inputValue.value = "";
};

const addTodoHandler = () => {
  if ($inputValue.value.trim() === "") return;
  const todo = {};
  todo.id = `todo-${todoList.length}`;
  todo.value = $inputValue.value;
  todoList = [...todoList, todo];
  addTodoToView(todoList);
  clearInput();
};

$inputValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodoHandler();
  }
});
$todoAddButton.addEventListener("click", addTodoHandler);
