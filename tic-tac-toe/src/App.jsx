import { useState } from 'react';
import Square from './Button.jsx'

export default function Board() {
    const [xIsNext,setXisNext] = useState(true);
    const [squares,setSquares] = useState(Array(9).fill(null))

    function handleClick(i){

        if (squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext){
            nextSquares[i] = 'X'
        }else{
            nextSquares[i] = 'O'
        }
        nextSquares[i] = 'X'
        setSquares(nextSquares);
        setXisNext(!xIsNext)
    }
    
    return (
      <>
        <div className="board-row">
          <Square onSquareClick = {() => {handleClick[0]}} />
          <Square onSquareClick = {() => {handleClick[1]}}/>
          <Square onSquareClick = {() => {handleClick[2]}}/>
        </div>
        <div className="board-row">
          <Square onSquareClick = {() => {handleClick[3]}}/>
          <Square onSquareClick = {() => {handleClick[4]}}/>
          <Square onSquareClick = {() => {handleClick[5]}}/>
        </div>
        <div className="board-row">
          <Square onSquareClick = {() => {handleClick[6]}}/>
          <Square onSquareClick = {() => {handleClick[7]}}/>
          <Square onSquareClick = {() => {handleClick[8]}}/>
        </div>
      </>
    );
  }
  