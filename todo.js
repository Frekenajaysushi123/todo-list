
function addlist() {
    const a = document.getElementById("task");
    const b = a.value.trim();
    if (b !== "") {
        const list = document.getElementById("taskList");
        const li = document.createElement("li");
        li.className = "task-item";
        li.innerHTML = `
            <label>${b}</label>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        list.appendChild(li);
        a.value = "";
    }
}

function editTask(button) {
    const label = button.parentElement.querySelector("label");
    const updatedTaskText = prompt("Edit task:", label.textContent);
    if (updatedTaskText !== null) {
        label.textContent = updatedTaskText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    const taskList = taskItem.parentElement;
    taskList.removeChild(taskItem);
}