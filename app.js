// Seleção elementos
const todoForm = document.querySelector("task-form");
const todoInput = document.querySelector("input-tarefa");
const todoList = document.querySelector("list-todo");
const editForm = document.querySelector("edit-form");
const editinput = document.querySelector("input-edit");
const Cancelbtn = document.querySelector("btn-cancel-edit");

// Funções
const saveTodo = (text) => {};
// Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});
