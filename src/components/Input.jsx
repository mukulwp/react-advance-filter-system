import React from 'react'

const Input = ({title, name, value, handleChange, color}) => {
  return (
    <label className="sidebar-label-container">
    <input onChange={handleChange} value={value} type="radio" name={name} />
    <span className="checkmark" style={{backgroundColor:color}}></span>{title}
  </label>
  )
}

export default Input