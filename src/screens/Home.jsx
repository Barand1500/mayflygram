import { useState, useMemo } from 'react'
import EnhancedPost from '../components/EnhancedPost'
import StoryBar from '../components/StoryBar'
import StoryViewer from '../components/StoryViewer'
import { fakeStories } from '../data/fakeStories'
import { enhancedPosts } from '../data/enhancedData'

function Home() {
  const [currentStory, setCurrentStory] = useState(null)

  const memoizedPosts = useMemo(() => enhancedPosts, [])
  const memoizedStories = useMemo(() => fakeStories, [])

  return (
    <div className="home">
      <div className="header-v5">
        <h1 className="logo-v5">Instagram</h1>
      </div>
      <StoryBar stories={memoizedStories} onStoryClick={setCurrentStory} />
      <div className="feed-v5">
        {memoizedPosts.map(post => (
          <EnhancedPost key={post.id} post={post} />
        ))}
      </div>
      {currentStory && (
        <StoryViewer story={currentStory} onClose={() => setCurrentStory(null)} />
      )}
    </div>
  )
}

export default Home
