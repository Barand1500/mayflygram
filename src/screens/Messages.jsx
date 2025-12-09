import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { 
  analyzeSentiment, 
  detectMessageType, 
  generateSmartResponse, 
  addBotPersonality,
  updateUserMemory 
} from '../utils/aiEngine'

function Messages() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Merhaba! Ben gelişmiş AI botum 🤖', sender: 'bot', timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [userMessageCount, setUserMessageCount] = useState(0)
  const [topicMessageCount, setTopicMessageCount] = useState(0)
  const lastMessageTimeRef = useRef(Date.now())
  const inactivityTimerRef = useRef(null)
  const conversationHistoryRef = useRef([])

  useEffect(() => {
    const checkInactivity = () => {
      const now = Date.now()
      const timeSinceLastMessage = now - lastMessageTimeRef.current
      
      if (timeSinceLastMessage >= 10000 && messages.length > 1) {
        const timestamp = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        setMessages(prev => [...prev, {
          id: Date.now(),
          text: 'Burada mısın? 😄',
          sender: 'bot',
          timestamp
        }])
        lastMessageTimeRef.current = now
      }
    }

    inactivityTimerRef.current = setInterval(checkInactivity, 1000)
    return () => clearInterval(inactivityTimerRef.current)
  }, [messages.length])

  const getBotResponse = useCallback((userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('foto') && lowerMessage.includes('nasıl')) {
      return 'Fotoğrafı analiz ediyorum... Çok güzel görünüyor! Profesyonel bir çekim gibi 📷✨'
    }
    
    if (lowerMessage.includes('selam') || lowerMessage.includes('merhaba')) {
      return 'Selam! Nasılsın? 😊'
    }
    if (lowerMessage.includes('yardım') || lowerMessage.includes('help')) {
      return 'Tabii, nasıl yardımcı olabilirim? 💡'
    }
    if (lowerMessage.includes('kimsin')) {
      return 'Ben MayflySystems yapay zeka asistanıyım! 🤖'
    }
    
    const sentiment = analyzeSentiment(userMessage)
    const messageType = detectMessageType(userMessage)
    
    conversationHistoryRef.current.push({
      message: userMessage,
      sentiment,
      type: messageType
    })
    
    if (conversationHistoryRef.current.length > 10) {
      conversationHistoryRef.current.shift()
    }
    
    updateUserMemory('current_user', {
      lastMood: sentiment,
      conversationHistory: conversationHistoryRef.current
    })
    
    return generateSmartResponse(userMessage, messageType, sentiment, conversationHistoryRef.current)
  }, [])

  const handleSend = useCallback(() => {
    if (!inputText.trim()) return

    const timestamp = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    const newCount = userMessageCount + 1
    const newTopicCount = topicMessageCount + 1
    setUserMessageCount(newCount)
    setTopicMessageCount(newTopicCount)
    lastMessageTimeRef.current = Date.now()

    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')

    if (newTopicCount >= 5) {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const botTimestamp = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: 'Şöyle bi konu değişikliği yapalım mı? 😄 Beni çok sıktın ama tatlı şekilde 💀',
          sender: 'bot',
          timestamp: botTimestamp
        }])
        setTopicMessageCount(0)
        lastMessageTimeRef.current = Date.now()
      }, 1000)
      return
    }

    if (newCount >= 3) {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const botTimestamp = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: 'Vay, bugün çok konuşkansın 😂',
          sender: 'bot',
          timestamp: botTimestamp
        }])
        setUserMessageCount(0)
        lastMessageTimeRef.current = Date.now()
      }, 1000)
      return
    }

    const botReply = getBotResponse(inputText)
    if (botReply) {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const botTimestamp = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        const finalReply = addBotPersonality(botReply)
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: finalReply,
          sender: 'bot',
          timestamp: botTimestamp
        }])
        lastMessageTimeRef.current = Date.now()
      }, 1200)
    }
  }, [inputText, userMessageCount, topicMessageCount, getBotResponse])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="messages">
      <div className="header">
        <h1>Messages</h1>
      </div>
      <div className="chat-container">
        <div className="chat-header">
          <img src="https://i.pravatar.cc/150?img=10" alt="Bot" className="avatar" />
          <span className="chat-name">AI Bot</span>
        </div>
        <div className="messages-list">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-bubble">
                {message.text}
                <span className="message-time">{message.timestamp}</span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="message-bubble typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Mesaj yaz..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSend}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Messages
