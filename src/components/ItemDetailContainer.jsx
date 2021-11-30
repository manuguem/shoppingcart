import {useState, useEffect} from "react";
import getProducts from "../services/HandMadePromise";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const[item, setItem] = useState({});
    console.log("item",item);
    console.log(useParams);
    const {id} = useParams();
    console.log("Id UseParams", id);
    console.log("Tipo Dato", typeof id);

    useEffect(() => {
        getProducts.then((res) => {
            setItem(res.find((prod) => prod.id === parseInt(id)));
    });
}, [id]);
    return <ItemDetail item={item}/>
};

export default ItemDetailContainer;