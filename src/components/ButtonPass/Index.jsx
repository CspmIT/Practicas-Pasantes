import { FaRegEyeSlash } from "react-icons/fa";
import { HiEyeSlash } from "react-icons/hi2";
import { useState } from 'react'
import './ButtonPass_module.css'

const InputWithIcon = ({ props }) => {
    const [type, setType] = useState(props.type || 'text')


    // var setPass = (type) => {
    //     setType(type == 'password' ? 'text' : 'password');
    //     setColor(type == 'password' ? 'bg-red-300' : 'password');
    // }

    return (
        <div className="relative flex items-center p-2">
      <input
        className="border border-gray-300 p-2 rounded w-full focus:ring focus:ring-indigo-300"
        placeholder={props.ph}
        type={type}
      />
      {props.icon && (
        <button
          onClick={() => setType(type === 'password' ? 'text' : 'password')}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full transition-colors duration-300 ${
            type === 'password' ? 'bg-red-500' : 'bg-green-500'
          }`}
        >
          {type === 'password' ? <FaRegEyeSlash /> : <HiEyeSlash />}
        </button>
      )}
    </div>
  );
}

export default InputWithIcon;