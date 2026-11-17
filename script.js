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

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    li.appendChild(removeButton);
    removeButton.addEventListener("click", function() {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";

    console.log(task);
});