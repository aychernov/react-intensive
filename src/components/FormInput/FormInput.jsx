import React, { useState } from 'react'
import './FormInput.css'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props
  const regex = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'lastProject' && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput