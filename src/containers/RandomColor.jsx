import React, { Component } from 'react';

class RandomColor extends Component {
    state = { colors: ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'grey'],
                currentColor: 'blue' }

    // handleColor = (colors) => { 
    //     this.setState({ currentColor: colors})
    // }

    render() {
        const randomNumber = Math.floor(Math.random() * 6)
        const randomColor = this.state.colors[randomNumber]
        console.log(randomColor)
        return (
            <>
                <h1>Hello From Random Color Generator</h1>
                <div style={{ backgroundColor: randomColor, height: 300, width: 300 }}>
                </div>
            </>
        )
    }
}

export default RandomColor;