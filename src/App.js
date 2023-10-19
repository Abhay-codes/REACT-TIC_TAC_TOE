import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './style.css';

function Square(){
  const [value,setvalue]=useState(null);
  function handleclick(){
    setvalue('X')
  }
  return(
    <button className="square" onClick={handleclick} >
    {value} 
     

    </button>
  )
}
function Board () {
  return (
    <>
      <div className= "boardrow">
        <Square/>
        <Square/>
        <Square/>

        
      </div>
      <div className= "boardrow">
        <Square/>
        <Square/>
        <Square/>

        
      </div>

      <div className= "boardrow">
        <Square/>
        <Square/>
        <Square/>

        
      </div>


    </>
  );
}

export default Board;
