import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const agregar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const quitar = () => {
        if(contador > initial) {
            setContador(contador - 1)
        }
    }


    return (
        <div className="container-btns mt-5">
            <button className="btn-cart btn-contador" onClick={quitar}>-</button>
            <p>{contador}</p>
            <button className="btn-cart btn-contador" onClick={agregar}>+</button>
            <button className="btn-cart btn-agregar" onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
