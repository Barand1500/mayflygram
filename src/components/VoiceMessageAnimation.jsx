import { useState, useEffect } from 'react'

function VoiceMessageAnimation({ isRecording, duration = 0 }) {
  const [waveHeights, setWaveHeights] = useState([0.3, 0.5, 0.7, 0.4, 0.6, 0.8, 0.5, 0.3])

  useEffect(() => {
    if (!isRecording) return

    const interval = setInterval(() => {
      setWaveHeights(prev => prev.map(() => Math.random() * 0.8 + 0.2))
    }, 100)

    return () => clearInterval(interval)
  }, [isRecording])

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="voice-message-animation">
      <div className="voice-wave">
        {waveHeights.map((height, idx) => (
          <div
            key={idx}
            className="wave-bar"
            style={{
              height: `${height * 100}%`,
              animationDelay: `${idx * 0.1}s`
            }}
          />
        ))}
      </div>
      <span className="voice-duration">{formatDuration(duration)}</span>
    </div>
  )
}

export default VoiceMessageAnimation
