import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Formulario from './modules/Formulario/views/Index'
import BaseInitial from './modules/BaseInitial/Index'
import Navbar from './components/Navbar/Index'


function App() {

  const rutas =
    [
      { path: '/', element: <BaseInitial /> },
      { path: '/Formulario', element: <Formulario /> }
    ]

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {rutas.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
