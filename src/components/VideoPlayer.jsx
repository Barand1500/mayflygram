import { memo, useRef, useEffect, useState } from 'react'

const VideoPlayer = memo(({ video, isActive }) => {
  const videoRef = useRef(null)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(video.likes)
  const [showHeartAnimation, setShowHeartAnimation] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isActive])

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
    <div className="video-container">
      <video
        ref={videoRef}
        src={video.videoUrl}
        loop
        playsInline
        className="reel-video"
        onDoubleClick={handleDoubleClick}
      />
      
      {showHeartAnimation && (
        <div className="video-heart-animation">❤️</div>
      )}

      <div className="video-info">
        <div className="video-header">
          <img src={video.avatar} alt={video.username} />
          <span>{video.username}</span>
        </div>
        <p className="video-description">{video.description}</p>
      </div>

      <div className="video-actions">
        <button className="video-action-btn" onClick={handleLike}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill={liked ? "#ff3b30" : "none"}>
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" 
              stroke={liked ? "#ff3b30" : "white"} 
              strokeWidth="2"
            />
          </svg>
          <span>{likeCount.toLocaleString()}</span>
        </button>

        <button className="video-action-btn">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="white" strokeWidth="2"/>
          </svg>
          <span>{video.comments}</span>
        </button>

        <button className="video-action-btn">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="18" cy="5" r="3" stroke="white" strokeWidth="2"/>
            <circle cx="6" cy="12" r="3" stroke="white" strokeWidth="2"/>
            <circle cx="18" cy="19" r="3" stroke="white" strokeWidth="2"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="white" strokeWidth="2"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  )
})

VideoPlayer.displayName = 'VideoPlayer'

export default VideoPlayer
