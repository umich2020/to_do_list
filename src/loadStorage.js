import { domShow } from "./item_creating.js"
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
        
        // console.log("the item is now being returned: " +item[0])
        let title = item[0]
        let description = item[1]
        let dueDate = item[2]
        let priority = item[3]
        let tdy = item[4]
        // console.log("prioirty is "+tdy+"and today value is "+today_value.tdy)
        if (tdy === today_value.tdy) {
            domShow(title,description,dueDate,priority)

        }
    }
}
export function deleteLocal (key) {
    localStorage.removeItem(key)
    console.log("the item has been deleted "+ localStorage)
}
showLocal()
addDelete()
// localStorage.clear()