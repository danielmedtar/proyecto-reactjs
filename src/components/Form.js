import { React, useState, useContext } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db} from "../firebase";
import { contextCarrito } from './Context'

const Form = () => {
    const { cartArray, borrarTodo, precioTotal } = useContext(contextCarrito)
    const [nombre,setNombre] = useState("")
    const [mail,setMail] = useState("")
    const [orden, setOrden] = useState(false)

    const handleChangeNombre = e => {
        setNombre(e.target.value)
    }

    const handleChangeMail = e => {
        setMail(e.target.value)
    }


    console.log("Render de App")

    const crearOrden = () => {

        const coleccionProductos = collection(db,"ordenes")
        const usuario = {
            nombre,
            mail
        }

        const orden = {
            cartArray,
            total: precioTotal(),
            fechaPedido: serverTimestamp()
        }

        const pedido = addDoc(coleccionProductos,orden)

        pedido
        .then((resultado)=>{
            setOrden(resultado.id)
            alert("Gracias " + usuario.nombre + ". Tu Orden ha sido confirmada. El código de seguimiento: " + resultado.id + " se ha enviado a " + usuario.mail)
            borrarTodo()
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className='formulario'>
            <input type='text' onChange={handleChangeNombre} placeholder='Nombre y apellido' required/>
            <input type='email' onChange={handleChangeMail} placeholder='Mail' required />
            <button type='submit' className='d-flex justify-content-center finalizar-compra w-10 mx-auto' onClick={crearOrden}>
                    Finalizar Compra
            </button>          
        </div>
    )
};

export default Form;
