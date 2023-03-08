import Header from './components/Header';
import Board from './components/Board';
import { useState } from 'react';

export default function App() {
  const [isXNext, setXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXNext(!isXNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Move ' + move;
    } else {
      description = 'Start';
    }
    return (
      <li className='border border-white w-20 text-center' key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  
  return (
  <div>
    <Header></Header>
    <div className='flex flex-row align-middle justify-center'>
    <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay}></Board>
    <div className='flex justify-center ml-20'>
      <ul>{moves}</ul>
    </div>
  </div>
  </div>
  )
}


