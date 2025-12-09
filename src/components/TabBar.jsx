function TabBar({ currentPage, onPageChange, hasUnreadNotifications }) {
  return (
    <div className="tab-bar">
      <button 
        className={currentPage === 'home' ? 'active' : ''} 
        onClick={() => onPageChange('home')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
      
      <button 
        className={currentPage === 'reels' ? 'active' : ''} 
        onClick={() => onPageChange('reels')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <polygon points="10,8 16,12 10,16" fill="currentColor"/>
        </svg>
      </button>

      <button className="add-button" onClick={() => onPageChange('settings')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
      
      <button 
        className={`notifications-button ${currentPage === 'notifications' ? 'active' : ''}`}
        onClick={() => onPageChange('notifications')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2"/>
        </svg>
        {hasUnreadNotifications && <span className="notification-dot"></span>}
      </button>
      
      <button 
        className={currentPage === 'messages' ? 'active' : ''} 
        onClick={() => onPageChange('messages')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
    </div>
  )
}

export default TabBar
