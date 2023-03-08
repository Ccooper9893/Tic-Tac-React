export default function Square({value, onSquareClick}) {
    //onSquareClick from parent board -> handleclick -> setState
    return <button className="square" onClick={onSquareClick}>{value}</button>
  }