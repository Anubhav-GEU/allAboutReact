import { useState } from "react";
function App() {
  let [counter,setCounter] = useState(0);
  const upVal = () => {
    // method 1
    // setCounter(counter = counter+1);
    // setCounter(counter = counter+1);
    // setCounter(counter = counter+1);
    // setCounter(counter = counter+1);

    // method 2
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }
  const downVal = () => {
    //method 1
    // setCounter(counter = counter-1);
    // setCounter(counter = counter-1);
    // setCounter(counter = counter-1);
    // setCounter(counter = counter-1);

    // method 2
    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)
    setCounter(prevCounter => prevCounter-1)
  }
  return (
    <>
      <div className="flex bg-black text-white">
        <p>Creating counter: {counter}</p>
        <button className="bg-red-500" onClick={upVal}>Up</button>
        <br /><br /><br />
        <button className="bg-blue-500" onClick={downVal}>Down</button>
      </div>
    </>
  )
}

export default App
