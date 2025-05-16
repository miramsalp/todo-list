let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

// addtask
function Addtask() {
    if (inputBox.value === "") {
        alert("You have to write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("storage", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("storage");
}

showTask();