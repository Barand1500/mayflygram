import React from 'react'

function TopBar({ onMessageClick, onNotificationClick, hasUnread = false }) {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <h1 className="app-logo">Instagram</h1>
        
        <div className="top-bar-actions">
          <button 
            className="top-bar-btn"
            onClick={onMessageClick}
            aria-label="Messages"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              />
            </svg>
          </button>

          <button 
            className="top-bar-btn notification-btn"
            onClick={onNotificationClick}
            aria-label="Notifications"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
              />
            </svg>
            {hasUnread && <span className="notification-dot-top" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(TopBar)
