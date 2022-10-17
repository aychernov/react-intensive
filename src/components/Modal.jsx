import React from 'react'
import './Modal.css'

export const Modal = ({ values, setValues }) => {
  return (
    <div className='molda'>
      <div className="modal__content">
        <h1>Результат</h1>
        {values}ав
      </div>
    </div>
  )
}
