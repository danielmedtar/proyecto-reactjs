import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { contextCarrito } from './Context'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db} from "../firebase";
import TotalCompra from "./TotalCompra";

const CarritoContainer = () => {

    const { cartArray, borrarItem, precioTotal } = useContext(contextCarrito)
    const [orden, setOrden] = useState(false)
    const crearOrden = () => {

        const coleccionProductos = collection(db,"ordenes")
        const usuario = {
            nombre: "Juan",
            email: "mail@gmail.com",
            telefono: "01168697258"
        }

        const orden = {
            usuario,
            cartArray,
            total: precioTotal(),
            fechaPedido: serverTimestamp()
        }

        const pedido = addDoc(coleccionProductos,orden)

        pedido
        .then((resultado)=>{
            setOrden(resultado.id)
            return (
                'N° de Orden ' + (resultado.id),
                `
                El total de tu compra es $${orden.total}.
                ¡Gracias por tu compra ${orden.usuario.nombre}, volvé pronto!
                `,
                'success'
            )
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (        
        <div>
            {cartArray.length ===  0 && 
                <div className='d-flex flex-column justify-content-center'>
                    <h2 className='mb-5'>No hay nada en el carrito</h2>
                    <Link to="/" className='text-center ir-inicio'>Ir al inicio</Link>
                </div>
            }
            {(cartArray.length > 0) && 
                <>
                    <div>
                        {cartArray.map(prod => <CartItem key={prod.item.id} productos={prod} borrarItem={borrarItem} /> )}
                        <TotalCompra/>
                    </div>

                  
                    <button className='d-flex justify-content-center finalizar-compra w-10 mx-auto' onClick={crearOrden}>
                        Finalizar Compra
                    </button>
                </>
            }
        </div>
    )
}

export default CarritoContainer
