import { useState, useMemo } from 'react'

function Profile() {
  const [selectedTab, setSelectedTab] = useState('posts')

  const posts = useMemo(() => [
    { id: 1, type: 'post', image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400' },
    { id: 2, type: 'post', image: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=400' },
    { id: 3, type: 'post', image: 'https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=400' },
    { id: 4, type: 'post', image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400' },
    { id: 5, type: 'post', image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?w=400' },
    { id: 6, type: 'post', image: 'https://images.unsplash.com/photo-1682687221175-fd40bbafe6ca?w=400' }
  ], [])

  const reels = useMemo(() => [
    { id: 1, type: 'reel', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400' },
    { id: 2, type: 'reel', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400' }
  ], [])

  const tagged = useMemo(() => [
    { id: 1, type: 'post', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400' }
  ], [])

  const highlights = useMemo(() => [
    { id: 1, title: 'Travel', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200' },
    { id: 2, title: 'Coding', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200' },
    { id: 3, title: 'Life', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=200' }
  ], [])

  const getContent = useMemo(() => {
    if (selectedTab === 'posts') return posts
    if (selectedTab === 'reels') return reels
    if (selectedTab === 'tagged') return tagged
    return []
  }, [selectedTab, posts, reels, tagged])

  return (
    <div className="profile">
      <div className="header">
        <h1>Profile</h1>
      </div>
      
      <div className="profile-cover">
        <img 
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800" 
          alt="Cover" 
        />
      </div>

      <div className="profile-info">
        <img 
          src="https://i.pravatar.cc/150?img=8" 
          alt="Profile" 
          className="profile-avatar" 
        />
        <h2 className="profile-username">mayfly_user</h2>
        <p className="profile-bio">
          Living the moment.<br />
          MayflySystems Founder. 🚀
        </p>
        <button className="follow-btn">Edit Profile</button>
        
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-number">24</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat">
            <span className="stat-number">120</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-number">87</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      </div>

      <div className="highlights-section">
        {highlights.map(highlight => (
          <div key={highlight.id} className="highlight-item">
            <div className="highlight-circle">
              <img src={highlight.image} alt={highlight.title} />
            </div>
            <span className="highlight-title">{highlight.title}</span>
          </div>
        ))}
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-btn ${selectedTab === 'posts' ? 'active' : ''}`}
          onClick={() => setSelectedTab('posts')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="13" width="7" height="7" rx="1"/>
            <rect x="13" y="3" width="7" height="7" rx="1"/>
            <rect x="13" y="13" width="7" height="7" rx="1"/>
          </svg>
        </button>
        <button 
          className={`tab-btn ${selectedTab === 'reels' ? 'active' : ''}`}
          onClick={() => setSelectedTab('reels')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.83 5.04L8 10.2V19c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-8.8l5.17-5.16c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0L12 8.55 5.66 2.21c-.78-.78-2.05-.78-2.83 0-.78.78-.78 2.05 0 2.83z"/>
          </svg>
        </button>
        <button 
          className={`tab-btn ${selectedTab === 'tagged' ? 'active' : ''}`}
          onClick={() => setSelectedTab('tagged')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </button>
      </div>

      <div className="photo-grid">
        {getContent.map((item) => (
          <div key={item.id} className="grid-item">
            <img src={item.image} alt={`${item.type} ${item.id}`} />
            {item.type === 'reel' && (
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

export default Profile
