import { Link } from "react-router-dom"
// import ItemCount from "./ItemCount"


const Item = ({ item }) => {
    return (
                <div className="card_productos">
                    <img className="img-producto" src={item.img} alt={item.nombre} />
                    <div className="info_producto">
                        <p className="producto_descripcion">{item.nombre}</p>
                        <p className="producto-precio">${item.precio}</p>
                        
                        <button className="btn-cart btn-verMas">
                            <Link to={`${item.id}`}>Ver más</Link>
                        </button>
                    </div>
                </div>
            )    
        }
    
            
    

export default Item
