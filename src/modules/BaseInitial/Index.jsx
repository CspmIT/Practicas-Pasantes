import React from 'react'
import { Link } from 'react-router-dom'
import ButtonUser from '../../components/ButtonUser/Index'

function Index() {
    return (
        <div>
            <main>
                <h1>Bienvenido a la aplicación</h1>
                <p>Este es el contenido de tu aplicación.</p>
            </main>
            <div>
                <Link to={'./Formulario'}>
                    <ButtonUser props={{ bg: 'bg-red-300', texto: 'Vista Formulario' }} />
                </Link>
            </div>

        </div>
    )
}

export default Index;