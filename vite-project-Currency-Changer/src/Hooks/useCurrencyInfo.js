import { useState,useEffect } from "react";

function useCurrencyInfo(currency){

    const [data , setData] =useState({}) 

    const apiFun = async ()=>{
      const item = await fetch(`https://v6.exchangerate-api.com/v6/6072dda97aef6d737d25ea5e/latest/${currency}`)
      const json = await item.json();
      setData(json?.conversion_rates)
    }

    useEffect(()=>{
      apiFun();
    }, [currency])

    return data
}

export default useCurrencyInfo;