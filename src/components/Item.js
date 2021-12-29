// import ItemCount from "./ItemCount"


const Item = ({ index, item }) => {
    return (
                <div className="card_productos" key={index}>
                    <img className="img-producto" src={item.img} alt="producto" />
                    <div className="info_producto">
                        <p className="producto_descripcion">{item.desc}</p>
                        <p className="producto-precio">${item.precio}</p>
                        
                        <button className="btn-cart btn-verMas">
                            <a href="ItemDetailContainer.js">Ver más</a>
                        </button>
                    </div>
                </div>
            )    
        }
    
            
    

export default Item
