import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { contextCarrito } from "./Context";
import ItemDetail from "./ItemDetail"
import { db, } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore"
import  Loader from "./Loader"

const ItemDetailContainer = () => {

    const [detalleProductos, setDetalleProductos] = useState({})
    const [loadingDetalle, setLoadingDetalle] = useState([false])
    const [agregado, setAgregado] = useState(false);

    const { id, tipo } = useParams();

    const { addtoCart } = useContext(contextCarrito)

    useEffect(() => {
        const coleccionProductos = collection(db, "productos")
        const docRef = doc(coleccionProductos, id)
        const pedido = getDoc(docRef)

        pedido
        .then((resultado)=>{
            const producto = resultado.data()
            setDetalleProductos({...producto, id})
            setLoadingDetalle(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id, tipo]);

    const onAdd = (contador) => {
        addtoCart(detalleProductos, contador)
        setAgregado(true)
    }

    return (
        <>
            {loadingDetalle ? <Loader /> : <ItemDetail onAdd={onAdd} detalleProductos={detalleProductos} agregado={agregado} />}
        </>
    )
}

export default ItemDetailContainer
