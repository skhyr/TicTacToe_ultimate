import React, { useState, useEffect } from 'react';
import Board from '../../components/Board/Board';
import {checkWinner, AiMove} from './logic';
import './OnePlayer.css';

const OnePlayer = () =>{
    const [board, setBoard] = useState([[null,null,null], [null,null,null], [null,null,null]]);
    const [turn, setTurn] = useState(false);

    const move = (pos) =>{
        if(board[pos.y][pos.x] != null) return false;
        let boardClone = JSON.parse(JSON.stringify(  board  ));
        boardClone[pos.y][pos.x] = turn?"X":"O";
        setBoard(boardClone);
        if(checkWinner(boardClone) === false)
            setTurn(!turn);
        else{
            alert(`wygrywa${turn?"X":"O"}`);
        };
        return true;
    }

    useEffect(() => {
        if(turn===false) return;
        let y = AiMove(board);
        if(y!=null) move(y);
    }, [turn])



    return(
        <div className='OnePlayer'>
            <div className='turn'>{turn?"X":"O"} turn</div>
            <Board state={board} move={move}/>
        </div>
    );
};

export default OnePlayer;