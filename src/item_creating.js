function createElement(element,text="", parent="to_do_items") {
    // const todo_items = document.querySelector("to_do_items")
    const item_list = document.querySelector(parent)
    const newElement = document.createElement(element)
    newElement.textContent = text

    item_list.insertAdjacentElement("afterbegin",newElement)
    // return newElement
}
function createToDo (title,description, dueDate, priority) {
    createElement("item")
    const to_do_item = document.getElementsByTagName("item")[0].tagName
    createElement("h3",dueDate,to_do_item)
    createElement("h2",priority,to_do_item)
    createElement("p",description,to_do_item)
    createElement("h1",title,to_do_item) 
}
// createToDo("title1",`description description description
//     description`,"12/31","yellow")
// createToDo("title1",`description description description
//     description`,"12/31","yellow")
// createToDo("title1",`description description description
//     description`,"12/31","yellow")
 export {createToDo as domShow}