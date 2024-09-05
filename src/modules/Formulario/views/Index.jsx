import React from 'react'
import ButtonUser from '../../../components/ButtonUser/Index'
import EstiloDiv from '../../../components/EstiloDiv/Index'
import ButtonPass from './../../../components/ButtonPass/Index'
import { MenuItem, TextField } from '@mui/material'
const Index = () => {
	return (
		<>
			<form>
				<EstiloDiv key={1} id={'Nombre'} label={'Nombre'} type={'text'} placeholder={'Tu nombre'} />
				<EstiloDiv key={2} id={'Apellido'} label={'Apellido'} type={'text'} placeholder={'Tu apellido '} />
				<EstiloDiv key={3} id={'Fecha'} label={'Fecha Nacimiento'} type={'date'} />
				<EstiloDiv key={4} id={'Dni'} label={'Dni'} type={'number'} placeholder={'Nro Documento'} />
				<EstiloDiv key={4} id={'pass'} label={'pass'} type={'password'} placeholder={'Contraseña'} />
				<TextField select label={`Entidad`} onChange={(e) => existEntity(e.target.value)} className='w-1/2' defaultValue={0}>
					<MenuItem key={0} value={0}>
						Nuevo
					</MenuItem>
					<MenuItem key={1} value={1}>
						Existente
					</MenuItem>
				</TextField>
				{/* <ButtonPass props={{ ph: 'ingrese pass', type: 'password', icon: true }} /> */}
				<ButtonUser props={{ texto: 'Agregar', bg: 'bg-red-500' }} />
			</form>
		</>
	)
}

export default Index
