import { useState } from "react";

const App = ()=>{
  let [count , setCount] = useState(0)
  const increaseCount = () =>{
    // console.log(setCount(count+1));
    if(count<20){ 
    setCount(count+1)
  }
  }

  const decreaseCount =()=>{
     if(count>0){
      setCount(count-1);
    }
  }
 return ( 
  <>
  <div id="container">
  <h1>Counter</h1>
     <h2 id="count">{count}</h2>
     <button onClick={increaseCount}  className="btn">counter++</button>
     <button onClick={decreaseCount}  className="btn">counter--</button>
  </div>

  </>
 )
}
export default App;