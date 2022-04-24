const $todoListContainer = document.querySelector(".todoListContainer");

const addTodoToView = (todoList) => {
  const unorderedList = document.createElement("UL");
  const listItem = document.createElement("LI");
  todoList.forEach((list) => {
    let textNode = document.createTextNode(list.value);
    listItem.appendChild(textNode);
    unorderedList.appendChild(listItem);
  });
  $todoListContainer.appendChild(unorderedList);
};

export default addTodoToView;
