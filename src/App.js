import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './style.css';
function Winner(square){
  const pattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
  ];
  for (let i=0;i<pattern.length;i++){
    const[a,b,c]=pattern[i];
    if(square[a] && square[a]===square[b]&&square[b]===square[c]){
      return square[a];
    }
  }
  return null;



 }

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
  const[cnt ,setcnt]=useState(0)
  
  //let nextx=false;
  function handleClick(i){

    const nextsquare=squares.slice();
    //the logic to not let change value ones the value is changed to either x or O
    if (Winner(squares) || nextsquare[i] || cnt>=9){
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
    setcnt(cnt+1);

    setnext(!isnextx);
    setsquare(nextsquare);
  }
  const winner =Winner(squares);
  let status ;
  if (winner){
    status ="winner is:"+winner;
  }
  else if(cnt>=9){
    status ="Game Over "
  }
  else{
    status ="next move is for: " + (isnextx?"x":"O");
  }


  return (
    <>
    <div>
    
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

      </div>
      <div>
        <p>
          {status}
        </p>
      </div>
    </>
  );
}

export default Board;
