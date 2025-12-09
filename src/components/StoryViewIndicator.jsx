import { useState } from 'react'

function StoryViewIndicator({ viewers = [], totalViews = 0 }) {
  const [showViewers, setShowViewers] = useState(false)

  return (
    <div className="story-view-indicator">
      <button 
        className="view-count-btn"
        onClick={() => setShowViewers(!showViewers)}
      >
        <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        <span>{totalViews.toLocaleString()}</span>
      </button>

      {showViewers && (
        <div className="viewers-list">
          <div className="viewers-header">
            <h3>Viewers</h3>
            <button onClick={() => setShowViewers(false)}>×</button>
          </div>
          <div className="viewers-content">
            {viewers.map(viewer => (
              <div key={viewer.id} className="viewer-item">
                <img src={viewer.avatar} alt={viewer.username} />
                <span>{viewer.username}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default StoryViewIndicator
