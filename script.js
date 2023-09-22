var field = document.querySelector('.field')
var addButton = document.querySelector('#addButton')
var todoList = document.querySelector('.todoList')
var doneList = document.querySelector('.doneList')

function createTask() {
    var task = document.createElement("li")
    task.textContent = field.value
    var deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
	deleteButton.className = "btn"
    var doneButton = document.createElement("button")
    doneButton.innerText = "Complete"
	doneButton.className = "btn"
    todoList.appendChild(task)
    task.appendChild(doneButton)
    task.appendChild(deleteButton)
    deleteButton.onclick = deleteTask
    doneButton.onclick = doneTask
    field.value = ""
}
addButton.onclick = createTask;


function deleteTask() {
	var listItem = this.parentNode
    var ul = listItem.parentNode
	ul.removeChild(listItem)
}

function doneTask() {
    var listItem = this.parentNode
    doneList.appendChild(listItem)
    listItem.removeChild(this)
}

var evenButton = document.querySelector("#even")
var oddButton = document.querySelector("#odd")
evenButton.onclick = highlightEven
evenButton.onclick = highlightOdd


function highlightEven() {
    clearListStyle()
    var listElements = todoList.getElementsByTagName("li")
    for (let i = 1; i < listElements.length; i += 2) {
        listElements[i].classList.add("special-style")
    }
}

function highlightOdd() {
    clearListStyle()
    var listElements = todoList.getElementsByTagName("li")
    for (let i = 0; i < listElements.length; i += 2) {
        listElements[i].classList.add("special-style")
    }
}

function clearListStyle() {
    var listElements = todoList.getElementsByTagName("li")
    for (let i = 0; i < listElements.length; ++i) {
        listElements[i].classList.remove("special-style")
    }
}

var firstButton = document.querySelector("#first")
var lastButton = document.querySelector("#last")
firstButton.onclick = deleteFirst
lastButton.onclick = deleteLast

function deleteFirst() {
    var listElements = todoList.getElementsByTagName("li")
    todoList.removeChild(listElements[[0]])
}

function deleteLast() {
    var listElements = todoList.getElementsByTagName("li")
    todoList.removeChild(listElements[[listElements.length - 1]])
}