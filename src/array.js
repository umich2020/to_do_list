let todos = []
function createToDo(title,descr,date,priority) {
    todos[todos.length] = [title,descr,date,priority]
    //^ this piece of code might screw me because it sets logic//
    return {title, descr, date, priority}   
}

export {todos, createToDo}
// array structure is title, priority, due date, description

//we're purposely setting date to sstring and we'll deal with it later
