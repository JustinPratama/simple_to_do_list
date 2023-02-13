let addButton = document.getElementById("addButton");
let addInput = document.getElementById("addInput");
let toDoList = document.getElementById("toDoList");
let completedList = document.getElementById("completedList");

addButton.addEventListener("click", addTask);
addInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let toDo = addInput.value;
    if (toDo) {
        let newLi = document.createElement("li");
        newLi.innerHTML = toDo + 
                          '<button class="delete">Delete</button>' + 
                          '<button class="completed">Completed</button>' + 
                          '<input type="time" name="time" placeholder="set time">'+
                          '<button class="edit">Edit</button>'
        toDoList.appendChild(newLi);
        addInput.value = "";
        addInput.focus();
        let deleteButton = newLi.getElementsByClassName("delete")[0];
        deleteButton.addEventListener("click", function () {
            toDoList.removeChild(newLi);
        });
        let completedButton = newLi.getElementsByClassName("completed")[0];
        completedButton.addEventListener("click", function () {
            completedList.appendChild(newLi);
            newLi.innerHTML = toDo + 
                              '<button class="deleteCompleted">Delete</button>'+
                              '<button class="editCompleted">Edit</button>';
            let deleteCompletedButton = newLi.getElementsByClassName("deleteCompleted")[0];
            deleteCompletedButton.addEventListener("click", function () {
                completedList.removeChild(newLi);
            });
            let editCompletedButton = newLi.getElementsByClassName("editCompleted")[0];
            editCompletedButton.addEventListener("click", function () {
                let newToDo = prompt("Enter new To-do :");
                if (newToDo) {
                    newLi.innerHTML = newToDo + 
                                      '<button class="deleteCompleted">Delete</button>'+
                                      '<button class="editCompleted">Edit</button>';
                }
            });
        });
        let editButton = newLi.getElementsByClassName("edit")[0];
        editButton.addEventListener("click", function () {
            let newToDo = prompt("Enter new To-do :");
            if (newToDo) {
                newLi.innerHTML = newToDo + 
                                  '<button class="delete">Delete</button>' + 
                                  '<button class="completed">Completed</button>' + 
                                  '<input type="time" name="time" placeholder="set time">'+
                                  '<button class="edit">Edit</button>';
            }
        });
    }
}
