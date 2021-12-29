import ItemListContainer from "./ItemListContainer"


const Main = (productos) => {
    return (
        <main id="contenedor_productos" className="mt-5">
            <ItemListContainer productos={productos} />
        </main>
    )
}

export default Main
