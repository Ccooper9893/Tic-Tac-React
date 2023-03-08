export default 
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], //Checks if tic tac toe lines are filled
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    //Checks if lines have same symbols, either X or O
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; //Returns Winner Symbol, also true 
    }
  }
  return null;
}