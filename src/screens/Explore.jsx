import { useState, useMemo } from 'react'
import { trendingTopics, exploreContent } from '../data/enhancedData'

function Explore() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const memoizedTrending = useMemo(() => trendingTopics, [])

  const getExploreItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return [...exploreContent.tech, ...exploreContent.nature, ...exploreContent.food]
    }
    return exploreContent[selectedCategory] || []
  }, [selectedCategory])

  return (
    <div className="explore">
      <div className="header-v5">
        <h1 className="logo-v5">Explore</h1>
      </div>

      <div className="trending-section">
        <h3>Trending</h3>
        <div className="trending-tags">
          {memoizedTrending.map(topic => (
            <div key={topic.id} className="trending-tag">
              <span className="tag-name">#{topic.tag}</span>
              <span className="tag-count">{topic.posts.toLocaleString()} posts</span>
            </div>
          ))}
        </div>
      </div>

      <div className="category-filter">
        <button 
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button 
          className={selectedCategory === 'tech' ? 'active' : ''}
          onClick={() => setSelectedCategory('tech')}
        >
          Tech
        </button>
        <button 
          className={selectedCategory === 'nature' ? 'active' : ''}
          onClick={() => setSelectedCategory('nature')}
        >
          Nature
        </button>
        <button 
          className={selectedCategory === 'food' ? 'active' : ''}
          onClick={() => setSelectedCategory('food')}
        >
          Food
        </button>
      </div>

      <div className="explore-grid">
        {getExploreItems.map(item => (
          <div key={item.id} className="explore-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="explore-overlay">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore
