function QuickReplyButtons({ onReply }) {
  const quickReplies = [
    { id: 1, text: '👍', label: 'Like' },
    { id: 2, text: '😂', label: 'Haha' },
    { id: 3, text: '❤️', label: 'Love' },
    { id: 4, text: '🔥', label: 'Fire' },
    { id: 5, text: 'Teşekkürler', label: 'Thanks' },
    { id: 6, text: 'Tamam', label: 'OK' }
  ]

  return (
    <div className="quick-reply-container">
      <div className="quick-reply-buttons">
        {quickReplies.map(reply => (
          <button
            key={reply.id}
            className="quick-reply-btn"
            onClick={() => onReply(reply.text)}
            title={reply.label}
          >
            {reply.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickReplyButtons
