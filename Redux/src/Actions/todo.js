import { ADD_TODO, DELETE_TODO } from '../Constant/todo'

let todoId = 0

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: todoId++,
        text
    }
}

export function deleteTodo(id) {
    return { type: DELETE_TODO, id }
}