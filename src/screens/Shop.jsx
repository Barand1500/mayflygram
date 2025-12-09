import { useState, useMemo, useCallback } from 'react'
import { products, productCategories, getProductsByCategory } from '../data/shopData'
import ProductCard from '../components/ProductCard'
import ProductDetailModal from '../components/ProductDetailModal'

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = useMemo(() => {
    return getProductsByCategory(selectedCategory)
  }, [selectedCategory])

  const handleProductClick = useCallback((product) => {
    setSelectedProduct(product)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  return (
    <div className="shop">
      <div className="shop-categories">
        {productCategories.map(category => (
          <button
            key={category.id}
            className={`category-chip ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Shop
