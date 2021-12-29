import Item from "./Item";


const ItemList = ({ productos }) => {
    return (
        <div id="contenedor_productos" className="my-5">
            {productos.map((item,index) => {
                return <Item key={index} item={item} />
            })}
        </div>
    )
}

export default ItemList