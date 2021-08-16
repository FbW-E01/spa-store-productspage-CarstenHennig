import { useProductsContext } from '../contexts/ProductsContext';
import { useLocaleContext } from '../contexts/LocaleContext';

export default function Products() {
    const [ products ] = useProductsContext();
    const [ locale ] = useLocaleContext();

    return (
        <div className="Products">
            {products.map(prod => <div>{prod.name}: {prod.price} { locale } </div>)}
        </div>
    )
}


                // switch (currency) {
                //     case "de-de": setLocale("de-de");
                //     break;
                //     case "en-gb": setLocale("en-gb");
                //     break;
                //     case "en-us": setLocale("en-us");
                //     break;
                //     default: setLocale("de-de");
