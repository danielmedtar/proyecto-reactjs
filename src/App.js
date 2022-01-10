import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import Header from "./components/Header";
// import Main from "./components/Main";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ({greeting}) => {

    const datosFooter = {
        copyright: "Todos los Derechos Reservados 2021",
        autor: "Daniel Medina"
    }
    return (
        <BrowserRouter>
            <Header/>

            <h2 className='mt-5'>{greeting="Te damos la bienvenida a DevShop"}</h2>
            <main id="contenedor_productos" className="mt-5">
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path='/:id' element={<ItemListContainer />} />
                    <Route path='/notebooks/:id' element={<ItemDetailContainer />} />
                    <Route path='/pcs/:id' element={<ItemDetailContainer />} />
                    <Route path='/remeras/:id' element={<ItemDetailContainer />} />
                </Routes>
            </main>

            
            <Footer data={datosFooter} />
        </BrowserRouter>
    )
}

export default App;