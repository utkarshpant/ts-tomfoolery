"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(todoUrl)
    .then(function (response) {
    var todo = response.data;
    console.log(todo);
    console.log(hello);
});
var hello = "Hello";
