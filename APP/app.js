
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// function to add task :
function addTask() {
const tasktext = taskInput.value.trim();

const li = document.createElement('li');
if (tasktext==="") return;

li.innerHTML = `<span>${tasktext}</span>
                <button onclick="doneTask(this)">Done</button>
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>`;
              //  console.log(li);
taskList.appendChild(li);
taskInput.value="";

}

function doneTask(button) {
  
}