import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [detalleProductos, setDetalleProductos] = useState({})
    const [loadingDetalle, setLoadingDetalle] = useState([true])
    const [agregado, setAgregado] = useState(false);

    const { id, cat } = useParams();

    useEffect(() => {
        setLoadingDetalle(true)

        const URL = `http://localhost:8081/${cat}/${id}`;
        
        const getItem = fetch(URL)

        getItem
        .then((res) => res.json())
        .then((res) => {
            setDetalleProductos(res)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoadingDetalle(false))
    }, [id, cat]);

    const onAdd = (contador) => {
        console.log(`Agregaste ${detalleProductos.desc}, cantidad: ${contador}.`);
        setAgregado(true)
    }

    return (
        <>
            {loadingDetalle ? <h3 className="titulo-cargando mt-5">Cargando...</h3> : <ItemDetail onAdd={onAdd} detalleProductos={detalleProductos} agregado={agregado} />}
        </>
    )
}

export default ItemDetailContainer
