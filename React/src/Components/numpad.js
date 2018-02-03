import React, { Component } from 'react';
import Button from './button'

class Numpad extends Component {
    
    btnOnClick = (value) => {
        this.props.onGetValue(value)
    }
    
    render() {

        return (
            <div>
                <div className="numRow">
                    <Button name="AC" value={this.btnOnClick}/>
                    <Button name="+/-" value={this.btnOnClick}/>
                    <Button name="%" value={this.btnOnClick}/>
                    <Button name="/" value={this.btnOnClick}/>
                </div>
                <div className="numRow">
                    <Button name="7" value={this.btnOnClick}/>
                    <Button name="8" value={this.btnOnClick}/>
                    <Button name="9" value={this.btnOnClick}/>
                    <Button name="*" value={this.btnOnClick}/>
                </div>
                <div className="numRow">
                    <Button name="4" value={this.btnOnClick}/>
                    <Button name="5" value={this.btnOnClick}/>
                    <Button name="6" value={this.btnOnClick}/>
                    <Button name="+" value={this.btnOnClick}/>
                </div>
                <div className="numRow">
                    <Button name="1" value={this.btnOnClick}/>
                    <Button name="2" value={this.btnOnClick}/>
                    <Button name="3" value={this.btnOnClick}/>
                    <Button name="-" value={this.btnOnClick}/>
                </div>
                <div className="numRow">
                    <Button name="0" value={this.btnOnClick}/>
                    <Button name="." value={this.btnOnClick}/>
                    <Button name="=" value={this.btnOnClick}/>
                </div>
            </div>
        )
    }
}

export default Numpad