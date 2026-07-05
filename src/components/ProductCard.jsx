import React, { useState, useEffect } from 'react'
import placeholder from '../assets/placeholder-shoe.svg'

export default function ProductCard({ image, alt, name, brand, desc, price }) {
  const [src, setSrc] = useState(image)

  useEffect(() => {
    setSrc(image)
  }, [image])

  return (
    <article className="product-card" tabIndex={0}>
      <div className="product-image">
        <img
          src={src || placeholder}
          alt={alt || name}
          loading="lazy"
          decoding="async"
          onError={() => setSrc(placeholder)}
        />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="brand">Marca: {brand}</p>
        <p className="desc">{desc}</p>
        <div className="product-meta">
          <span className="price">{price}</span>
          <button className="btn buy" aria-label={`Comprar ${name}`}>Comprar</button>
        </div>
      </div>
    </article>
  )
}
