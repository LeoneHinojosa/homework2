const newItem = document.getElementById("newItemTxt");
const addButton = document.getElementById("newItemBtn");
const pendingList = document.getElementById("pending");
const completedList = document.getElementById("completed");

addButton.addEventListener("click", addItemFunc);
function addItemFunc(){ 
    if(newItem.value !=""){
        const addItem = document.createElement("li")
        addItem.innerHTML = newItem.value
        pendingList.appendChild(addItem)
        newItem.value = ""
    }
    else {
        alert("Please provide an item to add the to-do list.")
    }
}

pendingList.addEventListener("click", function(){ pendingEventFunc(event)})
function pendingEventFunc(event){
    if(event.target.localName == "li"){
        const item = event.target
        completedList.appendChild(item)
    }
}

completedList.addEventListener("click",function(){completedEventFunc(event)})
function completedEventFunc(event){
    if(event.target.localName == "li"){
        const item = event.target
        pendingList.appendChild(item)
    }
}
