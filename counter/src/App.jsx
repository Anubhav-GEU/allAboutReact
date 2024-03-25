import { useState } from "react";
function App() {
  let [counter,setCounter] = useState(0);
  let [color, setColor] = useState("black");

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
      {/* <div className="flex bg-black text-white">
        <p>Creating counter: {counter}</p>
        <button className="bg-red-500" onClick={upVal}>Up</button>
        <br /><br /><br />
        <button className="bg-blue-500" onClick={downVal}>Down</button>
      </div> */}

      <div className="m-5 p-5 w-full h-screen " style={{backgroundColor: color}}>
        <button className="bg-red-500 m-5 rounded-full" onClick={()=>setColor('red')}>Red</button>
        <button className="bg-blue-500 m-5 rounded-full" onClick={()=>setColor('blue')}>blue</button>
        <button className="bg-purple-500 m-5 rounded-full" onClick={()=>setColor('purple')}>purple</button>
        <button className="bg-orange-500 m-5 rounded-full" onClick={()=>setColor('orange')}>Orange</button>
        <button className="bg-pink-500 m-5 rounded-full"
        onClick={()=>setColor('pink')}>Pink</button>
      </div>
    </>
  )
}

export default App
