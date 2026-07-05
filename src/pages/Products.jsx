import React from 'react'
import ProductCard from '../components/ProductCard'
import '../styles/home.css'

const products = [
  {
    image: 'https://images.unsplash.com/photo-1519741498421-1cc4a5167e7a?auto=format&fit=crop&w=800&q=60',
    alt: 'Tênis Urban Runner',
    name: 'Urban Runner',
    brand: 'StreetLine',
    desc: 'Tênis leve, ideal para deslocamentos urbanos com amortecimento responsivo.',
    price: 'R$ 389,90'
  },
  {
    image: 'https://images.unsplash.com/photo-1600180758890-2b8f4f3f2b7c?auto=format&fit=crop&w=800&q=60',
    alt: 'Tênis City Flex',
    name: 'City Flex',
    brand: 'MetroFit',
    desc: 'Design minimalista com sola flexível para conforto diário.',
    price: 'R$ 319,00'
  },
  {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60',
    alt: 'Tênis Retro Wave',
    name: 'Retro Wave',
    brand: 'Heritage',
    desc: 'Homenagem aos clássicos com cabedal em camurça sintética.',
    price: 'R$ 429,50'
  },
  {
    image: 'https://images.unsplash.com/photo-1542293787938-c9e299b88059?auto=format&fit=crop&w=800&q=60',
    alt: 'Tênis Trail Urban',
    name: 'Trail Urban',
    brand: 'TerraMove',
    desc: 'Sola agressiva para tração extra, perfeita para trilhas urbanas leves.',
    price: 'R$ 459,00'
  },
  {
    image: 'https://images.unsplash.com/photo-1528701800484-4e8f6b9f6c63?auto=format&fit=crop&w=800&q=60',
    alt: 'Tênis Performance X',
    name: 'Performance X',
    brand: 'PeakPro',
    desc: 'Tecnologia de amortecimento para corridas urbanas e treinos.',
    price: 'R$ 499,90'
  },
  {
    image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60',
    alt: 'Tênis Casual Comfy',
    name: 'Casual Comfy',
    brand: 'DailySoul',
    desc: 'Estilo casual com palmilha macia para longas jornadas.',
    price: 'R$ 279,00'
  }
]

export default function Products() {
  return (
    <div className="products-page">
      <section className="products-section container">
        <h2 className="section-title">Nossos Produtos</h2>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>
    </div>
  )
}
