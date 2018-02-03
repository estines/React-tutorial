import { ADD_TODO, DELETE_TODO } from '../Constant/todo'

export default function todoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: action.id,
                text: action.text
            }
            ]
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}
