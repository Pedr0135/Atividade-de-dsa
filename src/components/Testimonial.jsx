import React from 'react'

export default function Testimonial({ quote, who, stars }) {
  return (
    <blockquote className="testimonial">
      <p className="quote">{`"${quote}"`}</p>
      <footer className="who">— {who} <span className="stars" aria-hidden>{stars}</span></footer>
    </blockquote>
  )
}
