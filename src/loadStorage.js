import { domShow,todo_id } from "./item_creating.js"
import { today_value } from "./array.js"
import { addDelete } from "./controller.js"
console.log(localStorage)
export function showLocal () {
        for (let i=0; i< localStorage.length; i++) {
        let key=localStorage.key(i)
        let item = localStorage.getItem(key)
        if (key != "loglevel") {
            item = JSON.parse(item)
        }        
        let title = item[0]
        let description = item[1]
        let dueDate = item[2]
        let priority = item[3]
        var tdy = item[4]
        if (tdy === today_value.tdy) {
            domShow(title,description,dueDate,priority)
        }
    }
    if (tdy === true) {
        todo_id.id -= localStorage.length
    } else {
        todo_id.tmr_id -= localStorage.length
    }
}
// export function getTdy () {
//     for (let i=0; i< localStorage.length; i++) {
//         let key=localStorage.key(i)
//         let item = localStorage.getItem(key)
//         if (key != "loglevel") {
//             item = JSON.parse(item)
//         }
//         var tdy = item[4]
//     }
// }
export function deleteLocal (key) {
    localStorage.removeItem(key)
    console.log("the item has been deleted "+ localStorage)
}
showLocal()
addDelete()
// localStorage.clear()