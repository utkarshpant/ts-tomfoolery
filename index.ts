import axios from "axios";
const todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';

/**
 * A `Todo` has an `id`,
 * a `title` and a `completed` flag.
 * 
 * This type will help us define that these properties
 * *must* exist in any `Todo`.
 */
interface Todo {
    id: number,
    title: string,
    completed: boolean,
}

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(id, title, completed);
};

axios.get(todoUrl)
.then(response => {
    const todo = response.data as Todo;
    logTodo(todo.id, todo.title, todo.completed);
});

