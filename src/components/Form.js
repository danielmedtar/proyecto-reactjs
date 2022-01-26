import { React, useState, useContext } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db} from "../firebase";
import { contextCarrito } from './Context'

const Form = () => {
    const { cartArray, borrarTodo, precioTotal } = useContext(contextCarrito)
    const [nombre,setNombre] = useState("")
    const [mail,setMail] = useState("")
    let [orden, setOrden] = useState(false)

    const handleChangeNombre = e => {
        setNombre(e.target.value)
    }

    const handleChangeMail = e => {
        setMail(e.target.value)
    }

    const usuario = {
        nombre,
        mail
    }

    const crearOrden = () => {
        const coleccionProductos = collection(db,"ordenes")

        if(usuario.nombre === "" || usuario.mail === "") {
            alert("Completa todos los campos correctamente")
        } else {
            orden = {
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
    }

    return (
        <div className='formulario mt-5'>
            <h3 className='text-center'>Para continuar tu compra, ingresa tus datos</h3>
            <input type='text' onChange={handleChangeNombre} placeholder='Nombre y apellido' />
            <input type='email' onChange={handleChangeMail} placeholder='Mail' />
            <textarea placeholder='Dejanos un mensaje o aclaración'></textarea>
            <button className='d-flex justify-content-center finalizar-compra w-10 mx-auto' onClick={crearOrden}>
                    Finalizar Compra
            </button>
        </div>
    )
};

export default Form;
