const todoInput = document.querySelector("#todo-input");
const dateInput = document.querySelector("#date-input");
const todoButton = document.querySelector("#add-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

function addTodo(event) {
    event.preventDefault();

    if (todoInput.value === "" || dateInput.value === "") {
        alert("Silakan isi nama tugas dan tanggal!");
        return;
    }

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const todoDate = document.createElement("span");
    todoDate.innerText = dateInput.value;
    todoDate.classList.add("todo-date");
    todoDiv.appendChild(todoDate);

    const completedButton = document.createElement("button");
    completedButton.innerText = "Done";
    completedButton.classList.add("check-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerText = "Del";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
    dateInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === "check-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        if (todo.nodeType === 1) {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        }
    });
}