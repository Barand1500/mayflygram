import { useEffect } from 'react'

function StoryViewer({ story, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 4000)

    return () => clearTimeout(timer)
  }, [onClose])

  if (!story) return null

  return (
    <div className="story-viewer" onClick={onClose}>
      <div className="story-content">
        <div className="story-header">
          <img src={story.avatar} alt={story.username} className="story-header-avatar" />
          <span className="story-header-username">{story.username}</span>
        </div>
        <img src={story.image} alt="Story" className="story-image" />
        <div className="story-close">
          Tap to close
        </div>
      </div>
    </div>
  )
}

export default StoryViewer
