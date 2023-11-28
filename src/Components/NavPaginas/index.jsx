import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const index = () => {
  return (
    <NavLink style={{display: 'flex', gap: '2rem'}}>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contatos</Link>
    </NavLink>
  )
}

export default index