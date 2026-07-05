import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Urban Sneakers. Todos os direitos reservados.</p>
        <p className="credits">Designer & Desenvolvimento</p>
      </div>
    </footer>
  )
}
