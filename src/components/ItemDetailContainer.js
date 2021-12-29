import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const detalle = [
        {
            stock: 5, 
            id: 1, 
            nombre: "lenovo14", 
            tipo: "Notebooks", 
            marca: "lenovo", 
            desc: "14 Intel", 
            precio: 60000, 
            img: "/img/pc1.webp", 
            detalle: "Hermosa, práctica y duradera Notebook para todo lo que necesites."
        }
]   

const ItemDetailContainer = () => {

    const [detalleProductos, setDetalleProductos] = useState([])
    const [loadingDetalle, setLoadingDetalle] = useState([true])

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(detalle)
            }, 2000)
        })

        promesa.then((detalleProductos) => {
            setLoadingDetalle(false)
            setDetalleProductos(detalleProductos)
        })        
    }, [])

    if(loadingDetalle) {
        return (
            <h3 className="titulo-cargando mt-5">Cargando...</h3>
        )
    }else {
        return (
           <ItemDetail detalleProductos={detalleProductos} />
        )
    }
}

export default ItemDetailContainer
