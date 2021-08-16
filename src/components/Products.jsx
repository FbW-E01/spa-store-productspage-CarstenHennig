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