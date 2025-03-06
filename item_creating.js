import {today_value} from "./array.js"
let todo_id ={id:1, tmr_id:1}
function createElement(element,text="", parent="to_do_items", _class="",id="") {
    // const todo_items = document.querySelector("to_do_items")
    const item_list = document.querySelector(parent)
    const newElement = document.createElement(element)
    newElement.textContent = text
    newElement.setAttribute("class",_class)
    if(element==="item" ) {
        if (today_value.tdy === true) {
            newElement.setAttribute("id",id)
            todo_id.id++
        } else {
            newElement.setAttribute("id",id)
            todo_id.tmr_id++
        }
    }
    item_list.insertAdjacentElement("afterbegin",newElement)
}



function createToDo (title,description, dueDate, priority) {
    if (today_value.tdy === true) {
        createElement("item",null,"to_do_items",today_value.tdy,("p")+todo_id.id)
    } else {
        createElement("item",null,"to_do_items",today_value.tdy,("p")+todo_id.tmr_id)
    }
    const to_do_item = document.getElementsByTagName("item")[0].tagName
    createElement("h3",dueDate,to_do_item)
    createElement("h2",priority,to_do_item)
    createElement("description",description,to_do_item)
    createElement("button","Delete?",to_do_item,"delete_button")
    // createElement("button","Completed",to_do_item,"complete_button")
    //for now don't have the complete feature yet
    createElement("h1",title,to_do_item) 

}

 export {createToDo as domShow, todo_id}