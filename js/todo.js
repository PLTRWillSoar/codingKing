const toDoForm = document.getElementById("todo-form");
let toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
let ul = document.querySelector('ul');

const TODOS_KEY = "todos";
const CHECKED_CLASSNAME = "checked";


let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id
    li.style = "list-style:none";
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    const input = document.createElement("input");
    input.type = "checkbox";
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);

    //취소선 긋기
    const checkClick = (i) => {
        if(ul.children[i].querySelector('span').style.textDecorationLine === "line-through"){
           ul.children[i].querySelector('span').style.textDecorationLine = '';
        } else {
           ul.children[i].querySelector('span').style.textDecorationLine = "line-through"
        }
     }
     for(let i = 0; i < ul.childElementCount; i++){
        ul.children[i].querySelector('input').value = i
        ul.children[i].querySelector('input').setAttribute('onClick', `checkClick(${i})`);
     }


    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


const checkClick = (i) => {
    if(ul.children[i].querySelector('span').style.textDecorationLine === "line-through"){
       ul.children[i].querySelector('span').style.textDecorationLine = '';
    } else {
       ul.children[i].querySelector('span').style.textDecorationLine = "line-through"
    }
 }
 
 for(let i = 0; i < ul.childElementCount; i++){
    ul.children[i].querySelector('input').value = i
    ul.children[i].querySelector('input').setAttribute('onClick', `checkClick(${i})`);
 }