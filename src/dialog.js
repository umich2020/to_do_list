import { domShow } from "./item_creating.js"
import { todos, createToDo, tmr_dos, today_value } from "./array.js"
import { addDelete } from "./controller.js"


const dialog = document.querySelector("dialog")
const div = document.querySelector("#add_item")
div.addEventListener("click", ()=> {
    dialog.showModal()
})
const dialog_close = document.querySelector("#close_dialog")
dialog_close.addEventListener("click", () => {
    dialog.close()
})
const submit_button =document.getElementById("submit_button")

const form = new FormData(document.getElementById("new_todo"))
submit_button.addEventListener("click", () => {
    let title=document.getElementById('title').value
    let description=document.getElementById('description').value
    let due_date =document.getElementById('due_date').value
    let priority = document.querySelector(`input[name="priority_type"]:checked`).value
    createToDo(title,description,due_date,priority)
    domShow(title,description,due_date,priority)
    dialog.close()
    addDelete()
    const tempArray = [title,description,due_date,priority,today_value.tdy]
    localStorage.setItem(title,JSON.stringify(tempArray))
})
