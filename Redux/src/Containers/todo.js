import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../Actions/todo'
import TodoBoard from '../Components/todo'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.handleAddTodo = this.handleAddTodo.bind(this)
    }

    handleAddTodo(text) {
        if (text.length > 0) {
            this.props.addTodo(text)
        }
    }

    render() {
        return (
            <TodoBoard
                {...this.props}
                onAddTodo={this.handleAddTodo}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        todoReducer: state.todoReducer
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(Action, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)