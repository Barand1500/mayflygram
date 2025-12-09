// Gerçekçi User Modeli
export const users = [
  {
    id: 1,
    username: 'sarah_wilson',
    fullName: 'Sarah Wilson',
    profilePicture: 'https://i.pravatar.cc/150?img=1',
    bio: 'Digital creator & travel enthusiast ✨\n📍 New York | 🌍 World traveler\n💌 DM for collabs',
    followers: 125400,
    following: 892,
    posts: [],
    reels: [],
    stories: [],
    isVerified: true,
    joinedAt: '2019-03-15'
  },
  {
    id: 2,
    username: 'alex_photographer',
    fullName: 'Alex Chen',
    profilePicture: 'https://i.pravatar.cc/150?img=2',
    bio: 'Professional Photographer 📸\nCapturing moments that matter\n🎨 Visual storyteller',
    followers: 89200,
    following: 456,
    posts: [],
    reels: [],
    stories: [],
    isVerified: false,
    joinedAt: '2018-07-22'
  },
  {
    id: 3,
    username: 'foodie_maya',
    fullName: 'Maya Rodriguez',
    profilePicture: 'https://i.pravatar.cc/150?img=5',
    bio: 'Food lover & recipe creator 🍕\nSharing delicious moments\n📧 maya@foodmail.com',
    followers: 234500,
    following: 678,
    posts: [],
    reels: [],
    stories: [],
    isVerified: true,
    joinedAt: '2020-01-10'
  },
  {
    id: 4,
    username: 'tech_guru_james',
    fullName: 'James Anderson',
    profilePicture: 'https://i.pravatar.cc/150?img=7',
    bio: 'Software Engineer 💻\nBuilding cool stuff with code\n🚀 Tech enthusiast',
    followers: 45600,
    following: 234,
    posts: [],
    reels: [],
    stories: [],
    isVerified: false,
    joinedAt: '2019-11-05'
  },
  {
    id: 5,
    username: 'fitness_emma',
    fullName: 'Emma Thompson',
    profilePicture: 'https://i.pravatar.cc/150?img=9',
    bio: 'Fitness Coach 💪\nTransform your body & mind\n🏋️ Personal trainer | Online coaching',
    followers: 178900,
    following: 567,
    posts: [],
    reels: [],
    stories: [],
    isVerified: true,
    joinedAt: '2018-05-18'
  },
  {
    id: 6,
    username: 'david_adventures',
    fullName: 'David Park',
    profilePicture: 'https://i.pravatar.cc/150?img=12',
    bio: 'Adventure seeker 🏔️\nLiving life on the edge\n✈️ 47 countries visited',
    followers: 67800,
    following: 389,
    posts: [],
    reels: [],
    stories: [],
    isVerified: false,
    joinedAt: '2020-09-30'
  },
  {
    id: 7,
    username: 'art_by_lisa',
    fullName: 'Lisa Martinez',
    profilePicture: 'https://i.pravatar.cc/150?img=10',
    bio: 'Digital Artist 🎨\nCreating magic with pixels\n🖌️ Commissions open',
    followers: 156700,
    following: 445,
    posts: [],
    reels: [],
    stories: [],
    isVerified: true,
    joinedAt: '2017-12-12'
  },
  {
    id: 8,
    username: 'music_mike',
    fullName: 'Mike Johnson',
    profilePicture: 'https://i.pravatar.cc/150?img=13',
    bio: 'Music Producer 🎵\nMaking beats that move you\n🎧 Spotify: @musicmike',
    followers: 92300,
    following: 312,
    posts: [],
    reels: [],
    stories: [],
    isVerified: false,
    joinedAt: '2019-04-20'
  }
]

