import { useContext } from "react";
import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import { contextCarrito } from "./Context";

const CartWidget = () => {

    const {contadorProductos} = useContext(contextCarrito)
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Link to='/carrito'>
                <Icon icon="emojione:shopping-cart" />
            </Link>
                {contadorProductos() > 0 && <p className="mb-0 contador-carrito">{contadorProductos()}</p>}
        </div>
    )
}

export default CartWidget
