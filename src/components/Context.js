import React, { createContext, useState } from 'react'

export const contextCarrito = createContext()

const CartProvider = ({ children }) => {

    const [cartArray, setcartArray] = useState([])

    const addtoCart = (detalleProductos, contador) => {
        console.log(`Agregaste ${detalleProductos.desc}, cantidad: ${contador}.`);
        const newObj = {
            item: detalleProductos,
            contador
        }
        setcartArray([...cartArray, newObj])
    }

    const borrarItem = (id) => {
        const actualizarCart = cartArray.filter(el => el.id !== id)
        setcartArray(actualizarCart)
    }

    const borrarTodo = () => {
        setcartArray([])
    }

    const isInCart = (id) => {
        return cartArray.some(el => el.id === id)
    }

    const value = {
        cartArray,
        addtoCart,
        borrarItem,
        borrarTodo
    }


    return (
        <contextCarrito.Provider value={value}>
            {children}
        </contextCarrito.Provider>
    )
}

export default CartProvider
