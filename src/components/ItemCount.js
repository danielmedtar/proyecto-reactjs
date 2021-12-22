import { useState } from "react"

const ItemCount = ({stock, initial}) => {
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
            <button className="btn-cart btn-quitar" onClick={quitar}>Quitar</button>
            <button className="btn-cart btn-agregar" onClick={agregar}>Agregar al carrito</button>
            <p>{contador}</p>
        </div>
    )
}

export default ItemCount
