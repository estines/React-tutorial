import React, { Component } from 'react'
import { List, Icon } from 'antd'

class TodoList extends Component {
    render() {
        const { data, onDelete } = this.props
        return (
            <List
                style={{ marginTop: '30px' }}
                size="large"
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item actions={[<Icon
                        type="minus-circle"
                        style={{ fontSize: '16px', color: 'red' }}
                        spin={true}
                        onClick={() => { onDelete(item.id) }}
                    />]}>
                        <h3 style={{color:'grey'}}>
                            {item.text}
                        </h3>
                    </List.Item>
                )}
            />
        )
    }
}

export default TodoList