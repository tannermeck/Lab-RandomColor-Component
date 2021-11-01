import React, { Component } from 'react';
// import ColorChange from '../components/ColorChange';

class RandomColor extends Component {
    state = { colors: ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'grey'],
                currentColor: 'blue' }

    handleColor = () => { 
        const randomNumber = Math.floor(Math.random() * 6)
        setTimeout(()=> {
            this.setState({ currentColor: this.state.colors[randomNumber]})
        }, 1000)
        }

    render() {
        // console.log(this.state.currentColor)
        return (
            <>
                <h1>Hello From Random Color Generator</h1>
                <div style={{ backgroundColor: this.handleColor(), height: 300, width: 300 }}>
                </div>
                {/* <ColorChange colors={this.state.colors} changeColor={this.handleColor} /> */}
            </>
        )
    }
}

export default RandomColor;