// Gerçekçi Post Modeli
export const posts = [
  {
    id: 1,
    userId: 1,
    media: [
      'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600',
      'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=600',
      'https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=600'
    ],
    caption: 'Golden hour hits different ✨ #travel #photography #sunset',
    likes: 12450,
    comments: [],
    saves: 3420,
    shares: 234,
    location: 'Santorini, Greece',
    tags: ['#travel', '#photography', '#sunset', '#goldenhour'],
    createdAt: '2024-12-08T18:30:00Z',
    isLiked: false,
    isSaved: false
  },
  {
    id: 2,
    userId: 3,
    media: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600'
    ],
    caption: 'Taste the moment 🍕 Best pizza in town! #foodie #pizza #delicious',
    likes: 8920,
    comments: [],
    saves: 1890,
    shares: 145,
    location: 'Naples, Italy',
    tags: ['#foodie', '#pizza', '#delicious', '#italian'],
    createdAt: '2024-12-07T14:20:00Z',
    isLiked: false,
    isSaved: false
  },
  {
    id: 3,
    userId: 5,
    media: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600'
    ],
    caption: 'Stronger every day 💪 No excuses! #fitness #gym #motivation',
    likes: 15670,
    comments: [],
    saves: 4560,
    shares: 678,
    location: 'Gold\'s Gym, LA',
    tags: ['#fitness', '#gym', '#motivation', '#workout'],
    createdAt: '2024-12-06T09:15:00Z',
    isLiked: false,
    isSaved: false
  },
  {
    id: 4,
    userId: 7,
    media: [
      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600'
    ],
    caption: 'Creating magic with pixels 🎨✨ #digitalart #illustration #art',
    likes: 6780,
    comments: [],
    saves: 2340,
    shares: 189,
    location: 'Studio, Brooklyn',
    tags: ['#digitalart', '#illustration', '#art', '#creative'],
    createdAt: '2024-12-05T16:45:00Z',
    isLiked: false,
    isSaved: false
  }
]

// Gerçekçi Comment Modeli
export const comments = [
  {
    id: 1,
    postId: 1,
    userId: 3,
    text: 'Absolutely stunning! 😍',
    likes: 234,
    createdAt: '2024-12-08T19:00:00Z',
    replies: []
  },
  {
    id: 2,
    postId: 1,
    userId: 5,
    text: 'This is goals! 🌟',
    likes: 156,
    createdAt: '2024-12-08T19:15:00Z',
    replies: []
  },
  {
    id: 3,
    postId: 2,
    userId: 1,
    text: 'I need this in my life right now! 🍕',
    likes: 89,
    createdAt: '2024-12-07T15:30:00Z',
    replies: []
  },
  {
    id: 4,
    postId: 3,
    userId: 2,
    text: 'You\'re crushing it! Keep going 💪',
    likes: 445,
    createdAt: '2024-12-06T10:00:00Z',
    replies: []
  }
]

// Gerçekçi DM Modeli
export const directMessages = [
  {
    id: 1,
    conversationId: 'conv_1',
    participants: [1, 2],
    messages: [
      {
        id: 1,
        from: 2,
        to: 1,
        text: 'Hey! Loved your latest post 📸',
        createdAt: '2024-12-08T10:30:00Z',
        isRead: true,
        type: 'text'
      },
      {
        id: 2,
        from: 1,
        to: 2,
        text: 'Thanks so much! Means a lot ✨',
        createdAt: '2024-12-08T10:32:00Z',
        isRead: true,
        type: 'text'
      }
    ],
    lastMessage: 'Thanks so much! Means a lot ✨',
    lastMessageTime: '2024-12-08T10:32:00Z',
    unreadCount: 0
  },
  {
    id: 2,
    conversationId: 'conv_2',
    participants: [1, 3],
    messages: [
      {
        id: 3,
        from: 3,
        to: 1,
        text: 'Are you free for a collab? 🤝',
        createdAt: '2024-12-07T16:20:00Z',
        isRead: false,
        type: 'text'
      }
    ],
    lastMessage: 'Are you free for a collab? 🤝',
    lastMessageTime: '2024-12-07T16:20:00Z',
    unreadCount: 1
  }
]

