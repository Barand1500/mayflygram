import { memo } from 'react'

const StoryBar = memo(({ stories, onStoryClick }) => {
  return (
    <div className="story-bar">
      <div className="story-list">
        {stories.map(story => (
          <div 
            key={story.id} 
            className="story-item"
            onClick={() => onStoryClick(story)}
          >
            <div className="story-avatar-wrapper">
              <img src={story.avatar} alt={story.username} />
            </div>
            <span className="story-username">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  )
})

StoryBar.displayName = 'StoryBar'

export default StoryBar
