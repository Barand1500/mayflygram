// Smart DM Bot AI
// Gelişmiş sentiment analizi ve bağlam tabanlı cevap sistemi

const conversationMemory = new Map()

export function analyzeSentiment(message) {
  const text = message.toLowerCase()
  
  // Çok mutlu
  const veryHappy = ['harika', 'muhteşem', 'mükemmel', 'süper', 'amazing', 'perfect', 'love', '❤️', '😍', '🥰', '😊']
  if (veryHappy.some(word => text.includes(word))) {
    return { sentiment: 'very_happy', score: 0.9 }
  }
  
  // Mutlu
  const happy = ['güzel', 'iyi', 'teşekkür', 'sağol', 'thanks', 'good', 'nice', '😀', '😃', '👍']
  if (happy.some(word => text.includes(word))) {
    return { sentiment: 'happy', score: 0.7 }
  }
  
  // Üzgün
  const sad = ['üzgün', 'kötü', 'moralim bozuk', 'sad', 'bad', 'terrible', '😢', '😭', '☹️']
  if (sad.some(word => text.includes(word))) {
    return { sentiment: 'sad', score: -0.7 }
  }
  
  // Çok üzgün
  const verySad = ['berbat', 'korkunç', 'rezil', 'awful', 'horrible', 'worst', '💔']
  if (verySad.some(word => text.includes(word))) {
    return { sentiment: 'very_sad', score: -0.9 }
  }
  
  // Kızgın
  const angry = ['sinir', 'öfke', 'kızgın', 'angry', 'mad', 'furious', '😠', '😡', '🤬']
  if (angry.some(word => text.includes(word))) {
    return { sentiment: 'angry', score: -0.8 }
  }
  
  // Heyecanlı
  const excited = ['heyecan', 'sabırsız', 'excited', 'cant wait', '🤩', '🎉', '🔥']
  if (excited.some(word => text.includes(word))) {
    return { sentiment: 'excited', score: 0.85 }
  }
  
  return { sentiment: 'neutral', score: 0 }
}

export function detectMessageType(message) {
  const text = message.toLowerCase()
  
  // Soru
  if (text.includes('?') || text.startsWith('nasıl') || text.startsWith('ne') || 
      text.startsWith('kim') || text.startsWith('neden') || text.startsWith('how') || 
      text.startsWith('what') || text.startsWith('why') || text.startsWith('when')) {
    return 'question'
  }
  
  // Selamlama
  if (text.includes('merhaba') || text.includes('selam') || text.includes('hey') || 
      text.includes('hi') || text.includes('hello') || text.includes('günaydın') ||
      text.includes('good morning')) {
    return 'greeting'
  }
  
  // Veda
  if (text.includes('görüşürüz') || text.includes('bay') || text.includes('bye') || 
      text.includes('güle güle') || text.includes('hoşça kal')) {
    return 'farewell'
  }
  
  // Dertleşme
  if (text.includes('dert') || text.includes('sorun') || text.includes('problem') ||
      text.includes('yardım') || text.includes('help')) {
    return 'venting'
  }
  
  // Şaka
  if (text.includes('😂') || text.includes('🤣') || text.includes('haha') || 
      text.includes('lol') || text.includes('komik')) {
    return 'humor'
  }
  
  // Teknik
  if (text.includes('kod') || text.includes('code') || text.includes('program') ||
      text.includes('bug') || text.includes('hata')) {
    return 'tech'
  }
  
  // Motivasyon
  if (text.includes('motivasyon') || text.includes('ilham') || text.includes('motivation') ||
      text.includes('başar') || text.includes('hedef')) {
    return 'motivation'
  }
  
  // Bilgi talebi
  if (text.includes('anlat') || text.includes('bilgi') || text.includes('öğren') ||
      text.includes('tell me') || text.includes('explain')) {
    return 'info_request'
  }
  
  return 'casual'
}

export function generateSmartResponse(message, userId = 'default') {
  const sentiment = analyzeSentiment(message)
  const messageType = detectMessageType(message)
  
  // Konuşma geçmişini güncelle
  if (!conversationMemory.has(userId)) {
    conversationMemory.set(userId, {
      messages: [],
      lastSentiment: 'neutral',
      topics: [],
      interactionCount: 0
    })
  }
  
  const userContext = conversationMemory.get(userId)
  userContext.messages.push({ text: message, sentiment: sentiment.sentiment, type: messageType })
  userContext.lastSentiment = sentiment.sentiment
  userContext.interactionCount++
  
  // Mesaj tipine göre cevap üret
  let response = ''
  
  switch (messageType) {
    case 'greeting':
      response = generateGreeting(userContext)
      break
    case 'farewell':
      response = generateFarewell(userContext)
      break
    case 'question':
      response = generateAnswer(message, userContext)
      break
    case 'venting':
      response = generateSupportiveResponse(sentiment, userContext)
      break
    case 'humor':
      response = generateHumorResponse(userContext)
      break
    case 'tech':
      response = generateTechResponse(message, userContext)
      break
    case 'motivation':
      response = generateMotivationalResponse(userContext)
      break
    case 'info_request':
      response = generateInfoResponse(message, userContext)
      break
    default:
      response = generateCasualResponse(sentiment, userContext)
  }
  
  // Emojileri otomatik ekle
  response = addContextualEmojis(response, sentiment.sentiment)
  
  return response
}