// Gerçekçi Story Modeli
export const stories = [
  {
    id: 1,
    userId: 1,
    media: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400',
    mediaType: 'image',
    duration: 5000,
    createdAt: '2024-12-09T08:00:00Z',
    expiresAt: '2024-12-10T08:00:00Z',
    views: 12340,
    viewers: [2, 3, 5, 7],
    isViewed: false,
    filter: 'Sunshine',
    music: 'Happy Vibes - Summer Mix'
  },
  {
    id: 2,
    userId: 3,
    media: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    mediaType: 'image',
    duration: 5000,
    createdAt: '2024-12-09T09:30:00Z',
    expiresAt: '2024-12-10T09:30:00Z',
    views: 8920,
    viewers: [1, 2, 5],
    isViewed: false,
    filter: 'Pop',
    music: 'Food Vibes - Chill Mix'
  },
  {
    id: 3,
    userId: 5,
    media: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    mediaType: 'image',
    duration: 5000,
    createdAt: '2024-12-09T07:15:00Z',
    expiresAt: '2024-12-10T07:15:00Z',
    views: 15670,
    viewers: [1, 2, 3, 4, 7],
    isViewed: false,
    filter: 'Forest',
    music: 'Workout Beats - Motivation'
  }
]

// Gerçekçi Reels Modeli
export const reels = [
  {
    id: 1,
    userId: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400',
    caption: 'Travel diaries ✈️ #travel #explore',
    likes: 45600,
    comments: 1234,
    shares: 890,
    saves: 3450,
    views: 234500,
    music: {
      name: 'Summer Vibes',
      artist: 'DJ Traveler',
      coverArt: 'https://i.pravatar.cc/100?img=50'
    },
    tags: ['#travel', '#explore', '#adventure'],
    createdAt: '2024-12-07T12:00:00Z',
    isLiked: false,
    isSaved: false
  },
  {
    id: 2,
    userId: 5,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    caption: 'Morning workout routine 💪 #fitness #gym',
    likes: 78900,
    comments: 2345,
    shares: 1567,
    saves: 6780,
    views: 567800,
    music: {
      name: 'Pump It Up',
      artist: 'GymTunes',
      coverArt: 'https://i.pravatar.cc/100?img=51'
    },
    tags: ['#fitness', '#gym', '#workout'],
    createdAt: '2024-12-06T06:30:00Z',
    isLiked: false,
    isSaved: false
  },
  {
    id: 3,
    userId: 3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    caption: 'Recipe reveal 🍕 #cooking #food',
    likes: 34500,
    comments: 890,
    shares: 567,
    saves: 2340,
    views: 189000,
    music: {
      name: 'Kitchen Beats',
      artist: 'Chef Sounds',
      coverArt: 'https://i.pravatar.cc/100?img=52'
    },
    tags: ['#cooking', '#food', '#recipe'],
    createdAt: '2024-12-05T18:45:00Z',
    isLiked: false,
    isSaved: false
  }
]

// Gerçekçi Notification Modeli
export const notifications = [
  {
    id: 1,
    type: 'like',
    from: 2,
    postId: 1,
    text: 'liked your post',
    createdAt: '2024-12-09T10:30:00Z',
    isRead: false
  },
  {
    id: 2,
    type: 'comment',
    from: 3,
    postId: 1,
    text: 'commented: "Absolutely stunning! 😍"',
    createdAt: '2024-12-08T19:00:00Z',
    isRead: false
  },
  {
    id: 3,
    type: 'follow',
    from: 5,
    text: 'started following you',
    createdAt: '2024-12-08T14:20:00Z',
    isRead: true
  },
  {
    id: 4,
    type: 'mention',
    from: 7,
    postId: 4,
    text: 'mentioned you in a comment',
    createdAt: '2024-12-07T11:15:00Z',
    isRead: true
  }
]

// Helper functions
export function getUserById(userId) {
  return users.find(u => u.id === userId)
}

export function getPostsByUserId(userId) {
  return posts.filter(p => p.userId === userId)
}

export function getCommentsByPostId(postId) {
  return comments.filter(c => c.postId === postId)
}

export function getStoriesByUserId(userId) {
  return stories.filter(s => s.userId === userId)
}

export function getReelsByUserId(userId) {
  return reels.filter(r => r.userId === userId)
}
