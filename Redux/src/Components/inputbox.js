import React, { Component } from 'react'
import { Input, Button } from 'antd'

class InputBox extends Component {
    render() {
        let { handleAdd } = this.props
        let input = null
        return (
            <Input
                ref={(text) => { input = text }}
                placeholder="input your todo"
                size="large"
                onPressEnter={() => {
                    handleAdd(input.input.value.trim())
                    input.input.value = ""
                }}
                addonAfter={
                    <Button
                        type="primary"
                        onClick = {()=> {
                            handleAdd(input.input.value.trim())
                            input.input.value = null
                        }}
                        style={{width: "80px"}}
                    >
                        Add
                    </Button>
                }
            />
        )
    }
}

export default InputBox 