function generateGreeting(context) {
  const greetings = [
    "Merhaba! Nasılsın?",
    "Hey! Ne haber?",
    "Selam! Bugün nasıl geçiyor?",
    "Merhaba! Seni görmek güzel",
    "Hey! Hoş geldin 👋"
  ]
  
  if (context.interactionCount > 5) {
    return "Yine merhaba! Her zaman konuşmak güzel 😊"
  }
  
  return greetings[Math.floor(Math.random() * greetings.length)]
}

function generateFarewell(context) {
  const farewells = [
    "Görüşürüz! İyi günler 👋",
    "Hoşça kal! Kendine iyi bak",
    "Bay bay! Sonra görüşürüz ✨",
    "Güle güle! Tekrar yazarsan sevinirim",
    "Görüşmek üzere! İyi akşamlar 🌙"
  ]
  return farewells[Math.floor(Math.random() * farewells.length)]
}

function generateAnswer(message, context) {
  const text = message.toLowerCase()
  
  if (text.includes('nasılsın') || text.includes('how are you')) {
    return "İyiyim teşekkür ederim! Sen nasılsın?"
  }
  
  if (text.includes('ne yapıyorsun') || text.includes('what are you doing')) {
    return "Seninle sohbet ediyorum işte 😊 Sen ne yapıyorsun?"
  }
  
  if (text.includes('ismin ne') || text.includes('what is your name')) {
    return "Ben bir AI asistanıyım, arkadaşın sayılırım 🤖✨"
  }
  
  return "İlginç bir soru! Düşünmem lazım biraz 🤔"
}

function generateSupportiveResponse(sentiment, context) {
  if (sentiment.score < 0) {
    return "Üzgün görünüyorsun. Konuşmak ister misin? Dinliyorum 💙"
  }
  return "Buradayım, her zaman konuşabilirsin benimle 💫"
}

function generateHumorResponse(context) {
  const responses = [
    "Hahaha güldürdün beni 😂",
    "Komiksin gerçekten! 🤣",
    "Bu iyiydi, beğendim 😄",
    "Haha senin gibi biri lazımdı 😆"
  ]
  return responses[Math.floor(Math.random() * responses.length)]
}

function generateTechResponse(message, context) {
  const responses = [
    "Kod yazmak bazen zor oluyor ama çok eğlenceli! 💻",
    "Bug'ları severim... demek istedim nefret ederim 🐛😅",
    "Programlama hayatın kendisi! Keep coding 🚀",
    "Stack Overflow en iyi arkadaşımızdır 😄"
  ]
  return responses[Math.floor(Math.random() * responses.length)]
}

function generateMotivationalResponse(context) {
  const responses = [
    "Sen yaparsın! İnan kendine 💪",
    "Her şey mümkün, sadece devam et! ✨",
    "Başarı senin! Pes etme 🔥",
    "Harika gidiyorsun, böyle devam! 🌟",
    "Hedeflerine ulaşacaksın, eminim! 🎯"
  ]
  return responses[Math.floor(Math.random() * responses.length)]
}

function generateInfoResponse(message, context) {
  return "İlginç bir konu! Ne öğrenmek istiyorsun? 📚"
}

function generateCasualResponse(sentiment, context) {
  if (sentiment.score > 0.5) {
    const happy = [
      "Harika! Mutlu olmak güzel 😊",
      "Senin enerjin çok güzel! ✨",
      "Pozitif vibe çok iyi! 🌟"
    ]
    return happy[Math.floor(Math.random() * happy.length)]
  }
  
  const casual = [
    "Anlıyorum seni 😊",
    "Evet, haklısın!",
    "Öyle mi? İlginç 🤔",
    "Bence de öyle düşünüyorum",
    "Kesinlikle katılıyorum! 💯"
  ]
  return casual[Math.floor(Math.random() * casual.length)]
}

function addContextualEmojis(text, sentiment) {
  // Emoji zaten varsa ekleme
  const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u
  if (emojiRegex.test(text)) {
    return text
  }
  
  // Sentiment'e göre emoji ekle
  const emojis = {
    very_happy: ['✨', '🌟', '💫', '🎉'],
    happy: ['😊', '🙂', '👍', '💙'],
    neutral: ['🤔', '💭', '📝'],
    sad: ['💙', '🌸', '🤗'],
    very_sad: ['💙', '🫂', '🌈'],
    angry: ['💙', '🌺', '🕊️'],
    excited: ['🔥', '⚡', '🚀', '🎯']
  }
  
  const emojiList = emojis[sentiment] || emojis.neutral
  const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)]
  
  return `${text} ${randomEmoji}`
}

export function clearConversationMemory(userId) {
  conversationMemory.delete(userId)
}

export function getConversationStats(userId) {
  const context = conversationMemory.get(userId)
  if (!context) return null
  
  return {
    messageCount: context.messages.length,
    lastSentiment: context.lastSentiment,
    interactionCount: context.interactionCount,
    topics: [...new Set(context.messages.map(m => m.type))]
  }
}
