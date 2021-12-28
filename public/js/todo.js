//Tahya
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");
const taskButton = document.getElementById("newTask");
const inputTodos = document.getElementById("todos");

form.addEventListener("submit", event => {
  event.preventDefault();
  const value = input.value;
  // input.value = "";
  addTodo(value);
  inputTodos.value = "JSON.stringify(todos,null,2)";
  callFetch();
  console.log(todos);
});
var todoJSON = document.currentScript.getAttribute('one');
const todos = JSON.parse(todoJSON);
const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    if (todo.editMode) {
      return createTodoEditElement(todo, index);
    } else {
      return createTodoElement(todo, index);
    }
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  li.className = "li-todo";
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  const buttonEdit = document.createElement("button");
  buttonEdit.innerHTML = "Edit";
  buttonDelete.addEventListener("click", event => {
    event.stopPropagation();
    deleteTodo(index);
  });
  buttonEdit.addEventListener("click", event => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p>${todo.text}</p>
  `;
  li.addEventListener("click", event => {
    toggleTodo(index);
  });
  li.append(buttonEdit, buttonDelete);
  return li;
};

const createTodoEditElement = (todo, index) => {
  const li = document.createElement("li");
  li.className = "li-todo-edit";
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  const buttonSave = document.createElement("button");
  buttonSave.innerHTML = "Save";
  const buttonCancel = document.createElement("button");
  buttonCancel.innerHTML = "Cancel";
  buttonCancel.addEventListener("click", event => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  buttonSave.addEventListener("click", event => {
    editTodo(index, input);
  });
  li.append(input,document.createElement("br"),document.createElement("br"), buttonCancel, buttonSave);
  return li;
};

const addTodo = text => {
  todos.push({
    text,
    done: false
  });
  displayTodo();
};

const deleteTodo = index => {
  todos.splice(index, 1);
  displayTodo();
};

const toggleTodo = index => {
  todos[index].done = !todos[index].done;
  displayTodo();
};

const toggleEditMode = index => {
  todos[index].editMode = !todos[index].editMode;
  displayTodo();
};

const editTodo = (index, input) => {
  const value = input.value;
    todos[index].text = value;
    todos[index].editMode = false;
  displayTodo();
};

displayTodo();

function callFetch(){
  fetch('/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: todos
  });
}
