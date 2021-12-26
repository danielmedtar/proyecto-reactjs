import ItemListContainer from "./ItemListContainer"

const Main = ({greeting}) => {
    return (
        <main className="mt-5">
            <h2>{greeting}</h2>
                <ItemListContainer />
        </main>
    )
}

export default Main
