import React from 'react'
import '../styles/home.css'

export default function About() {
  return (
    <div className="about-page container">
      <section className="about-hero">
        <h1 className="section-title">Sobre a Urban Sneakers</h1>
        <p className="lead">A Urban Sneakers nasceu com a missão de oferecer tênis urbanos que combinam estilo, conforto e durabilidade. Trabalhamos com fornecedores certificados e buscamos reduzir o impacto ambiental em nossas embalagens.</p>
      </section>

      <section className="differentials">
        <h2 className="section-subtitle">Nossos diferenciais</h2>
        <div className="cards">
          <article className="card" tabIndex={0}>
            <div className="card-icon" aria-hidden>🚚</div>
            <h3>Entrega rápida</h3>
            <p>Logística otimizada para receber seus tênis em poucos dias.</p>
          </article>

          <article className="card" tabIndex={0}>
            <div className="card-icon" aria-hidden>🔒</div>
            <h3>Compra segura</h3>
            <p>Pagamento criptografado e proteção contra fraudes.</p>
          </article>

          <article className="card" tabIndex={0}>
            <div className="card-icon" aria-hidden>✅</div>
            <h3>Produtos originais</h3>
            <p>Trabalhamos somente com fornecedores certificados.</p>
          </article>

          <article className="card" tabIndex={0}>
            <div className="card-icon" aria-hidden>💳</div>
            <h3>Parcelamento em até 12x</h3>
            <p>Condições flexíveis para facilitar sua compra.</p>
          </article>
        </div>
      </section>
    </div>
  )
}
