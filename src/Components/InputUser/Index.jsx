import React, {useState} from 'react'
import './InputUser_Module.css'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const Index = ({props}) => {
  const [type, setType] = useState(props.type);


  return (
      <div className='relative p-2'>
      <input className={`block w-full text-white rounded-md border-0 py-1.5 pl-7 pr-20  
      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`} plaseholder = {props.ph} type = {type} />{props.icon &&(
       <button onClick={() => setType(type == 'password' ? 'text' : 'password')} 
       className={`input-icon password ${type == 'password' ? 'bg-red-300' : 'bg-green-300'}`}>
        {type == 'password' ? <IoEyeSharp /> : <FaEyeSlash />}</button>
      )}
      </div>
  )
}

export default Index
