import Square from "./Square";
import { useState } from 'react';
import calculateWinner from '../utils/checkWinner';

export default function Board({isXNext, squares, onPlay}) {

    function handleClick(i) {
  
    //Creating new array using slice method
    const nextSquares = squares.slice();

      if(squares[i] || calculateWinner(squares)) { //If square is already clicked, don't do anything
        return;
      }
  
      //If square hasn't been clicked set to O 
      isXNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O'
      
      onPlay(nextSquares);
    }
  
    let status;
    const winner = calculateWinner(squares);
  
    if(winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (isXNext ? "X" : "O");
    }

    return (
      <div className="game-board">
        <div className='row flex justify-center'>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
  
        <div className='row flex justify-center'>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
  
        <div className='row flex justify-center'>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
  
        <div>
          <h3 className='flex justify-center p-5'>{status}</h3>
        </div>
      </div>
    )
  }