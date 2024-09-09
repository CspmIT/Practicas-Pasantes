import React from 'react'
// import ButtonUser from '../../../components/ButtonUser/Index'
import { MenuItem, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'


const Index = () => {
	const { control, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	}
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<Controller
					name='name'
					control={control}
					rules={{ required: 'El nombre es obligatorio' }}
					render={({ field }) => (
						<TextField
							{...field}
							label={'Nombre'}
							variant='outlined'
							error={!!errors.name}
							helperText={errors.name?.message}
						/>
					)}
				/>

				<Controller
					name='apellido'
					control={control}
					rules={{ required: 'El apellido es obligatorio' }}
					render={({ field }) => (
						<TextField
							{...field}
							label={'Apellido'}
							variant='outlined'
							error={!!errors.apellido}
							helperText={errors.apellido?.message}
						/>
					)}
				/>

				<Controller
					name='email'
					control={control}
					rules={{
						required: 'El email es obligatorio',
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
							message: 'El formato de email no es válido'
						}
					}}
					render={({ field }) => (
						<TextField
							{...field}
							label={'Email'}
							variant='outlined'
							error={!!errors.email}
							helperText={errors.email?.message}
						/>
					)}
				/>

				<Controller
					name='telefono'
					control={control}
					rules={{
						required: 'El número de teléfono es obligatorio',
						pattern: {
							value: /^[0-9]+$/,
							message: 'Solo se permiten números'
						}
					}}
					render={({ field }) => (
						<TextField
							{...field}
							label={'Número de Teléfono'}
							variant='outlined'
							error={!!errors.telefono}
							helperText={errors.telefono?.message}
						/>
					)}
				/>

				<Controller
					name='contraseña'
					control={control}
					rules={{
						required: 'La contraseña es obligatoria',
						minLength: {
							value: 6,
							message: 'La contraseña debe tener al menos 6 caracteres'
						}
					}}
					render={({ field }) => (
						<TextField
							{...field}
							label={'Contraseña'}
							variant='outlined'
							error={!!errors.contraseña}
							helperText={errors.contraseña?.message}
						/>
					)}
				/>

				<button type='submit'>Enviar</button>
			</form>


			{/* <form>
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
			</form> */}

			{/* <ButtonUser props={{ texto: 'Agregar', bg: 'bg-red-500' }} /> */}
		</>
	)
}

export default Index