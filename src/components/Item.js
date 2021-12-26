import ItemCount from "./ItemCount"

const items = [

    {stock: 5, id: 1, nombre: "lenovo14", tipo: "Notebooks", marca: "lenovo", desc: "LENOVO 14 Intel", precio: 60000, img: "/img/pc1.webp"},
    {stock: 2, id: 2, nombre: "lenovoPad", tipo: "Notebooks", marca: "lenovo", desc: "LENOVO IDEA PAD 3", precio: 80000, img: '/img/pc2.webp'},
    {stock: 3, id: 3, nombre: "lenovoP15", tipo: "Notebooks", marca: "lenovo", desc: "Lenovo P15", precio: 50000, img: '/img/pc3.webp'}
]
const Item = () => {
    return (
            items.map((elemento, indice) => {
                return (
                    <div key={indice} className="card_productos">
                        <img className="img-producto" src={elemento.img} alt="producto" />
                        <div className="info_producto">
                            <p className="producto_descripcion">{elemento.desc}</p>
                            <p className="producto-precio">${elemento.precio}</p>
                            <ItemCount stock={elemento.stock} initial={1}/>
                        </div>
                    </div>
                )    
        }))
    }
            
    

export default Item
