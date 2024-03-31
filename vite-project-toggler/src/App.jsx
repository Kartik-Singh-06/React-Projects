import { useEffect, useState } from "react";
import { ThemeProvider } from "./Contexts/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn"

const App = () => {
const [themeMode,setThemeMode] = useState("light")

const lightTheme =()=>{
    setThemeMode("light")
}
const darkTheme = ()=>{
    setThemeMode('dark')
}

useEffect(()=>{
  const removeTheme = document.querySelector('html').classList.remove('light','dark');
  const addTheme =  document.querySelector('html').classList.add(themeMode)
},[themeMode])



  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
export default App;
