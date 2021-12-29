import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const items = [

    {stock: 5, id: 1, nombre: "lenovo14", tipo: "Notebooks", marca: "lenovo", desc: "LENOVO 14 Intel", precio: 60000, img: "/img/pc1.webp"},
    {stock: 2, id: 2, nombre: "lenovoPad", tipo: "Notebooks", marca: "lenovo", desc: "LENOVO IDEA PAD 3", precio: 80000, img: '/img/pc2.webp'},
    {stock: 3, id: 3, nombre: "lenovoP15", tipo: "Notebooks", marca: "lenovo", desc: "Lenovo P15", precio: 50000, img: '/img/pc3.webp'}
]

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(items)    
            }, 2000)
        })

        promesa.then((productos) => {
            setLoading(false)
            setProductos(productos)
        })        
    }, [])

    if(loading) {
        return (
            <h3 className="titulo-cargando mt-5">Cargando...</h3>
        )
    }else {
        return (
            
            <ItemList productos={productos} />
        )
    }
}

export default ItemListContainer
