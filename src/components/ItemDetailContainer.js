import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

// const detalle = {
//             stock: 5, 
//             id: 1, 
//             nombre: "lenovo14", 
//             tipo: "Notebooks", 
//             marca: "lenovo", 
//             desc: "14 Intel", 
//             precio: 60000, 
//             img: "/img/pc1.webp", 
//             detalle: "Hermosa, práctica y duradera Notebook para todo lo que necesites."
//         }

const ItemDetailContainer = () => {

    const [detalleProductos, setDetalleProductos] = useState({})
    const [loadingDetalle, setLoadingDetalle] = useState([true])

    const { id } = useParams();

    useEffect(() => {
        setLoadingDetalle(true)

        const URL = `http://localhost:8081/notebooks/${id}`;
        
        const getItem = fetch(URL)

        getItem
        .then((res) => res.json())
        .then((res) => {
            setDetalleProductos(res)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoadingDetalle(false))
    }, [id]);

    //     const promesa = new Promise((res) => {
    //         setTimeout(() => {
    //             res(detalle)
    //         }, 1000)
    //     })

    //     promesa.then((detalleProductos) => {
    //         setLoadingDetalle(false)
    //         setDetalleProductos(detalleProductos)
    //     })        
    // }, [id]);

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
