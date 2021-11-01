import React, { Component } from 'react';

class RandomColor extends Component {
    state = { colors: ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'grey'],
                currentColor: 'blue' }

    handleColor = () => { 
        const randomNumber = Math.floor(Math.random() * 6)
        setTimeout(()=> {
            this.setState({ currentColor: this.state.colors[randomNumber]})
        }, 1000)
        }
    // componentDidMount(){
    //     this.handleColor();
    // }

    render() {
        console.log(this.state.currentColor)
        return (
            <>
            {this.handleColor()}
                <h1>Hello From Random Color Generator</h1>
                <div style={{ backgroundColor: this.state.currentColor, height: 300, width: 300 }}
                    >
                </div>
            </>
        )
    }
}

export default RandomColor;