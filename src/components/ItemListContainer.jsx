import { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import getProducts from '../services/HandMadePromise'
import  { Link } from "react-router-dom";
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
const [products, setProducts] = useState([])
console.log(products)

    useEffect(() => {
        getProducts
            .then((res) => setProducts(res))
            .catch((err) => alert("Ha ocurrido un error", err));
    });

    return (
        <>
            {/* <h2>Los mejores precios</h2>
            <ItemCount stock={5} initial={1} /> */}
            <ItemList products={products}/>
        </>
    );
}

export default ItemListContainer;