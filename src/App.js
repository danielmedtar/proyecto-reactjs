import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {

    const datosFooter = {
        copyright: "Todos los Derechos Reservados 2021",
        autor: "Daniel Medina"
    }
    return (
        <>
            <Header/>

            <Main/>

            <Footer data={datosFooter} />
        </>
    )
}

export default App;