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
  const[isnextx,setnext]=useState(true);
  //let nextx=false;
  function handleClick(i){

    const nextsquare=squares.slice();
    //the logic to not let change value ones the value is changed to either x or O
    if (nextsquare[i]){
      return ;
    }
    // the move foris for which  player 
    //it starts with x 
    if(isnextx){
      nextsquare[i]='X';
    }
    else{
      nextsquare[i]='O';
    }

    setnext(!isnextx);
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
