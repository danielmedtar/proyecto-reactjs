import ItemListContainer from "./ItemListContainer"
import ItemCount from './ItemCount';

const Main = () => {
    return (
        <main className="mt-5">
            <h2>
                <ItemListContainer greeting={"Te damos la bienvenida a DevShop"} />
            </h2>

            <ItemCount stock={8} initial={1}/>
        </main>
    )
}

export default Main
