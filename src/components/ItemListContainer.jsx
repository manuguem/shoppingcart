import { useState, useEffect } from 'react'
// import ItemCount from './ItemCount'
//import getProducts from '../services/HandMadePromise'
import ItemList from './ItemList'
import {Link} from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    // console.log('Los productos son:', products)

    // useEffect(() => {
    //     getProducts
    //         .then(res => {
    //             setProducts(res)
    //         })

    // }, [])

    const getProductsFetch = () => {
        fetch("../JSON/DataList.json")
            .then((response) => response.json())
            .then((data) => console.log("A ver la data", data)); 
    };

    return (
        <>
            {/* <h2>Los mejores precios</h2>
            <ItemCount stock={5} initial={1} /> */}
            <ItemList products={products}/>
        </>
    );
}

export default ItemListContainer;