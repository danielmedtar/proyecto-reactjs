import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import Header from "./components/Header";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from './components/Carrito';
import CartProvider, { contextCarrito } from './components/Context';

const App = ({greeting}) => {

    const datosFooter = {
        copyright: "Todos los Derechos Reservados 2021",
        autor: "Daniel Medina"
    }
    return (
        <CartProvider>
            <BrowserRouter>
                <Header/>

                <h2 className='mt-5'>{greeting="Te damos la bienvenida a DevShop"}</h2>
                <main id="contenedor_productos" className="mt-5">
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path='/:id' element={<ItemListContainer />} />
                        <Route path='/:cat/:id' element={<ItemDetailContainer />} />
                        <Route path='/carrito' element={<Carrito />} />
                    </Routes>
                </main>

                
                <Footer data={datosFooter} />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App;