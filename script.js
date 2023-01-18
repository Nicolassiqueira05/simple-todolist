const listEl = document.querySelector("#list")
const inputEl = document.querySelector("#input-text")
const addButtonEl = document.querySelector("#add-button")

const Ls = localStorage

let list

function setList(){
    if(Ls.getItem("items") == null){
        Ls.setItem("items", "[]")
        setList()
    }else{
        list = JSON.parse(Ls.getItem("items"))
    }
}

function setStorage() {
    Ls.setItem("items", JSON.stringify(list))
}

function addItem(item){
    list.push(item)
    setStorage()
    printList()
}
function delItem(item){
    list.splice(item, 1)
    setStorage()
    printList()
}

function printList(){
    listEl.innerHTML = null
    for (let i = 0; i < list.length; i++){
        listEl.innerHTML = listEl.innerHTML + "<li class='item'><p class='item-text'>" + list[i] + "</p>" + "<button id='delete-button' onClick='delItem("+ i +")'>X</button></li>"
    }
}

setList()
printList()


addButtonEl.addEventListener("click", ()=>{
    if (inputEl.value == ""){
        return null
    }else{
        addItem(inputEl.value); inputEl.value = ""
    }
})

