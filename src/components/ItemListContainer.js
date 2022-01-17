import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { contextCarrito } from "./Context";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    
    const { id } = useParams()

    const { cartArray } = useContext(contextCarrito)

    useEffect(() => {
        setLoading(true);

        const URL = id ? `http://localhost:8081/${id}` : 'http://localhost:8081/db';
        
        const getProductos = fetch(URL);
        
        getProductos
        .then((res) => res.json())
        .then((res) => {
            if(id) {
                setProductos(res);
            } else {
                const newArray = [ ...res.notebooks, ...res.pcs, ...res.remeras ]
                setProductos(newArray)
            }
            setLoading(true);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [id]);

    

    return (
        <>
            {loading ? <h3 className="titulo-cargando mt-5">Cargando...</h3> : <ItemList productos={productos} />}
        </>
    )
}

export default ItemListContainer
