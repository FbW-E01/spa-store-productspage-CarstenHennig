import { useProductsContext } from '../contexts/ProductsContext';
import { useLocaleContext } from '../contexts/LocaleContext';
import { useReducer } from 'react';

export default function Header() {
    const [ products ] = useProductsContext();
    const [ locale, setLocale ] = useLocaleContext();
    const [ state, dispatch ] = useReducer(reducer, locale);

    function reducer(prevState, action) {
        switch (action.type) {
            case "€": 
                return { state: "$" };
            case "$": 
                return { state: "£"}
            case "£":
                return { state: "€" };
            default: { state }
        }
    }

    function changeCurrencyToGBP() {
        setLocale("£");
        // setPrice(({price} * 1.18));        
    } 

    function changeCurrencyToUSD() {
        setLocale("$");
    }

    function changeCurrency() {
        if (locale === "€") {
            // alert("Currency is €");
            setLocale("$");
        }
        else if (locale === "$") {
            // alert("Currency is $");
            setLocale("£");
        }
        else if (locale === "£") {
            // alert("Currency is £");
            setLocale("€");
        }
    }

    return (
        <header>
            <h1>Product manager</h1>
            <p>Now with {products.length} products</p>
            <p>Currency is now { locale } </p>
            <select onChange={(e) => setLocale(e.target.value)}>
                <option onChange={() => dispatch({type: "$"})} value="$">USD</option>
                <option onChange={() => dispatch({type: "£"})} value="£">GBP</option>
                <option onChange={() => dispatch({type: "€"})} value="€">EUR</option>
            </select>
            <button onClick={changeCurrency}>Change currency</button>
            <button onClick={changeCurrencyToGBP}>Change currency to GBP</button>
            <button onClick={changeCurrencyToUSD}>Change currency to USD</button>   
        </header>
    )
}