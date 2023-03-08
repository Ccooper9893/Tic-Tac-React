import { useState } from 'react';
import Header from './components/Header';

function Square({value, onSquareclick}) {
  return <button className="square" onClick={onSquareclick}>{value}</button>
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.split(); //Creating new array using split method
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }
  return (
    <>
      <Header></Header>

      
      <div className='row flex justify-center'>
        <Square value={squares[0]} onSquareclick={handleClick(0)}/>
        <Square value={squares[1]} onSquareclick={handleClick(1)}/>
        <Square value={squares[2]} onSquareclick={handleClick(2)}/>
      </div>

      <div className='row flex justify-center'>
        <Square value={squares[3]} onSquareclick={handleClick(3)}/>
        <Square value={squares[4]} onSquareclick={handleClick(4)}/>
        <Square value={squares[5]} onSquareclick={handleClick(5)}/>
      </div>

      <div className='row flex justify-center'>
        <Square value={squares[6]} onSquareclick={handleClick(6)}/>
        <Square value={squares[7]} onSquareclick={handleClick(7)}/>
        <Square value={squares[8]} onSquareclick={handleClick(8)}/>
      </div>
    </>
  )
}
