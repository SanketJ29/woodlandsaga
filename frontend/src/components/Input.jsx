import React from 'react';

function Input({ placeholder, name, type, value, onChange}) {
  return (
    <input
      className="border border-grey-400 p-2 mb-2 rounded-md w-full placeholder-gray-900 focus:placeholder-opacity-100"
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;