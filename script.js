const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener("click", function() {
    const task = taskInput.value;
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
    console.log(task);
});