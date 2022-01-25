import { React, useContext } from 'react';
import { contextCarrito } from "./Context";

const TotalCompra = () => {
    const {contadorProductos, precioTotal} = useContext(contextCarrito)
    return (    
            <div className='container-detalle my-5'>
                <p className='parrafo-carrito'>Cantidad de productos{contadorProductos() > 0 && <span className="m-3">{contadorProductos()}</span>}</p>

                <p className='parrafo-carrito'>Total de tu compra {precioTotal() > 0 && <span>${precioTotal()}</span>}</p>
            </div>
    )
};

export default TotalCompra;
