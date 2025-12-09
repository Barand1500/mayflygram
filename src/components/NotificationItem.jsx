import { memo, useState } from 'react'

const NotificationItem = memo(({ notification, onFollowBack }) => {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollow = () => {
    setIsFollowing(true)
    onFollowBack(notification.id)
  }

  return (
    <div className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
      <img src={notification.avatar} alt={notification.username} className="notification-avatar" />
      <div className="notification-content">
        <span className="notification-username">{notification.username}</span>
        <span className="notification-text"> {notification.text}</span>
        <span className="notification-time">{notification.time}</span>
      </div>
      {notification.type === 'follow' && (
        <button 
          className={`follow-back-btn ${isFollowing ? 'following' : ''}`}
          onClick={handleFollow}
          disabled={isFollowing}
        >
          {isFollowing ? 'Following' : 'Follow Back'}
        </button>
      )}
    </div>
  )
})

NotificationItem.displayName = 'NotificationItem'

export default NotificationItem
