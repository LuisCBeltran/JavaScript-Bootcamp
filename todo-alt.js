const todos = [{
    text: 'Todo 1',
    completed: false
}, {
    text: 'Todo 2',
    completed: true
}, {
    text: 'Todo 3',
    completed: false
}, {
    text: 'Todo 4',
    completed: true
}, {
    text: 'Todo 5',
    completed: false
}]

let deleteTodo = function (array, search) {
    const index = array.findIndex(function (object) {
        return object.text.toLowerCase() === search.toLowerCase()
    })
    if (index > -1) {
        array.splice(index, 1)
    }
}

let getThingsToDo = function (array) {
    return array.filter(function (object) {
        return object.completed === false
    })
}

const sortTodos = function (array) {
    array.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))
// deleteTodo(todos, 'todo 4')
// console.log(todos)