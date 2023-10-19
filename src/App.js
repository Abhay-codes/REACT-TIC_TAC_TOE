import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './style.css';

function Square({val,onSquareClick}){

  return(
    <button className="square" onClick={onSquareClick} >
    {val} 
     

    </button>
  )
}
function Board () {
  const [squares,setsquare]=useState(Array(9).fill(null));
  function handleClick(i){

    const nextsquare=squares.slice();
    nextsquare[i]='X';
    setsquare(nextsquare);
  }
  return (
    <>
      <div className= "boardrow">
        <Square val ={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square val ={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square val ={squares[2]} onSquareClick={()=>handleClick(2)}/>

        
      </div>
      <div className= "boardrow">
      <Square val ={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square val ={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square val ={squares[5]} onSquareClick={()=>handleClick(5)}/>

        
      </div>

      <div className= "boardrow">
      <Square val ={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square val ={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square val ={squares[8]} onSquareClick={()=>handleClick(8)}/>
        
      </div>


    </>
  );
}

export default Board;
