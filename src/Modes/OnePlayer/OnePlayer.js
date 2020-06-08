import React, { useState } from 'react';
import Board from '../../components/Board/Board';
import './OnePlayer.css';

const OnePlayer = () =>{

    const [board, setBoard] = useState([[["X"],["X"],["X"]], [["X"],["X"],["X"]], [["X"],["X"],["X"]]]);

    return(
        <div className='OnePlayer'>
            <Board state={board}/>
        </div>
    );
};

export default OnePlayer;