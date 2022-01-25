import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db, } from "../firebase";
import ItemList from "./ItemList";
import { collection , getDocs , query , where } from "firebase/firestore"
import  Loader from "./Loader";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { id } = useParams()

    useEffect(() => {
        const coleccionProductos = collection(db, "productos")
        let pedido
        if(id) {
            const filtro1 = where("tipo","==",id)            
            const consulta = query(coleccionProductos,filtro1)    
            pedido = getDocs(consulta)
    
        } else {
            
            pedido = getDocs(coleccionProductos)
        }
        pedido
            .then((resultado) =>{
                setProductos(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                setLoading(false) 
                    })
                .catch((error)=>{
                    console.log(error);
                })
    }, [id]);

    

    return (
        <>
            {loading ? <Loader /> : <ItemList productos={productos} />}
        </>
    )
}

export default ItemListContainer
