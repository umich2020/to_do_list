//changes which output based on clicking the sidebar
import {today_value, todos,tmr_dos} from "./array.js"
import {removeAllItems , showItems, addDelete} from "./controller.js"
import { todo_id } from "./item_creating.js"
import { showLocal } from "./loadStorage.js"

let counterTdy = 1
let counterLtr = 1
let today = document.querySelector("today")
    today.addEventListener("click", () => {
        increaseCounter(counterTdy)
        today_value.tdy = true
        todo_id.id -= 1*counterTdy
        console.log("the id of the bug i for today is "+todo_id.id)
        removeAllItems()
        showItems(todos)
        showLocal()
        addDelete()
        console.log("the today counter is "+counterLtr )
    })
let later = document.querySelector("later")
later.addEventListener("click", () => {
    increaseCounter(counterLtr)
    today_value.tdy = false
    todo_id.tmr_id -= 1*counterLtr
    console.log("the id of the bug for later is "+todo_id.tmr_id)
    removeAllItems()
    showItems(tmr_dos)
    showLocal()
    addDelete()
    console.log("the later counter is "+counterLtr )
})
//can add on clicick css that changes the border or something


function increaseCounter (counter) {
        for (let i=0; i< localStorage.length; i++) {
        let key=localStorage.key(i)
        let item = localStorage.getItem(key)
        if (key != "loglevel") {
            item = JSON.parse(item)
        }
        let tdy = item[4]
        // console.log("prioirty is "+tdy+"and today value is "+today_value.tdy)
        if (tdy === today_value.tdy) {
            counter ++
        }
    }
}