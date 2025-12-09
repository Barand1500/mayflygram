import { memo, useState, useCallback } from 'react'
import CommentModal from './CommentModal'

const EnhancedPost = memo(({ post }) => {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)
  const [showHeartAnimation, setShowHeartAnimation] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleLike = useCallback(() => {
    if (liked) {
      setLiked(false)
      setLikeCount(prev => prev - 1)
    } else {
      setLiked(true)
      setLikeCount(prev => prev + 1)
    }
  }, [liked])

  const handleDoubleClick = useCallback(() => {
    if (!liked) {
      setLiked(true)
      setLikeCount(prev => prev + 1)
    }
    setShowHeartAnimation(true)
    setTimeout(() => setShowHeartAnimation(false), 1000)
  }, [liked])

  const handleNextImage = useCallback((e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => 
      prev === post.media.length - 1 ? 0 : prev + 1
    )
  }, [post.media.length])

  const handlePrevImage = useCallback((e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => 
      prev === 0 ? post.media.length - 1 : prev - 1
    )
  }, [post.media.length])

  return (
    <div className="enhanced-post">
      <div className="post-header-v5">
        <img src={post.user.avatar} alt={post.user.username} className="avatar-v5" />
        <div className="user-info-v5">
          <div className="username-wrapper">
            <span className="username-v5">{post.user.username}</span>
            {post.user.verified && <span className="verified-badge">✓</span>}
          </div>
          <span className="post-time">{post.createdAt}</span>
        </div>
      </div>

      <div className="post-media-wrapper" onDoubleClick={handleDoubleClick}>
        {post.media.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={handlePrevImage}>‹</button>
            <button className="carousel-btn next" onClick={handleNextImage}>›</button>
            <div className="carousel-indicators">
              {post.media.map((_, index) => (
                <span 
                  key={index} 
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </>
        )}
        <img 
          src={post.media[currentImageIndex]} 
          alt="Post" 
          className="post-image-v5"
        />
        {showHeartAnimation && (
          <div className="heart-animation-v5">❤️</div>
        )}
      </div>

      <div className="post-actions-v5">
        <div className="actions-left">
          <button className="action-btn-v5" onClick={handleLike}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill={liked ? "#ff3b30" : "none"}>
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" 
                stroke={liked ? "#ff3b30" : "currentColor"} 
                strokeWidth="1.8"
              />
            </svg>
          </button>
          <button className="action-btn-v5" onClick={() => setShowComments(true)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" 
                stroke="currentColor" 
                strokeWidth="1.8"
              />
            </svg>
          </button>
          <button className="action-btn-v5">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="1.8"/>
              <polygon points="22,2 15,22 11,13 2,9" stroke="currentColor" strokeWidth="1.8" fill="none"/>
            </svg>
          </button>
        </div>
        <button className="action-btn-v5" onClick={() => setSaved(!saved)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"}>
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" 
              stroke="currentColor" 
              strokeWidth="1.8"
            />
          </svg>
        </button>
      </div>

      <div className="post-info-v5">
        <span className="likes-v5">{likeCount.toLocaleString()} likes</span>
        <div className="caption-v5">
          <span className="caption-username">{post.user.username}</span>
          <span className="caption-text">{post.caption}</span>
        </div>
        <button className="view-comments-v5" onClick={() => setShowComments(true)}>
          View all {post.comments.length} comments
        </button>
      </div>

      {showComments && (
        <CommentModal post={post} onClose={() => setShowComments(false)} />
      )}
    </div>
  )
})

EnhancedPost.displayName = 'EnhancedPost'

export default EnhancedPost
