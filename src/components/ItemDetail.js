import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalleProductos, onAdd, agregado }) => {   
    
    return (
            <div className="card_productos">
                <img className="img-producto" src={`../${detalleProductos.img}`} alt={detalleProductos.nombre} />
                <div className="info_producto">
                    <p className="producto_descripcion">{detalleProductos.marca}</p>
                    <p className="producto_descripcion">{detalleProductos.desc}</p>
                    <p className="producto-precio">${detalleProductos.precio}</p>
                    <p className="producto-detalle">{detalleProductos.detalle}</p>
                    { agregado ? 
                        <button className="irCarrito">
                            <Link to='/carrito'>Ir al carrito</Link>        
                        </button>
                        
                        : <ItemCount stock={detalleProductos.stock} initial={1} onAdd={onAdd} /> }
                </div>
            </div>
        )    
    }


export default ItemDetail