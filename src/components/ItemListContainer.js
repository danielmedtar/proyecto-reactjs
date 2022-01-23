import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db, } from "../firebase";
import { contextCarrito } from "./Context";
import ItemList from "./ItemList";
import { collection , getDocs , query , where } from "firebase/firestore"

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { id } = useParams()

    const { cartArray } = useContext(contextCarrito)

    useEffect(() => {
        if(id) {
            const coleccionProductos = collection(db, "productos")
            const filtro1 = where("tipo","==",id)
            
            const consulta = query(coleccionProductos,filtro1)
    
            const pedido = getDocs(consulta)
    
            pedido
                .then((resultado) =>{
                    setProductos(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false) 
                        })
                    .catch((error)=>{
                        console.log(error);
                    })
        } else {
            const coleccionProductos = collection(db, "productos")
            const pedido = getDocs(coleccionProductos)
            pedido
                .then((resultado)=>{
                    setProductos(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false) 
                })
                .catch((error)=>{
                    console.log(error)
                })

        }
    }, [id]);

    

    return (
        <>
            {loading ? <h3 className="titulo-cargando mt-5">Cargando...</h3> : <ItemList productos={productos} />}
        </>
    )
}

export default ItemListContainer
