const inputBox = document.querySelector("#input-box")
const listContainer =document.querySelector(".list-container")
const button = document.querySelector("#addBtn")

button.addEventListener("click" , function(e){
    if(inputBox.value===''){
        alert("write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData()
})

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData (){
    listContainer.innerHTML =localStorage.getItem("data")
}

showData()