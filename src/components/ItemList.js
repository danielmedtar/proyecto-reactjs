import Item from "./Item";


const ItemList = ({ productos }) => {
    return (
        <>
            <div id="contenedor_productos" className="my-5">
                {productos.map((producto) => (
                    <Item key={producto.id} item={producto} />
                ))}
            </div>
        </>
    )
}

export default ItemList