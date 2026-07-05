import React, { useState } from 'react'
import '../styles/home.css'

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const payload = Object.fromEntries(form.entries())

    setFormStatus('sending')
    // Simula envio (substituir por fetch real se necessário)
    setTimeout(() => {
      setFormStatus('success')
      e.target.reset()
      setTimeout(() => setFormStatus(null), 3500)
    }, 900)
  }

  return (
    <div className="contact-page container">
      <section>
        <h1 className="section-title">Contato</h1>
        <p className="lead">Tem alguma dúvida ou precisa de suporte? Envie sua mensagem e retornaremos em até 48 horas.</p>

        <form className="contact-form" onSubmit={handleSubmit} aria-label="Formulário de contato">
          <label>
            Nome
            <input name="name" type="text" placeholder="Seu nome" required />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="seu@email.com" required />
          </label>

          <label>
            Mensagem
            <textarea name="message" rows={5} placeholder="Escreva sua mensagem" required />
          </label>

          <div className="form-actions">
            <button className="btn primary" type="submit">Enviar</button>
            {formStatus === 'sending' && <span className="form-note">Enviando...</span>}
            {formStatus === 'success' && <span className="form-success">Mensagem enviada com sucesso!</span>}
          </div>
        </form>
      </section>
    </div>
  )
}
