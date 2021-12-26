import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
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

            <Main greeting={"Te damos la bienvenida a DevShop"} />

            <Footer data={datosFooter} />
        </>
    )
}

export default App;