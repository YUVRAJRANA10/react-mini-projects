import { useState } from 'react'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

function maingame(){
setCount(count + 1)
  return(
<>
  <h1> we are oppeing an modal</h1> 
</>

  )
};


  return (
    <>
    <h1>Tic Toe Game</h1>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <br />
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <br />
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  )
};

export default App
