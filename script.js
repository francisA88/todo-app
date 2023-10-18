let todoList = document.getElementById("todo-list");
let inputField = document.querySelector('input');
let button = document.getElementById('add-button');

button.addEventListener("click", function(e){
    //First off, do nothing if the input field is empty
    if (inputField.value === ""){
        alert("Input field cannot be empty");
        return;
    }
    
    let newTodoItem = document.createElement('li');
    newTodoItem.classList.add('todo-list-item');
    newTodoItem.innerText = inputField.value;
    newTodoItem.addEventListener('click', function(e){
        this.style.textDecoration = "line-through";
    })
    newTodoItem.addEventListener('dblclick', function(e){
        todoList.removeChild(this);
    })
    //Clears the input field by setting its value to an empty string.
    inputField.value = "";
    //Adds the newly created item to the list
    todoList.appendChild(newTodoItem);
})