// Shop/Product Modeli
export const products = [
  {
    id: 1,
    name: 'Summer Vibes T-Shirt',
    brand: 'Urban Style',
    price: 29.99,
    currency: '$',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'Clothing',
    description: 'Premium quality cotton t-shirt with unique summer design',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy'],
    inStock: true,
    rating: 4.7,
    reviews: 234,
    tags: ['#fashion', '#tshirt', '#summer'],
    seller: {
      id: 101,
      name: 'Urban Style Official',
      verified: true,
      rating: 4.8
    }
  },
  {
    id: 2,
    name: 'Wireless Earbuds Pro',
    brand: 'TechSound',
    price: 89.99,
    currency: '$',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600',
      'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400',
    category: 'Electronics',
    description: 'Premium wireless earbuds with active noise cancellation',
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Blue'],
    inStock: true,
    rating: 4.9,
    reviews: 1567,
    tags: ['#tech', '#earbuds', '#music'],
    seller: {
      id: 102,
      name: 'TechSound Store',
      verified: true,
      rating: 4.9
    }
  },
  {
    id: 3,
    name: 'Minimalist Backpack',
    brand: 'Travel Essentials',
    price: 59.99,
    currency: '$',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'Accessories',
    description: 'Sleek and functional backpack perfect for daily commute',
    sizes: ['Standard'],
    colors: ['Black', 'Gray', 'Navy'],
    inStock: true,
    rating: 4.6,
    reviews: 445,
    tags: ['#travel', '#backpack', '#minimalist'],
    seller: {
      id: 103,
      name: 'Travel Essentials Co',
      verified: false,
      rating: 4.5
    }
  },
  {
    id: 4,
    name: 'Yoga Mat Premium',
    brand: 'FitLife',
    price: 39.99,
    currency: '$',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    category: 'Sports',
    description: 'Non-slip yoga mat with extra cushioning',
    sizes: ['Standard'],
    colors: ['Purple', 'Blue', 'Pink'],
    inStock: true,
    rating: 4.8,
    reviews: 789,
    tags: ['#fitness', '#yoga', '#wellness'],
    seller: {
      id: 104,
      name: 'FitLife Store',
      verified: true,
      rating: 4.7
    }
  },
  {
    id: 5,
    name: 'Smart Watch Ultra',
    brand: 'WearTech',
    price: 299.99,
    currency: '$',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
    category: 'Electronics',
    description: 'Advanced smartwatch with health tracking features',
    sizes: ['42mm', '46mm'],
    colors: ['Black', 'Silver', 'Gold'],
    inStock: true,
    rating: 4.9,
    reviews: 2341,
    tags: ['#tech', '#smartwatch', '#fitness'],
    seller: {
      id: 105,
      name: 'WearTech Official',
      verified: true,
      rating: 4.9
    }
  },
  {
    id: 6,
    name: 'Leather Wallet',
    brand: 'Luxury Goods',
    price: 49.99,
    currency: '$',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400',
    category: 'Accessories',
    description: 'Genuine leather wallet with RFID protection',
    sizes: ['Standard'],
    colors: ['Brown', 'Black', 'Tan'],
    inStock: true,
    rating: 4.7,
    reviews: 567,
    tags: ['#fashion', '#wallet', '#leather'],
    seller: {
      id: 106,
      name: 'Luxury Goods Store',
      verified: false,
      rating: 4.6
    }
  }
]

export const productCategories = [
  { id: 1, name: 'All', icon: '🛍️' },
  { id: 2, name: 'Clothing', icon: '👕' },
  { id: 3, name: 'Electronics', icon: '📱' },
  { id: 4, name: 'Accessories', icon: '👜' },
  { id: 5, name: 'Sports', icon: '⚽' },
  { id: 6, name: 'Beauty', icon: '💄' },
  { id: 7, name: 'Home', icon: '🏠' }
]

export function getProductById(productId) {
  return products.find(p => p.id === productId)
}

export function getProductsByCategory(category) {
  if (category === 'All') return products
  return products.filter(p => p.category === category)
}

export function searchProducts(query) {
  const searchTerm = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(searchTerm) ||
    p.brand.toLowerCase().includes(searchTerm) ||
    p.description.toLowerCase().includes(searchTerm) ||
    p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}
