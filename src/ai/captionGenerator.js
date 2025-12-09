// AI Caption Generator
// Fotoğraf türünü algılar ve uygun caption önerir

export function generateCaption(imageType) {
  const captions = {
    food: [
      "Good food, good mood 🍕",
      "Taste the moment ✨",
      "Delicious memories 🌟",
      "Food is my love language 💕",
      "Eating my way through life 😋"
    ],
    landscape: [
      "Golden hour hits different ✨",
      "Lost in the right direction 🌍",
      "Nature never goes out of style 🌿",
      "Wanderlust and city dust ⛰️",
      "Chasing sunsets 🌅"
    ],
    portrait: [
      "Living my best life 💫",
      "Confidence level: selfie with no filter ✨",
      "Be yourself, everyone else is taken 💕",
      "Smile big, laugh often 😊",
      "Creating my own sunshine ☀️"
    ],
    tech: [
      "Innovation meets inspiration 💻",
      "Code. Create. Repeat. ⚡",
      "Building the future 🚀",
      "Tech life, best life 🔥",
      "Digital dreams ✨"
    ],
    fitness: [
      "Stronger every day 💪",
      "Sweat is just fat crying 🔥",
      "No pain, no gain ⚡",
      "Fitness is not about being better than someone else 🏋️",
      "Train insane or remain the same 💯"
    ],
    travel: [
      "Collect moments, not things ✈️",
      "Adventure awaits 🌍",
      "Not all who wander are lost 🗺️",
      "Travel far, travel wide 🌏",
      "Making memories around the world 📍"
    ]
  }

  const type = imageType || 'portrait'
  const categoryOptions = captions[type] || captions.portrait
  return categoryOptions[Math.floor(Math.random() * categoryOptions.length)]
}

// AI Story Filter System
// Story'e yüklenen fotoğrafa göre filtre ve müzik önerir

export function suggestStoryFilter(imageAnalysis) {
  const filters = {
    bright: {
      name: 'Sunshine',
      settings: { brightness: 1.2, contrast: 1.1, saturation: 1.15 },
      music: 'Happy Vibes - Summer Mix',
      font: 'Modern Bold'
    },
    dark: {
      name: 'Noir',
      settings: { brightness: 0.8, contrast: 1.3, saturation: 0.9 },
      music: 'Midnight Dreams - Chill Lo-Fi',
      font: 'Minimal Serif'
    },
    colorful: {
      name: 'Pop',
      settings: { brightness: 1.1, contrast: 1.2, saturation: 1.3 },
      music: 'Party Starter - EDM Mix',
      font: 'Fun Bubble'
    },
    nature: {
      name: 'Forest',
      settings: { brightness: 1, contrast: 1.1, saturation: 1.2 },
      music: 'Nature Sounds - Calm',
      font: 'Organic Script'
    },
    urban: {
      name: 'City Lights',
      settings: { brightness: 0.95, contrast: 1.25, saturation: 1.05 },
      music: 'Urban Beat - Hip Hop',
      font: 'Street Bold'
    }
  }

  const mood = imageAnalysis?.mood || 'bright'
  return filters[mood] || filters.bright
}

export function analyzeImageMood(imageUrl) {
  // Simüle edilmiş görsel analizi
  // Gerçek uygulamada image recognition API kullanılır
  
  const moods = ['bright', 'dark', 'colorful', 'nature', 'urban']
  const randomMood = moods[Math.floor(Math.random() * moods.length)]
  
  return {
    mood: randomMood,
    dominantColors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
    brightness: Math.random(),
    contrast: Math.random()
  }
}

export function detectImageType(imageUrl) {
  // URL pattern bazlı basit tür algılama
  // Gerçek uygulamada ML model kullanılır
  
  const url = imageUrl.toLowerCase()
  
  if (url.includes('food') || url.includes('restaurant') || url.includes('meal')) {
    return 'food'
  }
  if (url.includes('mountain') || url.includes('nature') || url.includes('landscape')) {
    return 'landscape'
  }
  if (url.includes('code') || url.includes('tech') || url.includes('computer')) {
    return 'tech'
  }
  if (url.includes('gym') || url.includes('fitness') || url.includes('workout')) {
    return 'fitness'
  }
  if (url.includes('travel') || url.includes('city') || url.includes('beach')) {
    return 'travel'
  }
  
  return 'portrait'
}

export function generateHashtags(imageType) {
  const hashtags = {
    food: ['#foodie', '#foodstagram', '#instafood', '#yummy', '#delicious'],
    landscape: ['#nature', '#landscape', '#travel', '#photography', '#wanderlust'],
    portrait: ['#selfie', '#portrait', '#instagood', '#photooftheday', '#me'],
    tech: ['#tech', '#innovation', '#coding', '#developer', '#technology'],
    fitness: ['#fitness', '#gym', '#workout', '#fitfam', '#motivation'],
    travel: ['#travel', '#adventure', '#explore', '#travelgram', '#instatravel']
  }
  
  const type = imageType || 'portrait'
  return hashtags[type] || hashtags.portrait
}
