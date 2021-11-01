import React, { Component } from 'react';

const ColorChange = ({ colors, changeColor }) => {
    const randomNumber = Math.floor(Math.random() * 6)
    const color = colors[randomNumber]
    return (
        <>
            <div
                style={{ backgroundColor: color, height: 300, width: 300  }}
                changeColor={() => (color)}
            >
            </div>
        </>
    )
}
export default ColorChange