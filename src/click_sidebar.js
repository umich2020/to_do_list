//changes which output based on clicking the sidebar
import {today_value, todos,tmr_dos} from "./array.js"
import {removeAllItems , showItems, addDelete} from "./controller.js"
import { todo_id } from "./item_creating.js"
let today = document.querySelector("today")
    today.addEventListener("click", () => {
        today_value.tdy = true
        todo_id.id -= 1*todos.length
        removeAllItems()
        showItems(todos)
        addDelete()
    })
let later = document.querySelector("later")
later.addEventListener("click", () => {
    today_value.tdy = false
    todo_id.tmr_id -= 1*tmr_dos.length
    removeAllItems()
    showItems(tmr_dos)
    addDelete()
})
//can add on clicick css that changes the border or something
