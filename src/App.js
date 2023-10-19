import logo from './logo.svg';
import './App.css';
function Square(){
  return(
    <button className="square">
    
      X
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
