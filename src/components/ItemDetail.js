import ItemCount from "./ItemCount"
// import ItemDetailContainer from "./ItemDetailContainer"


const ItemDetail = ({detalleProductos}) => {   
    
    return (
            <div className="card_productos">
                <img className="img-producto" src={detalleProductos.img} alt="producto" />
                <div className="info_producto">
                    <p className="producto_descripcion">{detalleProductos.marca}</p>
                    <p className="producto_descripcion">{detalleProductos.desc}</p>
                    <p className="producto-precio">${detalleProductos.precio}</p>
                    <p className="producto-detalle">{detalleProductos.detalle}</p>

                    <ItemCount stock={detalleProductos.stock} initial={0} />
                </div>
            </div>
        )    
    }


export default ItemDetail
