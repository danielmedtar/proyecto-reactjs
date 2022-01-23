import React, { createContext, useState, useEffect } from 'react'

export const contextCarrito = createContext()

const CartProvider = ({ children }) => {

    const [cartArray, setcartArray] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const addtoCart = (detalleProductos, contador) => {
        if(isInCart(detalleProductos.id)) {
            const actualizarItem = cartArray.findIndex(element => element.item.id === detalleProductos.id)
            cartArray[actualizarItem].contador = cartArray[actualizarItem].contador + contador
            setcartArray([...cartArray])
        } else {
            console.log(`Agregaste ${detalleProductos.desc}, cantidad: ${contador}.`);
            const newObj = {
                item: detalleProductos,
                contador
            }
            setcartArray([...cartArray, newObj])
        }
    }

    const borrarItem = (id) => {
        const actualizarCart = cartArray.filter(el => el.item.id !== id)
        setcartArray(actualizarCart)
    }

    const borrarTodo = () => {
        setcartArray([])
    }

    const isInCart = (id) => {
        return cartArray.some(el => el.item.id === id)
    }

    useEffect(() => {
        if(cartArray.length > 0){
            let cantidad = 0
            cartArray.forEach(item => cantidad = cantidad + item.contador)
            setCantidadTotal(cantidad)
        }else{
            setCantidadTotal(0)
        }


    },[cartArray])


    const contadorProductos = () => {
        return cartArray.reduce((accum, item) => accum = accum + item.contador, 0)
      }

      const precioTotal = () => {
        return cartArray.reduce((accum, el) => accum = accum + (el.item.precio*el.count), 0)
    }

    const value = {
        cartArray,
        cantidadTotal,
        addtoCart,
        borrarItem,
        borrarTodo,
        contadorProductos,
        precioTotal
    }


    return (
        <contextCarrito.Provider value={value}>
            {children}
        </contextCarrito.Provider>
    )
}

export default CartProvider
