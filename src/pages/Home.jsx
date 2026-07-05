import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import hero from '../assets/hero-illustration.svg'
import Testimonial from '../components/Testimonial'

export default function Home() {
  const [formStatus, setFormStatus] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name') || ''
    const email = form.get('email') || ''
    const message = form.get('message') || ''

    // Simula envio e sucesso
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('success')
      e.target.reset()
      setTimeout(() => setFormStatus(null), 4000)
    }, 900)
  }

  const testimonials = [
    { quote: 'Comprei um par para corrida e a entrega foi super rápida. Conforto incrível.', who: 'Marina Silva', stars: '★★★★★' },
    { quote: 'Atendimento excelente e produto original. Recomendo para quem busca estilo.', who: 'Lucas Ferreira', stars: '★★★★☆' },
    { quote: 'Parcelamento facilitado e qualidade no material. Uso no dia a dia sem problemas.', who: 'Ana Costa', stars: '★★★★★' }
  ]

  return (
    <div className="home-page">
      <section className="hero-section container">
        <div className="hero-content">
          <h1 className="hero-title">Encontre seu próximo par de tênis urbanos</h1>
          <p className="hero-subtitle">Estilo, conforto e performance na medida certa — entregue rápido na sua porta.</p>
          <Link className="btn primary" to="/products">Ver Produtos</Link>
        </div>
        <div className="hero-media" aria-hidden="true">
          <img src={hero} alt="Ilustração de tênis Urban Sneakers" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* Sobre movido para /about */}

      {/* Produtos movidos para /products */}

      <section className="testimonials container">
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <Testimonial key={t.who} {...t} />
          ))}
        </div>
      </section>

      {/* Contato movido para /contact */}
    </div>
  )
}


