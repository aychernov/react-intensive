import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='Home'>
      <h1>Добро пожаловать! Создашь анкету?</h1>
      <Link className='link-nav' to="form">Создать анкету</Link>
    </div>
  )
}
