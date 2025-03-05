//this connects array.js and item_creating.js to represent what is in the array
//now i'm able to create array
import {domShow} from "./item_creating.js"
import {todos, tmr_dos, createToDo,today_value} from "./array.js"
today_value.tdy=false
createToDo("title4","description4","5/5","green")
today_value.tdy=true
createToDo("title7","description7","7/7","green")
export function showItems (array) {
    for (let i =0; i<array.length;i++) {
        domShow(array[i][0],array[i][1],array[i][2],array[i][3])
    }
}
showItems(todos)

export function removeAllItems () {
    const items = document.getElementById("to_do_items").childNodes
    for (let i = items.length -1 ; i>=0; i--) {
        items[i].remove()
    }
}
export function addDelete () {
    const delete_buttons = document.querySelectorAll(".delete_button")
    delete_buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.parentElement.id
            const items = document.getElementById(id.toString()).childNodes
            const parent_item = document.getElementById(id.toString())
            for (let i = items.length -1 ; i>=0; i--) {
                items[i].remove()
            }
            parent_item.remove()
            for (let i =0; i<todos[id].length;i++) {
                todos[id][i] = null
            }
            //should've seperated the dom delete portion cuz i'll 
            // need to use it later on
            console.log(todos)

        })
    })
}
const addComplete = (function  () {
    const complete_buttons = document.querySelectorAll(".complete_button")
    complete_buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(" complete!!")
        })
    })
})()

// the dialog and dialog close show go to dialog