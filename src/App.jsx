import { useState, useCallback } from 'react'
import Home from './screens/Home'
import Messages from './screens/Messages'
import Profile from './screens/Profile'
import Notifications from './screens/Notifications'
import Reels from './screens/Reels'
import Settings from './screens/Settings'
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Shop from './screens/Shop'
import TopBar from './components/TopBar'
import BottomNav from './components/BottomNav'
import ThemeSwitcher from './components/ThemeSwitcher'
import { notifications } from './data/realisticData'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(
    notifications.some(n => !n.isRead)
  )

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page)
    if (page === 'notifications') {
      setHasUnreadNotifications(false)
    }
  }, [])

  const handleMessageClick = useCallback(() => {
    setCurrentPage('messages')
  }, [])

  const handleNotificationClick = useCallback(() => {
    setCurrentPage('notifications')
    setHasUnreadNotifications(false)
  }, [])

  return (
    <div className="app">
      <ThemeSwitcher />
      
      {currentPage !== 'reels' && (
        <TopBar 
          onMessageClick={handleMessageClick}
          onNotificationClick={handleNotificationClick}
          hasUnread={hasUnreadNotifications}
        />
      )}
      
      <div className="container">
        {currentPage === 'home' && <Home />}
        {currentPage === 'explore' && <Explore />}
        {currentPage === 'reels' && <Reels />}
        {currentPage === 'shop' && <Shop />}
        {currentPage === 'profile' && <Profile />}
        {currentPage === 'messages' && <Messages />}
        {currentPage === 'notifications' && <Notifications />}
        {currentPage === 'settings' && <Settings />}
        {currentPage === 'saved' && <Saved />}
      </div>
      
      <BottomNav 
        currentPage={currentPage} 
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default App
