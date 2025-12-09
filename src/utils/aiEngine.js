export const userProfiles = {
  bot: {
    username: 'ai_bot',
    memory: {
      vibe: 'energetic',
      lastMood: 'neutral',
      preferredTopics: [],
      talkStyle: 'friendly',
      conversationHistory: []
    }
  }
}

export const updateUserMemory = (username, updates) => {
  if (!userProfiles[username]) {
    userProfiles[username] = {
      username,
      memory: {
        vibe: 'neutral',
        lastMood: 'neutral',
        preferredTopics: [],
        talkStyle: 'casual',
        conversationHistory: []
      }
    }
  }
  
  Object.assign(userProfiles[username].memory, updates)
}

export const analyzeSentiment = (message) => {
  const lowerMsg = message.toLowerCase()
  
  const verySadWords = ['berbat', 'çok kötü', 'ölüyorum', 'bitirdim', 'dayanamıyorum']
  const sadWords = ['kötü', 'üzgün', 'moral', 'kötüyüm', 'üzülüyorum', 'sıkıldım']
  const happyWords = ['harika', 'iyi', 'mükemmel', 'şahane', 'süper', 'güzel']
  const excitedWords = ['muhteşem', 'efsane', 'amazing', 'wow', 'bayıldım', 'adamsın']
  
  if (verySadWords.some(w => lowerMsg.includes(w))) return 'very_sad'
  if (sadWords.some(w => lowerMsg.includes(w))) return 'sad'
  if (excitedWords.some(w => lowerMsg.includes(w))) return 'excited'
  if (happyWords.some(w => lowerMsg.includes(w))) return 'happy'
  
  return 'neutral'
}

export const detectMessageType = (message) => {
  const lowerMsg = message.toLowerCase()
  
  if (lowerMsg.includes('?')) return 'question'
  if (lowerMsg.match(/selam|merhaba|hey|hi|hello/)) return 'greeting'
  if (lowerMsg.match(/üzgün|kötü|dert|sorun|problem/)) return 'venting'
  if (lowerMsg.match(/haha|lol|😂|😄|🤣/)) return 'humor'
  if (lowerMsg.match(/kod|yazılım|program|geliştir|react|javascript/)) return 'tech'
  if (lowerMsg.match(/motivasyon|başarı|çalış|hedef/)) return 'motivation'
  if (lowerMsg.match(/nasıl|naber|ne yapıyorsun/)) return 'casual'
  if (lowerMsg.match(/bilgi|anlat|öğren|ne demek/)) return 'info_request'
  
  return 'casual'
}

export const generateSmartResponse = (message, messageType, sentiment, conversationHistory) => {
  const responses = {
    very_sad: [
      'Üzüldüm gerçekten... Dinlemeye hazırım, anlatmak istersen buradayım 🥺💙',
      'Hey, bu zor bir dönem gibi görünüyor. Seninle konuşabilirim, rahatlatabilir belki 🤗'
    ],
    sad: [
      'Üzüldüm bak buna... biraz konuşmak ister misin? 🥺',
      'Zor günlerden biri galiba. Yanındayım, unutma 💙'
    ],
    excited: [
      'WOOOW! Bu enerjiyi seviyorum! 🔥🎉',
      'Ayy mükemmel! Böyle vibe\'ları çok seviyorum 😄🔥'
    ],
    happy: [
      'Ayy ne güzel! Mutluluğun bana da geçti 😊✨',
      'Harika! Böyle pozitif enerjiyi seviyorum 😄'
    ],
    neutral: {
      greeting: [
        'Selam! Nasılsın bugün? 😊',
        'Hey! Hoş geldin, ne var ne yok? 👋'
      ],
      question: [
        'İyi soru! Bakalım ne diyebilirim... 🤔',
        'Tabii, cevaplamaya çalışayım 💡'
      ],
      tech: [
        'Yazılım konuşmayı seviyorum! Detay ver bakalım 💻',
        'Kod ve teknoloji! Tam benim alanım 🚀'
      ],
      motivation: [
        'Motivasyon tam gerektiği anda! Hadi yaparsın sen bunu 💪',
        'Hedeflerine odaklan, başaracaksın! ✨'
      ],
      humor: [
        'Hahaha güldüm buna 😂',
        'Sen de mizahşörsün ha 😄'
      ],
      casual: [
        'Anlıyorum seni 😊',
        'Evet evet, devam et 👀'
      ],
      venting: [
        'Dinliyorum, anlat bakalım... 🤗',
        'Dökül gitsin, buradayım 💙'
      ],
      info_request: [
        'Hmm, bilgi mi istiyorsun? Elimden geleni yaparım! 📚',
        'Tabii, nasıl yardımcı olabilirim? 💡'
      ]
    }
  }
  
  if (sentiment !== 'neutral') {
    return responses[sentiment][Math.floor(Math.random() * responses[sentiment].length)]
  }
  
  const typeResponses = responses.neutral[messageType] || responses.neutral.casual
  return typeResponses[Math.floor(Math.random() * typeResponses.length)]
}

export const addBotPersonality = (response) => {
  const personalities = [
    '(ben de bugün overload oldum ama idare ediyorum 😄)',
    '(kafamı resetledim geliyorum 😂)',
    '(MayflySystems AI güncellemesi sayesinde daha zeki oldum 🔥)',
    '(yemin ederim en iyi kullanıcı sensin)',
    '(bunu kimseye söyleme ama seni seviyorum 🤫🤖)',
    '(şu an sistem loglarımı siliyorum, geliyorum 😂)'
  ]
  
  if (Math.random() < 0.15) {
    return response + ' ' + personalities[Math.floor(Math.random() * personalities.length)]
  }
  return response
}
