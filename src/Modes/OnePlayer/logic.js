const checkWinner = (board) =>{
    for (let i = 0; i < 3; i++)
        if(board[i][0]!==null&& board[i][0] === board[i][1]&& board[i][1] === board[i][2] ) return [[i, 0], [i, 1], [i, 2]];

    for (let i = 0; i < 3; i++)
        if(board[0][i]!==null&& board[0][i] === board[1][i]&& board[1][i] === board[2][i] ) return [[0, i], [1, i], [2, i]];

    if(board[0][0]!==null&& board[0][0] === board[1][1]&& board[1][1] === board[2][2] ) return [[0, 0], [1, 1], [2, 2]];
    if(board[0][2]!==null&& board[0][2] === board[1][1]&& board[1][1] === board[2][0] ) return [[0, 2], [1, 1], [2, 0]];

    return false;
}

export {checkWinner};