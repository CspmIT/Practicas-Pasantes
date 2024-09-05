import React from 'react'
import ButtonUser from "../../../Components/ButtonUser/Index";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h1>Deci Algo</h1>
      <Link to={'./Formulario'}>
      <ButtonUser props={{bg:'bg-blue-300', texto: 'Vista Formulario'}}/>
    </Link>
    </div>
  )
}

export default Index
