const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener("click", function() {
    const task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = "";
    console.log(task);
});