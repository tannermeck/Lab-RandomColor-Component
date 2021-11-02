import React from 'react';
import image from '../../baby.jpeg'

const Box = ({ color, previous }) => {
    return (
        <>
            {color !== previous &&
            <div style={{ backgroundColor: color, height: 300, width: 300 }}        
            >
            </div>
            }
            {color === previous &&
            <div style={{ backgroundImage:`url(${image})`, height: 500, width: 500 }}        
            >
            </div>
            }

        </>
    )
}
export default Box;