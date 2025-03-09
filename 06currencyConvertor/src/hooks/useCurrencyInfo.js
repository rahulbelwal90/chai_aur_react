import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect( () => {
        fetch(`https://v6.exchangerate-api.com/v6/79283b16c83ce42c5967baa3/latest/${currency}`)
        .then((res) => res.json() )
        .then( (res) => setData(res.conversion_rates) )
    }, [currency])
    console.log(data);
    return data
      
} 

export default useCurrencyInfo;
