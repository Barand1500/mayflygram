import { useState } from 'react'

function ZoomModal({ imageUrl, onClose }) {
  const [scale, setScale] = useState(1)

  const handleWheel = (e) => {
    e.preventDefault()
    const delta = e.deltaY * -0.001
    setScale(prev => Math.min(Math.max(1, prev + delta), 3))
  }

  return (
    <div className="zoom-modal-overlay" onClick={onClose}>
      <div 
        className="zoom-modal-content"
        onClick={e => e.stopPropagation()}
        onWheel={handleWheel}
      >
        <button className="zoom-close-btn" onClick={onClose}>
          <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
            <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <img 
          src={imageUrl} 
          alt="Zoomed"
          className="zoom-image"
          style={{ transform: `scale(${scale})` }}
          draggable={false}
        />

        <div className="zoom-controls">
          <button 
            className="zoom-btn"
            onClick={() => setScale(prev => Math.max(1, prev - 0.2))}
          >
            −
          </button>
          <span className="zoom-level">{Math.round(scale * 100)}%</span>
          <button 
            className="zoom-btn"
            onClick={() => setScale(prev => Math.min(3, prev + 0.2))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ZoomModal
