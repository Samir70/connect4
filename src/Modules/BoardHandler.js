
// board positions will have these properties:
// pos: the colour of each square
// 6 rows of 7
// B - for blank (or black)
// Y, R -- for yellow or red
// L - for legal moves, which (during development) are coloured gray

// legalMoves: moves which can be made in this position
// sideToMove: either 'Yellow' or 'Red'
// outCome: described as 'win', 'draw', 'onGoing'
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
    sideToMove: 'Yellow', 
    outCome: 'onGoing'
}

const checkWinning = (b, m) => {
    var maxRow = [m];
    var c = m-1;
    while (b[c]===b[m]  && c%7 !== 6) {maxRow.push(c); c--}
    c = m+1;
    while (b[c]===b[m]  && c%7 !== 0) {maxRow.push(c); c++}
    
    var maxCol = [m];
    c= m-7;
    while (b[c]===b[m]  && c>=0) {maxCol.push(c); c -= 7}
    c=m+7;
    while (b[c]===b[m]  && c<=41) {maxCol.push(c); c += 7}
    
    var posDiag = [m]; //positive gradient!!
    c = m+6;
    while (b[c]===b[m]  && c<=41 && c%7 !== 6) {posDiag.push(c); c += 6}
    c = m-6;
    while (b[c]===b[m]  && c>0 && c%7 !== 0) {posDiag.push(c); c -= 6}

    var negDiag = [m]; //negative gradient!!
    c = m+8;
    while (b[c]===b[m]  && c<=41 && c%7 !== 0) {negDiag.push(c); c += 8}
    c = m-8;
    while (b[c]===b[m]  && c>=0 && c%7 !== 6) {negDiag.push(c); c -= 8}



    var maxLine = Math.max(maxRow.length, maxCol.length, posDiag.length, negDiag.length);
    console.log('maxRow, maxCol, posDiag, negDiag', maxRow, maxCol, posDiag, negDiag);
    return maxLine > 3 ? true : false;
}


export const makeMove = (position, move) => {
    const moveToMake = position.legalMoves[move%7];
    if (moveToMake >= 0) {
        var boardArray = position.pos.join('').split('');
        boardArray[moveToMake] = position.sideToMove[0];
        position.legalMoves[move%7] -= 7;
        if (position.legalMoves[move%7] >= 0) {
            boardArray[position.legalMoves[move%7]] = 'L'
        }

        if (checkWinning(boardArray, moveToMake)) {
            position.outCome = 'win';
            position.legalMoves = position.legalMoves.map(x=>-1);
        } else {position.sideToMove = position.sideToMove === 'Yellow' ? 'Red' : 'Yellow';}

        //Now turn our board back into 6 rows of seven
        // then create an object to return and pass to setState
        var outBoard = [];
        while (boardArray.length > 0) {outBoard.push(boardArray.splice(0, 7).join(''))}
        position.pos = outBoard;


        return position;
    } else {return 'NOT LEGAL'}    
}