var today_value = {tdy: true}
let todos = []
let tmr_dos = []
function createToDo(title,descr,date,priority,today = today_value.tdy) {
    if (today_value.tdy === true) {
        todos[todos.length] = [title,descr,date,priority,today]
    } else {
        tmr_dos[tmr_dos.length] = [title,descr,date,priority,today]
    } //might not need the ,today in tmr_todos
    return {title, descr, date, priority}   
}

export {todos, tmr_dos, createToDo, today_value}
// array structure is title, priority, due date, description

//we're purposely setting date to sstring and we'll deal with it later

//what if 