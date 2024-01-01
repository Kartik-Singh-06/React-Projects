import { useCallback, useEffect, useRef, useState } from "react";
const App = () => {
  const [length, setLength] = useState(4);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);

   const passRef = useRef(null)
  
   const copyPass = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
   },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@$%&";

    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(character);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,setPassword])



  return (
    <div className="bg-zinc-900 rounded-lg py-3 w-full max-w-md mx-auto mt-10 px-5">
      <h1 className="text-3xl  bg-transparent text-center font-semibold mb-6 text-white ">
        Password Generator
      </h1>
      <div className=" flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="Password.."
          className="outline-none w-full py-1 text-white px-3
          "
          ref={passRef}
          readOnly
        />
        <button onClick={copyPass} className="hover:bg-orange-800 outline-none rounded-lg bg-orange-400 text-white py-2 px-4">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2 bg-transparent mb-3 ">
     <div className="flex items-center gap-x-1 bg-transparent">
      <input type="range" 
      min={6}
      max={15}
      value={length}
      className="cursor-pointer"
      
      onChange={(e)=>(setLength(e.target.value))}
      
       />
      <label  className=" w-20 bg-transparent text-white  font-semibold" >Length : {length}</label>
     </div>
          <div className="flex items-center gap-x-1 m bg-transparent">
            <input type="checkbox"
            defaultChecked={number}
            id="numInput"
            onChange={()=>{
              setNumber((prev)=>!prev);
            }} />
            <label className="bg-transparent text-white font-semibold"  > Number</label>
          </div>
          <div className="flex items-center gap-x-1 ml-4 bg-transparent">
            <input type="checkbox"
            defaultChecked={char}
            id="CharInput"
            onChange={()=>{
              setChar((prev)=>!prev);
            }} />
            <label className="bg-transparent text-white font-semibold" > Character</label>
          </div>
      </div>

    </div>
  );
};

export default App;
