//Tahya
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.getElementById("submit-todo");
const inputTodos = document.getElementById("todos");
const inputNewTask = document.getElementById("taskNew");

inputNewTask.addEventListener("click", event =>{
  event.preventDefault();
  const value = "Nouvelle tâche";
  addTodo(value);
  saveAJAX()
});

form.addEventListener("submit", event => {
  event.preventDefault();
  inputTodos.value = JSON.stringify(todos,undefined,4);
  saveAJAX();
  // form.submit();
});

var todoJSON = document.currentScript.getAttribute('one');
const todos = JSON.parse(todoJSON);

const displayTodo = () => {
  const todosNode = todos.map((task, index) => {
    if (task.editMode) {
      return createTodoEditElement(task, index);
    } else {
      return createTodoElement(task, index);
    }
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
  const select= document.createElement("select");
  const options = ["waiting","in progress","done"];
  options.forEach(option => {
    var opt = document.createElement('option');
    opt.setAttribute('value',option);
    opt.innerHTML = option;
    if(option == 'waiting')
    opt.style.color = 'red';
    else if(option == 'in progress')
    opt.style.color = 'yellow';
    else
    opt.style.color = 'green';


    select.appendChild(opt);
  });

  if(typeof todos[index].status !== "undefined"){
    var value = todos[index].status;
    select.value = value;
  }
  if(select.value == "in progress")
  select.style.color = "yellow";
  else if (select.value == "waiting")
  select.style.color = "red";


  select.addEventListener("change",event=>{
    var selectedOption = select.options[select.selectedIndex].value;
    changeStatus(index, selectedOption);
    saveAJAX();
  });
  const li = document.createElement("li");
  li.className = "li-todo";
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  const buttonEdit = document.createElement("button");
  buttonEdit.innerHTML = "Edit";
  buttonDelete.addEventListener("click", event => {
    event.stopPropagation();
    deleteTodo(index);
    saveAJAX();
  });
  buttonEdit.addEventListener("click", event => {
    event.stopPropagation();
    toggleEditMode(index);
    // saveAJAX();
  });
  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}">tache numero : ${index+1}</span>
    <p>${todo.text}</p>
  `;
  // li.addEventListener("click", event => {
  //   toggleTodo(index);
  // });

  select.addEventListener("click", event=>{
    event.stopPropagation();
    event.preventDefault();
  });


  li.append(buttonEdit, buttonDelete, select);
  return li;
};

const createTodoEditElement = (todo, index) => {
  const li = document.createElement("li");
  li.className = "li-todo-edit";
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  input.size = todo.text.length;
  const buttonSave = document.createElement("button");
  buttonSave.innerHTML = "Save";
  const buttonCancel = document.createElement("button");
  buttonCancel.innerHTML = "Cancel";
  buttonCancel.addEventListener("click", event => {
    event.stopPropagation();
    toggleEditMode(index);
    // saveAJAX();
  });
  buttonSave.addEventListener("click", event => {
    editTodo(index, input);
    saveAJAX();
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

const changeStatus = (index,status) => {
  todos[index].status = status;
  displayTodo();
};

const editTodo = (index, input) => {
  const value = input.value;
    todos[index].text = value;
    todos[index].editMode = false;
  displayTodo();
};

displayTodo();

const saveAJAX = ()=>{
  var data = JSON.stringify(todos, null, 4);
  $.ajax({
    type: 'post',
    url: '/ajax',
    data: {objectData: data},
    // contentType: 'application/json' //ne marche pas pour une obscure raison...
  });
  document.getElementsByClassName("save")[0].style.opacity = 1;
  setTimeout(()=>{document.getElementsByClassName("save")[0].style.opacity = 0;}
  ,1000);
  
};