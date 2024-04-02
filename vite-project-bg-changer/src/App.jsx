import { useState } from "react";

const App =()=>{
  const [color , setColor] = useState("black")
  const getRandomColor = () => {
    const colors = ["#FB9AD1", "#BB8493", "#A34343", "#C0D6E8", "#F1EEDC", "#627254", "#DDDDDD","#401F71","#A8CD9F","#008DDA","#DFF5FF","#31363F","#FF8E8F","#87A922","#720455","#FFB534","#FBF6EE","#C1F2B0","#65B741"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };
return (
  <>
     <div className=" w-full h-screen  duration-700" style={{backgroundColor : color}}>
      <div className="fixed top-12 justify-center flex flex-wrap inset-x-0 px-2">
         <div className="flex flex-wrap bg-white/30 backdrop-blur justify-center  gap-3 shadow-lg py-3 px-6 rounded-2xl">
          <button className="outline-none py-2 px-4 rounded-md bg-red-500 text-sm font-semibold cursor-pointer text-white"
          onClick={()=>setColor('red')}>Red</button>
          <button className="outline-none py-2 px-4 rounded-md bg-green-500 text-sm font-semibold cursor-pointer text-white"
          onClick={()=>setColor('green')}>Green</button>
          <button className="outline-none py-2 px-4 rounded-md bg-blue-500 text-sm font-semibold cursor-pointer text-white"
          onClick={()=>setColor('blue')}>Blue</button>
          <button className="outline-none py-2 px-4 rounded-md bg-zinc-500 text-sm font-semibold cursor-pointer text-white"
          onClick={()=>setColor('grey')}>Grey</button>
          <button className="outline-none py-2 px-4 rounded-md bg-yellow-500 text-sm font-semibold cursor-pointer text-white"
          onClick={()=>setColor('yellow')}>Yellow</button>
          <button className="outline-none py-2 px-4 rounded-md bg-pink-500 text-sm font-semibold cursor-pointer text-white"
          onClick={()=>setColor('pink')}>Pink</button>
          <button className="outline-none py-2 px-4 rounded-md bg-purple-500 text-sm font-semibold cursor-pointer text-white"
          onClick={()=>setColor('purple')}>Purple</button>
          <button
              className="outline-none py-2 px-4 rounded-md bg-gray-500 text-sm font-semibold cursor-pointer text-white"
              onClick={getRandomColor}
            >
              Random Color
            </button>
         </div>
      </div>
     </div>
  </>
)
} 
export default App;
