import React from 'react'
import { Icon } from '@iconify/react';

const CartItem = ( { productos, borrarItem } ) => {
    return (
            <div className='elementos-carrito d-flex justify-content-center align-items-center mb-4'>
                <p className='parrafo-carrito mb-0'><span>Producto:</span> { productos.item.marca } { productos.item.desc }</p>                    
                
                <p className='parrafo-carrito mb-0'><span>Cantidad:</span> { productos.contador }</p>                
                
                <p className='parrafo-carrito mb-0'><span>Precio Individual:</span> ${ productos.item.precio }</p>                   
                
                <p className='parrafo-carrito mb-0'><span>Precio Cantidad:</span> ${ productos.item.precio*(productos.contador) }</p>                                   
                
                <Icon icon="ep:delete" color="red" className='icon-delete' onClick={() => borrarItem(productos.item.id)}/>           
            </div>        
    )
}

export default CartItem
