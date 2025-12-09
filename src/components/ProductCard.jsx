import React from 'react'
import { useLazyLoad } from '../hooks/useCustomHooks'

function ProductCard({ product, onClick }) {
  const [ref, isVisible] = useLazyLoad(0.1)

  return (
    <div 
      ref={ref}
      className="product-card"
      onClick={onClick}
    >
      <div className="product-image-wrapper">
        {isVisible ? (
          <img 
            src={product.thumbnail} 
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        ) : (
          <div className="product-image-skeleton" />
        )}
        {product.seller.verified && (
          <div className="verified-seller-badge">✓</div>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        
        <div className="product-footer">
          <span className="product-price">
            {product.currency}{product.price}
          </span>
          
          <div className="product-rating">
            <span className="star">⭐</span>
            <span>{product.rating}</span>
            <span className="reviews-count">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProductCard)
