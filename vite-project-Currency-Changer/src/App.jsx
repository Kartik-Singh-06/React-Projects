import { useState } from "react";
import {InputBox} from "./components"
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
const App = ()=>{
    const [amount , setAmount] = useState();
    const [from , setFrom] = useState("usd");
    const [to ,setTo] = useState('inr');
    const [convertedAmount , setConvertedAmount] =useState();
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo)

    const swap =() =>{
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount)
    }
     const convert = () =>{
        let convertedValue = (amount * currencyInfo[to])
        setConvertedAmount(Number(convertedValue.toFixed(2)));
     }
     return (
        <div
            className="w-full  h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1591033594798-33227a05780d?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/40">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                             convert();
                        }}
                    >
                        <div className="w-full mb-1">
                        <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=> setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) =>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()}  to { to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default App;