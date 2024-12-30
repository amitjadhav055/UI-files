
const inputField = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

const addTask = () => {
    const taskText = inputField.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    
    const listItem = document.createElement("li");
    listItem.className = "todo-item";


    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);


    inputField.value = "";

    
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
    });
};


addButton.addEventListener("click", addTask);

inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
