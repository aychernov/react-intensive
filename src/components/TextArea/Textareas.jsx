import React, { useState } from 'react'
import './Textareas.css'


const TextAreas = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, onChange, errorMessage, id, ...inputProps } = props
  const [text, setText] = useState('')
  const [error, setError] = useState(null)

  const handleFocus = (e) => {
    setFocused(true)
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    const currentText = e.target.value
    const charCount = currentText.length;
    if (e.target.value.length > 600) {
      // setText(e.target.value)
      setError(`Превышен лимит! ${charCount + '/' + 600} `)
    } else {
      setText(e.target.value)

      setError(`${charCount + '/' + 600} `)
    }
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <textarea
        id={id}
        rows={7}
        {...inputProps}
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'lastProject' && setFocused(true)}
        focused={focused.toString()}
        value={text}
      />
      <span>{errorMessage}</span>
      <span className='textarea'> {error && error}</span>
    </div>

  )
}

export default TextAreas