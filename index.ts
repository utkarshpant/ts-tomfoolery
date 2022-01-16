import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number,
    title: string,
    completed: boolean,
};

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`The todo with ID ${id} (${title}) is ${completed ? 'completed' : 'not complete'}.`);
}

axios.get(url)
.then(response => {
    const todo = response.data as Todo;
    const { id, title, completed } = todo;
    logTodo(id, title, completed);
})
.catch(err => {
    console.error(err);
});