import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.svg'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link className="brand" to="/">
          <img src={logo} alt="Urban Sneakers" />
          <span className="brand-text">Urban Sneakers</span>
        </Link>

        <nav id="main-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/products" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Produtos</NavLink>
          <NavLink to="/about" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Sobre</NavLink>
          <NavLink to="/contact" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>Contato</NavLink>
        </nav>

        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-controls="main-nav" aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
