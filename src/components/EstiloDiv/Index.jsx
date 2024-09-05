import React from 'react';

const Estilo = ({ props }) => {
  return (
    <div className="mb-4 flex items-center">
      <label className="text-gray-700 font-bold mr-4">{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="border border-gray-300 p-2 rounded w-full focus:ring focus:ring-indigo-300"
      />
    </div>
  );
};

export default Estilo;