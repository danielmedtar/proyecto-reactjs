import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { contextCarrito } from './Context'
import TotalCompra from "./TotalCompra";
import Form from './Form';

const CarritoContainer = () => {

    const { cartArray, borrarItem } = useContext(contextCarrito)

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

                    <Form />
                </>
            }
        </div>
    )
}

export default CarritoContainer
