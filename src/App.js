import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = ({greeting}) => {

    const datosFooter = {
        copyright: "Todos los Derechos Reservados 2021",
        autor: "Daniel Medina"
    }
    return (
        <>
            <Header/>

            <h2 className='mt-5'>{greeting="Te damos la bienvenida a DevShop"}</h2>

            <Main />
            
            <ItemDetailContainer />

            <Footer data={datosFooter} />
        </>
    )
}

export default App;