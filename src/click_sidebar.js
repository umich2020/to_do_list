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
        removeAllItems()
        showItems(todos)
        showLocal()
        addDelete()
    })
let later = document.querySelector("later")
later.addEventListener("click", () => {
    increaseCounter(counterLtr)
    today_value.tdy = false
    // console.log("tmmmr id is before the counter " +todo_id.tmr_id)
    // console.log("this counter is "+ counterLtr)
    todo_id.tmr_id -= 1*counterLtr
    // console.log("id of the bug for later is "+todo_id.tmr_id)
    removeAllItems()
    showItems(tmr_dos)
    // console.log("3RD STEP "+todo_id.tmr_id)
    showLocal()
    addDelete()
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
    console.log("the counter is now "+ counter)

}