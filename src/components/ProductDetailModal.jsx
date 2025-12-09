import { useState, useMemo } from 'react'

function ProductDetailModal({ product, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)

  const totalPrice = useMemo(() => {
    return (product.price * quantity).toFixed(2)
  }, [product.price, quantity])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-detail-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M6 18L18 6"/>
          </svg>
        </button>

        <div className="product-detail-images">
          <img 
            src={product.images[selectedImage]} 
            alt={product.name}
            className="main-product-image"
          />
          
          {product.images.length > 1 && (
            <div className="image-thumbnails">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="product-detail-info">
          <div className="product-header">
            <div>
              <h2 className="product-title">{product.name}</h2>
              <p className="product-brand-name">{product.brand}</p>
            </div>
            <div className="product-price-large">
              {product.currency}{totalPrice}
            </div>
          </div>

          <div className="product-rating-detail">
            <span className="stars">⭐ {product.rating}</span>
            <span className="review-count">({product.reviews} reviews)</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-options">
            <div className="option-group">
              <label>Size:</label>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Color:</label>
              <div className="color-options">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Quantity:</label>
              <div className="quantity-selector">
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span className="qty-display">{quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="product-tags">
            {product.tags.map((tag, idx) => (
              <span key={idx} className="product-tag">{tag}</span>
            ))}
          </div>

          <div className="seller-info">
            <div className="seller-avatar">
              <div className="seller-initial">{product.seller.name[0]}</div>
            </div>
            <div className="seller-details">
              <div className="seller-name">
                {product.seller.name}
                {product.seller.verified && <span className="verified-check">✓</span>}
              </div>
              <div className="seller-rating">⭐ {product.seller.rating} seller rating</div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              Add to Cart
            </button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailModal
