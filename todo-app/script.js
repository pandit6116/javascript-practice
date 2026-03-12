const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const modeToggle = document.getElementById("modeToggle");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

renderTasks();

addBtn.addEventListener("click", addTask);

function addTask(){

const text = input.value.trim();

if(text === "") return;

tasks.push({text, completed:false});

input.value="";

saveTasks();
renderTasks();

}

function renderTasks(){

taskList.innerHTML="";

tasks
.filter(task=>{
if(currentFilter==="active") return !task.completed;
if(currentFilter==="completed") return task.completed;
return true;
})
.forEach((task,index)=>{

const li=document.createElement("li");

li.draggable=true;

if(task.completed) li.classList.add("completed");

li.innerHTML=`
<span onclick="toggleTask(${index})">${task.text}</span>
<button class="delete" onclick="deleteTask(${index})">X</button>
`;

taskList.appendChild(li);

});

}

function toggleTask(index){

tasks[index].completed=!tasks[index].completed;

saveTasks();
renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
renderTasks();

}

function filterTasks(type){

currentFilter=type;

renderTasks();

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}

/* Dark Mode */

modeToggle.onclick=function(){

document.body.classList.toggle("dark");

}