import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";

// const items = [

//     { stock: 5, id: 1, nombre: "lenovo14", tipo: "Notebooks", marca: "lenovo", desc: "LENOVO 14 Intel", precio: 60000, img: "/img/pc1.webp" },
//     { stock: 2, id: 2, nombre: "lenovoPad", tipo: "Notebooks", marca: "lenovo", desc: "LENOVO IDEA PAD 3", precio: 80000, img: '/img/pc2.webp' },
//     { stock: 3, id: 3, nombre: "lenovoP15", tipo: "Notebooks", marca: "lenovo", desc: "Lenovo P15", precio: 50000, img: '/img/pc3.webp' },
//     {stock: 0, id: 4, nombre: "estudio", tipo: "Pc", marca: "cx", desc: "CX PC ESTUDIO A3000. AMD", precio: 120000, img: 'img/pc4.jpg'},
//     {stock: 0, id: 5, nombre: "comboJ7", tipo: "Pc", marca: "exo", desc: "EXO COMBO READY J7-V1345Y", precio: 110000, img: 'img/pc5.jpg'},
//     {stock: 1, id: 6, nombre: "allInOne", tipo: "Pc", marca: "hp", desc: "HP All in One 20-c307la", precio: 75000, img: 'img/pc6.jpg'},
//     {stock: 10, id: 7, nombre: "javascript", tipo: "Remeras", marca: "dev", desc: "JAVASCRIPT", precio: 3500, img: 'img/remera1.jpg'},
//     {stock: 6, id: 8, nombre: "html", tipo: "Remeras", marca: "dev", desc: "HTML", precio: 2000, img: 'img/remera2.jpg'},
//     {stock: 0, id: 9, nombre: "sass", tipo: "Remeras", marca: "dev", desc: "SASS", precio: 2500, img: 'img/remera3.jpg'},
//     {stock: 3, id: 10, nombre: "angular", tipo: "Remeras", marca: "dev", desc: "ANGULAR", precio: 3000, img: 'img/remera4.jpg'},
//     {stock: 12, id: 11, nombre: "node", tipo: "Remeras", marca: "dev", desc: "NODE.JS", precio: 1500, img: 'img/remera5.jpg'},
//     {stock: 15, id: 12, nombre: "github", tipo: "Remeras", marca: "dev", desc: "GITHUB", precio: 4000, img: 'img/remera6.jpg'}
    
// ]

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    
    const { id } = useParams()

    useEffect(() => {
        setLoading(true);

        const URL = id ? `http://localhost:8081/${id}` : 'http://localhost:8081';
        const getProductos = fetch(URL);

        getProductos
        .then((res) => res.json())
        .then((res) => {
            setProductos(res);
            setLoading(true);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [id]);

        // if (id) {
        //    return `/items/${id}`
            
        // } else {
        //     const promesa = new Promise((res) => {
        //         setTimeout(() => {
        //             res(items)
        //         }, 100)
        //     })
    
        //     promesa.then((productos) => {
        //         setLoading(false)
        //         setProductos(productos)
        //     })
        // }
            
        // }, [id])


    if (loading) {
        return (
            <h3 className="titulo-cargando mt-5">Cargando...</h3>
        )
    } else {
        return (
            <ItemList productos={productos} />
        )
    }
}

export default ItemListContainer
