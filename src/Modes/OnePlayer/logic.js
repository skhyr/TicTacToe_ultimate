const checkWinner = (board) =>{
    for (let i = 0; i < 3; i++)
        if(board[i][0]!==null&& board[i][0] === board[i][1]&& board[i][1] === board[i][2] ) return [[i, 0], [i, 1], [i, 2]];

    for (let i = 0; i < 3; i++)
        if(board[0][i]!==null&& board[0][i] === board[1][i]&& board[1][i] === board[2][i] ) return [[0, i], [1, i], [2, i]];

    if(board[0][0]!==null&& board[0][0] === board[1][1]&& board[1][1] === board[2][2] ) return [[0, 0], [1, 1], [2, 2]];
    if(board[0][2]!==null&& board[0][2] === board[1][1]&& board[1][1] === board[2][0] ) return [[0, 2], [1, 1], [2, 0]];

    return false;
}

const checkDraw = (board) =>{
    for(let row = 0; row < 3; row++)
        for(let col = 0; col < 3; col++)
            if(board[row][col]==null) return false;
    return true;
}

const AiMoveReq = (board, deep) =>{
    //console.log(deep, board);
    if(checkDraw(board)) return 0;
    const winner = checkWinner(board);
    if( winner !== false) return board[winner[0][0]][winner[0][1]]=='X'? 1:-1;

    let minimax;
    for(let row = 0; row < 3; row++)
        for(let col = 0; col < 3; col++){
            if(board[row][col]!==null) continue;
            
            let boardClone = JSON.parse(JSON.stringify( board ));
            boardClone[row][col] = deep%2?"X":"O";
            let out = AiMoveReq(boardClone, deep+1);
            
            if(minimax==null) minimax=out;
            else deep%2==1
            ? minimax = Math.max(minimax, out)
            : minimax = Math.min(minimax, out);
            //console.log(minimax);
        }
    return minimax;
}

const AiMove = (board, deep=1) =>{
    let best = {val: -1, x:0, y:0}
    for(let row = 0; row < 3; row++)
        for(let col = 0; col < 3; col++){
            if(board[row][col]!==null) continue;
            let clonBoard = JSON.parse(JSON.stringify( board ));
            clonBoard[row][col] = 'X';
            let out = AiMoveReq(clonBoard, deep+1);
            if(out >= best.val) best = {val: out, x: col, y: row};
        }
    return best;
}

export {checkWinner, AiMove};