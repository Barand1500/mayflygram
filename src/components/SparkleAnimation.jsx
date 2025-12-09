import { useState } from 'react'

function SparkleAnimation({ x, y, onComplete }) {
  return (
    <div 
      className="sparkle-animation"
      style={{ left: x, top: y }}
      onAnimationEnd={onComplete}
    >
      {[...Array(8)].map((_, i) => (
        <div 
          key={i} 
          className="sparkle-particle"
          style={{
            '--angle': `${i * 45}deg`,
            '--delay': `${i * 0.05}s`
          }}
        />
      ))}
    </div>
  )
}

export default SparkleAnimation
