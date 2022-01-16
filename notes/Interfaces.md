# Interfaces

Interfaces in TypeScript can be used to define the **type** of a given object, variable, etc.

For example, the `Todo` interface below solves quite a few problems for us.

```
interface Todo {
    id: number,
    title: string,
    completed: boolean,
};
```

**1. With this interface defined, typos in code a highlighted:** <br>

The IDE tells us that we have made an possible typo in `todo.ID`.
```
// excuse the lack of error handling;
axios.get(todoUrl)
.then(response => {
    const todo = response.data as Todo;
    console.log(todo.ID);   //ID is not defined in Todo
    console.log(todo.title);
});
```

**2. Function arguments can be checked for type - making mistakes even more unlikely:** <br>

The IDE tells us that we have made an possible typo in the order/type of arguments.
```
// we explicitly specify the type of each parameter;
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(id, title, completed);
}

axios.get(todoUrl)
.then(response => {
    const todo = response.data as Todo;
    logTodo(id, completed, title); // wrong order of args;
});
```

