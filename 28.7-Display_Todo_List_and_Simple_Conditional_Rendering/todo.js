const loadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        // console.log(data);
        displayTodo(data)
    });
};

// {
//     "userId": 10,
//     "id": 190,
//     "title": "accusamus sint iusto et voluptatem exercitationem",
//     "completed": true
// }

const displayTodo = (todos) => {
    // console.log(todos);
    // 1. Get the Container and empty the container
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";

    todos.forEach(todo => {
        // console.log(todo);
        // 2. Create Element
        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
        <div class = "todo-card">
            <p>${todo.completed == true 
                ? `<i class="fa-regular fa-square-check"></i>` 
                : `<i class="fa-solid fa-square-check"></i>`
            }</p> 
        <h4>${todo.title}</h4>
        </div>
        `
        // 3. add to the container
        todoContainer.append(todoCard)
    }); 
}

loadTodo()