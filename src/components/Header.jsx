import React from 'react'
import '../css/Header.css'

const Header = () => {
   let alumno = "Karen Herrera"
  return (
    <div className='header'>
      <h1>Portfolio {alumno}</h1>
      <hr/>
    </div>
  )
}

export default Header
