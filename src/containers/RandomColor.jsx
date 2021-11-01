import React, { Component } from 'react';
import Box from '../presentation/Box';

class RandomColor extends Component {
    state = { colors: ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'grey'],
                currentColor: 'blue',
                previousColor: '' }

    handleColor = () => { 
        const randomNumber = Math.floor(Math.random() * 7)
        setTimeout(()=> {
            this.setState({ currentColor: this.state.colors[randomNumber]})
            // this.setState({ previousColor: this.state.currentColor})
        }, 1000)
        }

    render() {
        return (
            <>
                {this.handleColor()}

                <h1>Random Color Generator</h1>

                {/* {this.state.currentColor === this.state.previousColor && */}
                {/* this code block */}
                {/* <div style={{ backgroundColor: this.state.currentColor, height: 300, width: 300 }}
                    
                >
                </div> */}
                {/* to this code block */}
                {/* } */}
                <Box color={this.state.currentColor} />

            </>
        )
    }
}

export default RandomColor;