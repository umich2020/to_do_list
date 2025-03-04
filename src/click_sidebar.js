//changes which output based on clicking the sidebar
import {today_value, todos,tmr_dos} from "./array.js"
import {removeAllItems , showItems, addDelete} from "./controller.js"
let today = document.querySelector("today")
    today.addEventListener("click", () => {
        today_value.tdy = true
        removeAllItems()
        showItems(todos)
        addDelete()
    })
let later = document.querySelector("later")
later.addEventListener("click", () => {
    today_value.tdy = false
    removeAllItems()
    showItems(tmr_dos)
    addDelete()
})
//can add on clicick css that changes the border or something