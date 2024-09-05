import React from 'react';
import { TextField } from '@mui/material'

const Inputs = (props) => {
	// console.log(props)
	return <TextField key={props.id} error={false} type={props.type} label={props.label} className='w-full' />
}

export default Inputs