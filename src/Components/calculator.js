import React, { Component } from 'react';
import Display from './display'
import Numpad from './numpad'
import './calculator.css'
import { Card } from 'antd';

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: null,
            current: null,
            operator: null
        }
    }

    getValue = (value) => {
        this.setState({ current: value })
    }

    render() {
        return (
            <div className="Calculator" style={{ marginTop: '50px' }}>
                <Card
                    title={<Display value={this.state.current}/>}
                    bordered={false}
                    style={{ width: 300 }}
                >
                    <Numpad onGetValue={this.getValue}/>
                </Card>
            </div >
        )
    }
}

export default Calculator;