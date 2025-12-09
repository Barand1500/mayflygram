export const enhancedPosts = [
  {
    id: 1,
    user: {
      username: 'naturelover',
      name: 'Ayşe Yılmaz',
      avatar: 'https://i.pravatar.cc/150?img=1',
      verified: true
    },
    media: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600'
    ],
    caption: 'Bugün hava şahane ☀️ #nature #mountains',
    likes: 1243,
    comments: [
      { id: 1, username: 'user1', text: 'Muhteşem görünüyor! 😍' },
      { id: 2, username: 'user2', text: 'Nerede burası?' },
      { id: 3, username: 'naturelover', text: 'Norveç\'ten selamlar 🇳🇴' }
    ],
    createdAt: '2h',
    tags: ['nature', 'travel', 'mountains']
  },
  {
    id: 2,
    user: {
      username: 'cityvibes',
      name: 'Mehmet Demir',
      avatar: 'https://i.pravatar.cc/150?img=2',
      verified: false
    },
    media: [
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600'
    ],
    caption: 'Şehir ışıkları 🌃✨ #citylife #nightphotography',
    likes: 892,
    comments: [
      { id: 1, username: 'user3', text: 'Harika çekim!' },
      { id: 2, username: 'user4', text: 'Işıklar çok güzel ✨' }
    ],
    createdAt: '5h',
    tags: ['city', 'night', 'photography']
  },
  {
    id: 3,
    user: {
      username: 'foodie_world',
      name: 'Zeynep Kaya',
      avatar: 'https://i.pravatar.cc/150?img=3',
      verified: true
    },
    media: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600'
    ],
    caption: 'Yeni tarif denedim, bayıldım! 🍝 #food #cooking',
    likes: 2341,
    comments: [
      { id: 1, username: 'user5', text: 'Çok lezzetli görünüyor! 🤤' },
      { id: 2, username: 'user6', text: 'Tarif paylaşır mısın?' },
      { id: 3, username: 'foodie_world', text: 'Bioda linkler var! 🔗' }
    ],
    createdAt: '1d',
    tags: ['food', 'cooking', 'recipe']
  },
  {
    id: 4,
    user: {
      username: 'tech_guru',
      name: 'Can Özkan',
      avatar: 'https://i.pravatar.cc/150?img=5',
      verified: true
    },
    media: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600'
    ],
    caption: 'Yeni setup tamamlandı! 💻🚀 #coding #developer',
    likes: 1789,
    comments: [
      { id: 1, username: 'user8', text: 'Setup çok iyi!' },
      { id: 2, username: 'user9', text: 'Hangi klavye bu?' }
    ],
    createdAt: '3h',
    tags: ['tech', 'coding', 'setup']
  }
]

export const trendingTopics = [
  { id: 1, tag: 'nature', posts: 15420 },
  { id: 2, tag: 'coding', posts: 8934 },
  { id: 3, tag: 'food', posts: 23456 },
  { id: 4, tag: 'travel', posts: 12789 },
  { id: 5, tag: 'photography', posts: 18923 }
]

export const exploreContent = {
  tech: [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
      title: 'Coding Tips',
      category: 'tech'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
      title: 'Developer Life',
      category: 'tech'
    }
  ],
  nature: [
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      title: 'Mountain Views',
      category: 'nature'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400',
      title: 'Forest Therapy',
      category: 'nature'
    }
  ],
  food: [
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
      title: 'Delicious Recipes',
      category: 'food'
    }
  ]
}
