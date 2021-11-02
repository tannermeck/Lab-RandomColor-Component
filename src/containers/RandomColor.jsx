import React, { Component } from 'react';
import Box from '../presentation/Box';

class RandomColor extends Component {
    state = { colors: ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'grey'],
                currentColor: 'blue',
                previous: '' }

    componentDidMount = () => {       
        this.timerId = setInterval(() =>
            this.tick(), 1000
            );
    }
    
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState(prevState => ({
            previous: prevState.currentColor
        }))
        const randomNumber = Math.floor(Math.random() * 7)
        this.setState({
            currentColor: this.state.colors[randomNumber]
        })
        
    }

    render() {
        console.log('CURRENT', this.state.currentColor)
        return (
            <>
                <h1>Random Color Generator</h1>
                <Box color={this.state.currentColor} previous={this.state.previous}/>
            </>
        )
    }
}

export default RandomColor;