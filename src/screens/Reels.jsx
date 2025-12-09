import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import VideoPlayer from '../components/VideoPlayer'
import { fakeVideos } from '../data/fakeVideos'

function Reels() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [liked, setLiked] = useState({})
  const containerRef = useRef(null)

  const memoizedVideos = useMemo(() => fakeVideos, [])

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop
      const windowHeight = window.innerHeight
      const newIndex = Math.round(scrollTop / windowHeight)
      setCurrentIndex(newIndex)
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const handleLike = useCallback((videoId) => {
    setLiked(prev => ({...prev, [videoId]: !prev[videoId]}))
  }, [])

  return (
    <div className="reels-v5" ref={containerRef}>
      {memoizedVideos.map((video, index) => (
        <div key={video.id} className="reel-container-v5">
          <VideoPlayer 
            video={video}
            isActive={index === currentIndex}
          />
          
          <div className="reel-overlay-v5">
            <div className="reel-top-v5">
              <span className="reel-title-v5">{video.title || 'Reels'}</span>
            </div>

            <div className="reel-bottom-v5">
              <div className="reel-user-info-v5">
                <img src={video.avatar} alt={video.username} className="reel-avatar-v5" />
                <span className="reel-username-v5">{video.username}</span>
                <button className="follow-btn-reel">Follow</button>
              </div>

              <div className="reel-music-bar-v5">
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
                <div className="music-text-v5">
                  <span>{video.music || 'Original Audio'}</span>
                </div>
              </div>
            </div>

            <div className="reel-actions-v5">
              <button 
                className={`reel-action-btn-v5 ${liked[video.id] ? 'liked' : ''}`}
                onClick={() => handleLike(video.id)}
              >
                <svg width="32" height="32" fill={liked[video.id] ? '#ff3040' : 'white'} viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>{liked[video.id] ? (video.likes + 1) : video.likes}</span>
              </button>

              <button className="reel-action-btn-v5">
                <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
                <span>{video.comments || 0}</span>
              </button>

              <button className="reel-action-btn-v5">
                <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              </button>

              <button className="reel-action-btn-v5">
                <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Reels
