var today_value = {tmr: true}
let todos = []
let tmr_dos = []
function createToDo(title,descr,date,priority) {
    if (today_value.tmr === true) {
        todos[todos.length] = [title,descr,date,priority]
    } else {
        tmr_dos[tmr_dos.length] = [title,descr,date,priority]
    }
    //^ this piece of code might screw me because it sets logic//
    return {title, descr, date, priority}   
}

export {todos, tmr_dos, createToDo, today_value}
// array structure is title, priority, due date, description

//we're purposely setting date to sstring and we'll deal with it later

//what if 