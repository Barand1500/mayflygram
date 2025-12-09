import { useState, useMemo } from 'react'

function Saved() {
  const [savedPosts] = useState([
    {
      id: 1,
      image: 'https://picsum.photos/400/400?random=101',
      type: 'post'
    },
    {
      id: 2,
      image: 'https://picsum.photos/400/400?random=102',
      type: 'post'
    },
    {
      id: 3,
      image: 'https://picsum.photos/400/400?random=103',
      type: 'reel'
    },
    {
      id: 4,
      image: 'https://picsum.photos/400/400?random=104',
      type: 'post'
    },
    {
      id: 5,
      image: 'https://picsum.photos/400/400?random=105',
      type: 'reel'
    },
    {
      id: 6,
      image: 'https://picsum.photos/400/400?random=106',
      type: 'post'
    }
  ])

  const [selectedTab, setSelectedTab] = useState('all')

  const filteredPosts = useMemo(() => {
    if (selectedTab === 'all') return savedPosts
    return savedPosts.filter(p => p.type === selectedTab)
  }, [selectedTab, savedPosts])

  return (
    <div className="saved">
      <div className="header-v5">
        <h1 className="logo-v5">Saved</h1>
      </div>

      <div className="saved-tabs">
        <button 
          className={selectedTab === 'all' ? 'active' : ''}
          onClick={() => setSelectedTab('all')}
        >
          All
        </button>
        <button 
          className={selectedTab === 'post' ? 'active' : ''}
          onClick={() => setSelectedTab('post')}
        >
          Posts
        </button>
        <button 
          className={selectedTab === 'reel' ? 'active' : ''}
          onClick={() => setSelectedTab('reel')}
        >
          Reels
        </button>
      </div>

      <div className="saved-grid">
        {filteredPosts.map(post => (
          <div key={post.id} className="saved-item">
            <img src={post.image} alt="Saved" />
            {post.type === 'reel' && (
              <div className="reel-indicator">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M2.83 5.04L8 10.2V19c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-8.8l5.17-5.16c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0L12 8.55 5.66 2.21c-.78-.78-2.05-.78-2.83 0-.78.78-.78 2.05 0 2.83z"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Saved
