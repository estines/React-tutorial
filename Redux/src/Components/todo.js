import React, { Component } from 'react'
import { Card } from 'antd'
import InputBox from './inputbox'
import TodoList from './todolist'

class TodoBoard extends Component {
    render() {
        const { 
            todoReducer,
            onAddTodo,
            deleteTodo
        } = this.props
        return (
            <Card title="Todolist using Redux!!" style={{width: '500px', margin:'30px auto'}}>
                <InputBox 
                    handleAdd={onAddTodo}
                />
                <TodoList 
                    data={todoReducer}
                    onDelete={deleteTodo}
                />
            </Card>
        )
    }
}

export default TodoBoard