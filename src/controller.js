//this connects array.js and item_creating.js to represent what is in the array

import {domShow} from "./item_creating.js"
import {todos, createToDo} from "./array.js"
console.log(todos)

createToDo("title4","description4","5/5","green")
createToDo("title5","description5","6/6","green")
createToDo("title7","description7","7/7","green")

for (let i =0; i<todos.length;i++) {
    domShow(todos[i][0],todos[i][1],todos[i][2],todos[i][3])
}
const addDelete = (function  () {
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

            console.log(todos)

        })
    })
})()
const addComplete = (function  () {
    const complete_buttons = document.querySelectorAll(".complete_button")
    complete_buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(" complete!!")
        })
    })
})()

const div = document.querySelector("#add_item")
div.addEventListener("click", ()=> {
    alert('this has been clicked')
})