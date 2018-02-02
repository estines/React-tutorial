import React, { Component } from 'react';
import { Button as Buttons } from 'antd'

class Button extends Component {

    render() {
        return (
            <div>
                <Buttons style={{ padding: '15px', margin: '5px' }} onClick={() =>
                    btnOnClick = (value) => {
                        getValue = (value) => {
                            this.setState({ current: value })
                        }
                    }}>
                    {name}
                </Buttons>
            </div>
        )
    }
}

export default Button