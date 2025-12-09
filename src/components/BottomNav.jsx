import React from 'react'

function BottomNav({ currentPage, onPageChange }) {
  const navItems = [
    { 
      id: 'home', 
      label: 'Home',
      icon: (
        <svg width="24" height="24" fill={currentPage === 'home' ? 'currentColor' : 'none'} viewBox="0 0 24 24">
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          />
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 22V12h6v10"
          />
        </svg>
      )
    },
    { 
      id: 'explore', 
      label: 'Explore',
      icon: (
        <svg width="24" height="24" fill={currentPage === 'explore' ? 'currentColor' : 'none'} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-4.35-4.35"/>
        </svg>
      )
    },
    { 
      id: 'reels', 
      label: 'Reels',
      icon: (
        <svg width="24" height="24" fill={currentPage === 'reels' ? 'currentColor' : 'none'} viewBox="0 0 24 24">
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M2.83 5.04L8 10.2V19c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-8.8l5.17-5.16c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0L12 8.55 5.66 2.21c-.78-.78-2.05-.78-2.83 0-.78.78-.78 2.05 0 2.83z"
          />
        </svg>
      )
    },
    { 
      id: 'shop', 
      label: 'Shop',
      icon: (
        <svg width="24" height="24" fill={currentPage === 'shop' ? 'currentColor' : 'none'} viewBox="0 0 24 24">
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
          />
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M3 6h18M16 10a4 4 0 0 1-8 0"
          />
        </svg>
      )
    },
    { 
      id: 'profile', 
      label: 'Profile',
      icon: (
        <svg width="24" height="24" fill={currentPage === 'profile' ? 'currentColor' : 'none'} viewBox="0 0 24 24">
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
          />
        </svg>
      )
    }
  ]

  return (
    <div className="bottom-nav">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`bottom-nav-btn ${currentPage === item.id ? 'active' : ''}`}
          onClick={() => onPageChange(item.id)}
          aria-label={item.label}
        >
          {item.icon}
        </button>
      ))}
    </div>
  )
}

export default React.memo(BottomNav)
