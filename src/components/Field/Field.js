import React from 'react';
import './Field.css';

const Field = ({char, pos, move}) =>{
    
    const handleClick = (event) =>{
        event.preventDefault();
        move(pos);
    };
    
    
    return(
        <div className='Field' onClick={handleClick}>
            {char}
        </div>
    );
};

export default Field;