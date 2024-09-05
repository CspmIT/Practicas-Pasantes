import React from 'react'
import ButtonUser from '../../../components/ButtonUser/Index'
import Inputs from '../../../components/Inputs/Index'
import { MenuItem, TextField } from '@mui/material'

const Index = () => {
	return (
		<>
			<form>
				<Inputs key={1} id={'Nombre'} label={'Nombre'} type={'text'} placeholder={'Tu nombre'} />
				<Inputs key={2} id={'Apellido'} label={'Apellido'} type={'text'} placeholder={'Tu apellido '} />
				<Inputs key={3} id={'Fecha'} label={'Fecha Nacimiento'} type={'date'} />
				<Inputs key={4} id={'Dni'} label={'Dni'} type={'number'} placeholder={'Nro Documento'} />
				<Inputs key={4} id={'pass'} label={'Contraseña'} type={'password'} placeholder={'Contraseña'} />
				<Inputs select label={`Entidad`} onChange={(e) => existEntity(e.target.value)} className='w-1/2' defaultValue={0}>
					<MenuItem key={0} value={0}>
						Nuevo
					</MenuItem>
					<MenuItem key={1} value={1}>
						Existente
					</MenuItem>
				</Inputs>
	
				<ButtonUser props={{ texto: 'Agregar', bg: 'bg-red-500' }} />
			</form>
		</>
	)
}

export default Index