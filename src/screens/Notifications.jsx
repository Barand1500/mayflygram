import { useState, useEffect } from 'react'
import NotificationItem from '../components/NotificationItem'
import { fakeNotifications } from '../data/fakeNotifications'

function Notifications() {
  const [notifications, setNotifications] = useState(fakeNotifications)

  useEffect(() => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    )
  }, [])

  const handleFollowBack = (id) => {
    console.log('Followed back:', id)
  }

  return (
    <div className="notifications">
      <div className="header">
        <h1>Notifications</h1>
      </div>
      <div className="notifications-list">
        {notifications.map(notification => (
          <NotificationItem 
            key={notification.id} 
            notification={notification}
            onFollowBack={handleFollowBack}
          />
        ))}
      </div>
    </div>
  )
}

export default Notifications
