const todos = [
    "Note 1",
    "Note 2",
    "Note 3",
    "Note 4",
    "Note 5"
]

todos.splice(2, 1)
todos.push("Note 6")
todos.shift()

todos.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}.`)
})