import React from 'react'
import ButtonUser from '../../../components/ButtonUser/Index'
import EstiloDiv from '../../../components/EstiloDiv/Index'
import ButtonPass from './../../../components/ButtonPass/Index'
import Navbar from '../../../components/Navbar/Index'


const Index = () => {
  return (
    <>
      <div> <Navbar /></div>
      <br />
      <br />
      <div>
        <EstiloDiv props={{ label: 'Nombre', type: 'text', placeholder: 'Tu nombre' }} />
        <EstiloDiv props={{ label: 'Apellido', type: 'text', placeholder: 'Tu apellido ' }} />
        <EstiloDiv props={{ label: 'Fecha Nacimiento', type: 'date' }} />
        <EstiloDiv props={{ label: 'Dni', type: 'number', placeholder: 'Nro Documento' }} />
      </div>

      <EstiloDiv props={{ label: 'Correo', type: 'text', placeholder: 'Ingrese el correo' }} />
      <ButtonPass props={{ ph: 'ingrese pass', type: 'password', icon: true }} />
      <ButtonUser props={{ texto: 'Agregar', bg: 'bg-red-500' }} />
      
  

    </>
  )
}

export default Index