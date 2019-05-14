
// 6 rows of 7
// B - for blank (or black)
// Y, R -- for yellow or red
// L - for legal moves

export var startPos = {    
    pos: [
        'BBBBBBB',
        'BBBBBBB',
        'BBBBBBB',
        'BBBBBBB',
        'BBBBBBB',
        'LLLLLLL'
    ], 
    legalMoves: [35, 36, 37, 38, 39, 40, 41], 
    sideToMove: 'Yellow'
}

export const makeMove = (position, move) => {
    const moveToMake = position.legalMoves[move%7];
    if (moveToMake >= 0) {
        var boardArray = position.pos.join('').split('');
        boardArray[moveToMake] = position.sideToMove[0];
        position.legalMoves[move%7] -= 7;
        if (position.legalMoves[move%7] > 0) {
            boardArray[position.legalMoves[move%7]] = 'L'
        }
        var outBoard = [];
        while (boardArray.length > 0) {outBoard.push(boardArray.splice(0, 7).join(''))}
        position.pos = outBoard;
        position.sideToMove = position.sideToMove === 'Yellow' ? 'Red' : 'Yellow';
        
        return position;
    } else {return 'NOT LEGAL'}    
}