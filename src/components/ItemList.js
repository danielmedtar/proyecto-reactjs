import { useEffect, useState } from "react";
import Item from "./Item";


const ItemList = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(
                    <Item />                    
                )    
            }, 2000)
        })

        promesa.then((productos) => {
            setLoading(false)
            setProductos(productos)
        })        
    },[])

    if(loading) {
        return (
            <h3 className="titulo-cargando mt-5">Cargando...</h3>
        )
    }else {
        return (
            <Item />
        )
    }
}

export default ItemList


