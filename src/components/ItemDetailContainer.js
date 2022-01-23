import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { contextCarrito } from "./Context";
import ItemDetail from "./ItemDetail"
import { db, } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore"

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
            setDetalleProductos(producto)
            setLoadingDetalle(false)
        })
        .catch((error)=>{
            console.log(error)
        })

        // setLoadingDetalle(true)

        // const URL = `http://localhost:8081/${cat}/${id}`;
        
        // const getItem = fetch(URL)

        // getItem
        // .then((res) => res.json())
        // .then((res) => {
        //     setDetalleProductos(res)
        // })
        // .catch((err) => console.log(err))
        // .finally(() => setLoadingDetalle(false))
    }, [id, tipo]);

    const onAdd = (contador) => {
        addtoCart(detalleProductos, contador)
        setAgregado(true)
    }

    return (
        <>
            {loadingDetalle ? <h3 className="titulo-cargando mt-5">Cargando...</h3> : <ItemDetail onAdd={onAdd} detalleProductos={detalleProductos} agregado={agregado} />}
        </>
    )
}

export default ItemDetailContainer
