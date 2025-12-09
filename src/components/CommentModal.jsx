import { useState } from 'react'

function CommentModal({ post, onClose }) {
  const [comments, setComments] = useState(post.comments)
  const [newComment, setNewComment] = useState('')

  const handleAddComment = () => {
    if (!newComment.trim()) return

    const comment = {
      id: Date.now(),
      username: 'mayfly_user',
      text: newComment
    }

    setComments([...comments, comment])
    setNewComment('')
  }

  return (
    <div className="comment-modal" onClick={onClose}>
      <div className="comment-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="comment-modal-header">
          <h3>Comments</h3>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        <div className="comment-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <span className="comment-username">{comment.username}</span>
              <span className="comment-text">{comment.text}</span>
            </div>
          ))}
        </div>
        <div className="comment-input-wrapper">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
          />
          <button onClick={handleAddComment}>Post</button>
        </div>
      </div>
    </div>
  )
}

export default CommentModal
