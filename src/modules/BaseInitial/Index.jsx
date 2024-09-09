import React from 'react'
import { Link } from 'react-router-dom'
import ButtonUser from '../../components/ButtonUser/Index'
import Cards from '../../components/Cards/Index'

function Index() {
    return (
        <div>
            <br />
            <br />
            <main>
                <h1>Bienvenido a la aplicación</h1>
                <p>Este es el contenido de tu aplicación.</p>
            </main>
            <br />
            <div className='center'>
                <Cards/>
            </div>
            <br />
            <div>
                <Link to={'./Formulario'}>
                    <ButtonUser props={{ bg: 'bg-red-300', texto: 'Vista Formulario' }} />
                </Link>
            </div>
        </div>
    )
}

export default Index;