import React, { Component } from 'react';
import Box from '../presentation/Box';

class RandomColor extends Component {
    state = { colors: ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'grey'],
                currentColor: 'blue',
                previous: '' }

    handleColor = () => {       
        const randomNumber = Math.floor(Math.random() * 7)
        setTimeout(()=> {
            this.setState({ currentColor: this.state.colors[randomNumber]})
        }, 1000)
    }

    render() {
        return (
            <>
                {this.handleColor()}
                <h1>Random Color Generator</h1>
                <Box color={this.state.currentColor} />
            </>
        )
    }
}

export default RandomColor;