import { useProductsContext } from '../contexts/ProductsContext';
import { useLocaleContext } from '../contexts/LocaleContext';

export default function Header() {
    const [ products ] = useProductsContext();
    const [ locale, setLocale ] = useLocaleContext();


    function changeCurrencyToGBP() {
        setLocale("en-gb");
    } 

    function changeCurrencyToUSD() {
        setLocale("en-us");
    }

    return (
        <header>
            <h1>Product manager</h1>
            <p>Now with {products.length} products</p>
            <p>Currency is now { locale } </p>
            <button onClick={changeCurrencyToGBP}>Change currency to GBP</button>
            <button onClick={changeCurrencyToUSD}>Change currency to USD</button>   
        </header>
    )
}0