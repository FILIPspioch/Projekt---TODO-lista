//elementy
const viewport = document.querySelector("#main");
const tasks = document.querySelector("#tasks_container");
const tb_task = document.querySelector("#zadanie");
const btn = document.querySelector("button");

//tablice

let todo_task = new Array();

//funkcje

function addElement(text) {
  todo_task.push(text);
  tb_task.value = "";

  todoRender();
}

let taskElem;

function todoRender() {
  let lista_todo = "";

  for (let i = 0; i < todo_task.length; i++) {
    let task = todo_task[i];
    taskElem = `<h4 class="element">
    <input type="checkbox" name="isDone" class="isDone_btn" onclick=isClicked(${i})>
    <p>${task}</p> 
    <button type="button" class="btn_delete" onclick=deleteTask(${i})><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
    </svg>
    </button> 
    </h4>`;

    lista_todo += taskElem;
  }

  tasks.innerHTML = lista_todo;
}

function deleteTask(i) {
  console.log(i);
  todo_task.splice(i, 1);

  todoRender();
}

function isClicked(i) {
  setTimeout(function () {
    deleteTask(i);
  }, 1000);
}

//kod

btn.addEventListener("click", () => {
  addElement(String(tb_task.value));
  todoRender();
});
