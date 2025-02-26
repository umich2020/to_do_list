//this connects array.js and item_creating.js to represent what is in the array
//this starts off with some defaults by will
// eventually take the input from the add button
import {domShow} from "./item_creating.js"
import {todos, createToDo} from "./array.js"
console.log(todos)
createToDo("title1","descr1","12/31","red")
createToDo("title2","descr2","3/5","yellow")
console.log(todos)
domShow("title2","descr2","3/5","yellow")
console.log("the thing has been ran")