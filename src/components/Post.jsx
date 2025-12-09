import { useState, memo } from 'react'
import CommentModal from './CommentModal'

const Post = memo(({ post }) => {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)
  const [showHeartAnimation, setShowHeartAnimation] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikeCount(likeCount - 1)
    } else {
      setLiked(true)
      setLikeCount(likeCount + 1)
    }
  }

  const handleDoubleClick = () => {
    if (!liked) {
      setLiked(true)
      setLikeCount(likeCount + 1)
    }
    setShowHeartAnimation(true)
    setTimeout(() => setShowHeartAnimation(false), 1000)
  }

  return (
    <div className="post">
      <div className="post-header">
        <img src={post.avatar} alt={post.username} className="avatar" />
        <span className="username">{post.username}</span>
      </div>
      <div className="post-image-wrapper" onDoubleClick={handleDoubleClick}>
        <img src={post.image} alt="Post" className="post-image" />
        {showHeartAnimation && (
          <div className="heart-animation">❤️</div>
        )}
      </div>
      <div className="post-actions">
        <button className="like-button" onClick={handleLike}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? "#ff3b30" : "none"}>
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" 
              stroke={liked ? "#ff3b30" : "currentColor"} 
              strokeWidth="2"
            />
          </svg>
        </button>
        <button className="comment-button" onClick={() => setShowComments(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      <div className="post-info">
        <span className="likes">{likeCount.toLocaleString()} likes</span>
        <button className="view-comments" onClick={() => setShowComments(true)}>
          View all {post.comments.length} comments
        </button>
      </div>
      {showComments && (
        <CommentModal post={post} onClose={() => setShowComments(false)} />
      )}
    </div>
  )
})

Post.displayName = 'Post'

export default Post
