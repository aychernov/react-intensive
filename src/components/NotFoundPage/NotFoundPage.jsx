import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Ой, что-то пошло не так, вернись домой...</h1>
      <Link className='link-nav' to="/">Домой</Link>
    </div>
  )
}
