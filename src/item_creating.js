let todo_id = 0;
function createElement(element,text="", parent="to_do_items", _class="",id="") {
    // const todo_items = document.querySelector("to_do_items")
    const item_list = document.querySelector(parent)
    const newElement = document.createElement(element)
    newElement.textContent = text
    newElement.setAttribute("class",_class)
    if(element==="item") {
        newElement.setAttribute("id",id)
        todo_id ++
    }
    item_list.insertAdjacentElement("afterbegin",newElement)
}
function createToDo (title,description, dueDate, priority) {
    createElement("item","","to_do_items","",todo_id)
    const to_do_item = document.getElementsByTagName("item")[0].tagName
    createElement("h3",dueDate,to_do_item)
    createElement("h2",priority,to_do_item)
    createElement("description",description,to_do_item)
    createElement("button","Delete?",to_do_item,"delete_button")
    createElement("button","Completed",to_do_item,"complete_button")
    createElement("h1",title,to_do_item) 

}

 export {createToDo as domShow}