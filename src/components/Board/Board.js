import React from 'react';
import './Board.css';
import Field from '../Field/Field';

const Board = ({state, move}) =>{
    return(
        <div className='Board'>
            {state.map((row, rowIndex)=>{
                return <div className='row'> 
                            {row.map((element, index)=>{
                                return <Field char={element} pos={{x: index, y: rowIndex}} move={move}/>
                            })}
                        </div>
            })}
        </div>
    );
};

export default Board;