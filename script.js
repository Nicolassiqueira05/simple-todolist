const listEl = document.querySelector("#list")
const inputEl = document.querySelector("#input-text")
const addButtonEl = document.querySelector("#add-button")

const Ls = localStorage

let list

function setList(){
    //this function read the list, set it as an array with needed, else its load the local storage inside list
    //alert: this function should be called only one time
    if(Ls.getItem("items") == null){
        Ls.setItem("items", "[]")
        setList()
    }else{
        list = JSON.parse(Ls.getItem("items"))
    }
}

function setStorage() {
    //this function set the items from array list in the local storage
    Ls.setItem("items", JSON.stringify(list))
}

function addItem(item){
    //This function add an item to the list and to local storage, then its print the new list
    list.push(item)
    setStorage()
    printList()
}
function delItem(item){
    //This function remove an item from list and from the local storage, then its print the new list
    list.splice(item, 1)
    setStorage()
    printList()
}

function printList(){
    //This function clear the printed list and then print the new list
    listEl.innerHTML = null
    for (let i = 0; i < list.length; i++){
        listEl.innerHTML = listEl.innerHTML + "<li class='item'><p class='item-text'>" + list[i] + "</p>" + "<button class='delete-button' onClick='delItem("+ i +")'><img class='delete-image' src='./media/icons/close.svg' alt='x'></button></li>"
    }
}

setList()
printList()


//when the addButtonEl got clicked, its read the value of the text input when call the addItem() function
addButtonEl.addEventListener("click", ()=>{
    if (inputEl.value == ""){
        return null
    }else{
        addItem(inputEl.value); inputEl.value = ""
    }
})
//when Enter Key got clicked, its read the value of the text input when call the addItem() function
inputEl.addEventListener('keypress', (e)=>{
    if (e.code == 'Enter') {
        if (inputEl.value == "") {
            return null
        }else{
            addItem(inputEl.value); inputEl.value = ""
        }
    }
})

