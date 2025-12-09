# 📱 Instagram Clone - Ultra Modern Social Media Platform

<div align="center">

![Instagram Clone Banner](https://img.shields.io/badge/Instagram-Clone-E4405F?style=for-the-badge&logo=instagram&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A Professional Instagram-Inspired Social Media Application**

*Crafted with ❤️ by [Baran (Barand1500)](https://github.com/Barand1500)*

**🏢 A [MayflySystems](https://mayflysystems.com) Product | B-Code Division**

---

### 🌐 Language / Dil
[🇬🇧 English](#english) | [🇹🇷 Türkçe](#türkçe)

---

</div>

<a name="english"></a>

## 🇬🇧 English

### 📖 About The Project

Instagram Clone is an ultra-modern, feature-rich social media platform that brings the best of Instagram to the web. Built with cutting-edge technologies and powered by advanced AI systems, this application delivers a professional, smooth, and engaging user experience.

**🎯 Mission:** To create a professional-grade social media platform that combines modern design, intelligent features, and optimal performance.

**🚀 Vision:** Developed by MayflySystems' B-Code Division, this project represents our commitment to building innovative digital experiences.

## 🌟 Features

### 🎨 Theme System
- **Dark/Light Mode** - Toggle between themes with persistent localStorage
- Smooth transitions across all components
- Modern dark theme (#121212) and clean light theme

### 🏠 Home / Feed
- Modern Instagram-like interface
- **Story Bar** - 8 interactive stories with full-screen viewer
- Stories auto-close after 4 seconds
- Example posts with images from Unsplash
- **Double-tap to like** animation with heart effect
- Interactive like system with real-time counter
- **Comment System** - View and add comments with modal interface

### ✨ Core Features

#### 🎨 **Theme System**
- **Dark/Light Mode** - Seamless theme switching with localStorage persistence
- Modern dark theme (#0e0e10) and clean light theme (#FAFAFA)
- Smooth transitions across all components
- Material 3 + iOS flat design mix

#### 🏠 **Home / Feed**
- Instagram-inspired modern interface
- **Story Bar** - Interactive stories with gradient rings
- Full-screen story viewer with auto-close
- **Enhanced Posts** - Multi-image carousel support
- **Double-tap to like** with heart animation
- **Sparkle Animation** - Premium like effect
- Comment system with modal interface
- Save posts functionality
- Verified badge support

#### 💬 **Messages (Ultra AI-Powered)**
- **Smart DM Bot AI** with advanced intelligence:
  - **Sentiment Analysis** - 5-level emotion detection (very_sad, sad, neutral, happy, excited)
  - **Message Type Detection** - 8 categories (question, greeting, venting, humor, tech, motivation, casual, info_request)
  - **Conversation Memory** - Context-aware responses based on chat history
  - **Bot Personality** - Dynamic personality injection
  - **Topic Detection** - Smart topic switching
  - **Typing Animation** - Realistic typing indicator
  - **Timestamps** - Every message timestamped
  - **Quick Reply Buttons** - Fast response options (👍, 😂, ❤️, 🔥)
  - **Voice Message Animation** - Wave visualization

#### 🔍 **Explore**
- Instagram-style grid layout (2-3-1 pattern)
- **Trending Topics** - Hashtag discovery with post counts
- Category filtering (All, Tech, Nature, Food)
- Hover effects and smooth animations
- Infinite scroll ready

#### 🎬 **Reels**
- Professional TikTok/Instagram Reels experience
- Full-screen vertical video feed
- **Swipe up/down** navigation
- Modern overlay UI:
  - Video title at top
  - User info on left with Follow button
  - Music bar at bottom with song info
  - Action buttons on right (Like, Comment, Share, Profile)
- Double-tap to like animation
- Auto-play with scroll detection
- GPU-accelerated smooth 60 FPS

#### 🛍️ **Shop**
- Instagram Shop-inspired interface
- **Product Cards** - Lazy-loaded images
- Verified seller badges
- Category chips (7 categories with emojis)
- **Product Detail Modal**:
  - Multi-image carousel
  - Size & color selection
  - Quantity selector
  - Rating & reviews display
  - Seller information
  - Add to cart / Buy now buttons
- Star ratings and review counts
- Smooth animations and transitions

#### 👤 **Profile**
- **Cover Photo** banner
- Profile avatar with stats
- Bio with multi-line support
- **Tabbed Interface**:
  - Posts grid
  - Reels grid
  - Tagged posts
- **Story Highlights** - Archive circles
- Follower/Following counts
- Edit Profile functionality

#### 🔔 **Notifications**
- Comprehensive notification center
- Multiple notification types (like, comment, follow, mention)
- **Follow Back** button
- **Unread indicator** - Badge on top bar
- Auto-mark as read
- Timestamps

#### 💾 **Saved Posts**
- Dedicated saved content page
- Filterable tabs (All, Posts, Reels)
- Grid layout
- Reel indicators

### 🤖 AI Systems

#### **1. Smart DM Bot AI**
```javascript
// Sentiment Analysis - 5 Levels
- very_happy: 'harika', 'mükemmel', 'amazing' → Score: 0.9
- happy: 'güzel', 'iyi', 'thanks' → Score: 0.7
- neutral: Default → Score: 0.0
- sad: 'üzgün', 'kötü', 'sad' → Score: -0.7
- very_sad: 'berbat', 'korkunç', 'awful' → Score: -0.9

// Message Types - 8 Categories
- question, greeting, farewell, venting, humor, tech, motivation, info_request

// Smart Features
✓ Conversation memory tracking
✓ Context-aware responses
✓ Personality injection (15% random)
✓ Photo analysis capability
✓ Multi-language support (TR/EN)
```

#### **2. AI Caption Generator**
```javascript
// Auto-generates captions based on image type
- Food: "Good food, good mood 🍕"
- Landscape: "Golden hour hits different ✨"
- Portrait: "Living my best life 💫"
- Tech: "Innovation meets inspiration 💻"
- Fitness: "Stronger every day 💪"
- Travel: "Collect moments, not things ✈️"

// Auto-hashtag generation
- Detects image type from URL patterns
- Suggests relevant hashtags
```

#### **3. AI Story Filter System**
```javascript
// Mood Detection
- Analyzes image brightness, contrast, colors
- Suggests filters: Sunshine, Noir, Pop, Forest, City Lights

// Smart Suggestions
✓ Filter settings (brightness, contrast, saturation)
✓ Music recommendations based on mood
✓ Font style suggestions
```

### 🎯 Performance Optimizations

#### **Custom Hooks**
- `useLazyLoad` - Intersection Observer for images
- `useDebounce` - Input optimization
- `useDoubleClick` - Double-tap detection
- `useImagePreloader` - Preload image batches
- `useLocalStorage` - Persistent storage

#### **React Optimizations**
- `React.memo` - Memoized components
- `useMemo` - Computed values caching
- `useCallback` - Function memoization
- Lazy loading for all images
- Code splitting ready

#### **Memory Management**
- Automatic cleanup on unmount
- Intersection Observer disconnect
- Event listener removal
- Memory leak prevention

### 🎨 Design System

#### **Color Palette**
```css
Light Theme:
- Background: #FAFAFA
- Surface: #FFFFFF
- Primary: #3897F0
- Text: #262626
- Border: #DBDBDB

Dark Theme:
- Background: #0E0E10
- Surface: #1A1A1A
- Primary: #3897F0
- Text: #FFFFFF
- Border: #2A2A2A
```

#### **Typography**
- Font Family: **Inter** (300-800 weights)
- Modern, clean, readable
- Optimized for web and mobile

#### **Animations**
- Sparkle effect on like
- Heart beat animation
- Smooth fade-ins
- Micro-interactions
- 60 FPS transitions

### 🚀 Getting Started

#### Prerequisites
```bash
Node.js v14+ required
npm or yarn package manager
```

#### Installation
```bash
# Clone the repository
git clone https://github.com/Barand1500/InstagramClone.git

# Navigate to project
cd InstagramClone

# Install dependencies
npm install
```

#### Development
```bash
# Start dev server
npm run dev

# Open browser at http://localhost:5173
```

#### Build for Production
```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

### 📁 Project Structure
```
InstagramClone/
├── src/
│   ├── ai/                 # AI Systems
│   │   ├── smartBot.js     # DM Bot Intelligence
│   │   └── captionGenerator.js  # Caption & Filter AI
│   ├── components/         # Reusable Components
│   │   ├── TopBar.jsx
│   │   ├── BottomNav.jsx
│   │   ├── EnhancedPost.jsx
│   │   ├── ProductCard.jsx
│   │   ├── SparkleAnimation.jsx
│   │   ├── ZoomModal.jsx
│   │   └── ...
│   ├── data/              # Data Models
│   │   ├── realisticData.js   # Users, Posts, Comments
│   │   └── shopData.js        # Products
│   ├── hooks/             # Custom Hooks
│   │   └── useCustomHooks.js
│   ├── screens/           # Main Pages
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Reels.jsx
│   │   ├── Shop.jsx
│   │   ├── Profile.jsx
│   │   ├── Messages.jsx
│   │   └── ...
│   ├── theme/             # Design System
│   │   └── colors.js
│   ├── context/           # React Context
│   │   └── ThemeContext.jsx
│   ├── App.jsx            # Main App
│   ├── App.css            # Global Styles
│   └── main.jsx           # Entry Point
└── package.json
```

### 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18.2.0** | UI Framework |
| **Vite 5.0.8** | Build Tool & Dev Server |
| **JavaScript ES6+** | Programming Language |
| **CSS3** | Styling & Animations |
| **Context API** | State Management |
| **Intersection Observer** | Lazy Loading |
| **LocalStorage API** | Data Persistence |

### 📊 Data Models

#### User Model
```javascript
{
  id, username, fullName, profilePicture, bio,
  followers, following, posts[], reels[], stories[],
  isVerified, joinedAt
}
```

#### Post Model
```javascript
{
  id, userId, media[], caption, likes, comments[],
  saves, shares, location, tags[], createdAt,
  isLiked, isSaved
}
```

#### Product Model
```javascript
{
  id, name, brand, price, currency, images[],
  category, description, sizes[], colors[],
  rating, reviews, seller{}, tags[]
}
```

---

<a name="türkçe"></a>

## 🇹🇷 Türkçe

### 📖 Proje Hakkında

Instagram Clone, modern teknolojilerle geliştirilmiş, özellik açısından zengin ve profesyonel bir sosyal medya platformudur. Gelişmiş yapay zeka sistemleri ile desteklenen uygulama, Instagram'ın en iyi özelliklerini web'e taşır.

**🎯 Misyon:** Modern tasarım, akıllı özellikler ve optimal performansı birleştiren profesyonel seviyede bir sosyal medya platformu oluşturmak.

**🚀 Vizyon:** MayflySystems'in B-Code Bölümü tarafından geliştirilen bu proje, yenilikçi dijital deneyimler yaratma taahhüdümüzü temsil eder.

### ✨ Temel Özellikler

#### 🎨 **Tema Sistemi**
- **Karanlık/Aydınlık Mod** - localStorage ile kalıcı tema değiştirme
- Modern karanlık tema (#0e0e10) ve temiz aydınlık tema (#FAFAFA)
- Tüm bileşenlerde yumuşak geçişler
- Material 3 + iOS flat tasarım karışımı

#### 🏠 **Ana Sayfa / Feed**
- Instagram-ilham modern arayüz
- **Hikaye Çubuğu** - Gradient halkalı etkileşimli hikayeler
- Otomatik kapanan tam ekran hikaye görüntüleyici
- **Gelişmiş Gönderiler** - Çoklu görsel carousel desteği
- **Çift tıklama ile beğeni** - Kalp animasyonu
- **Sparkle Animasyonu** - Premium beğeni efekti
- Modal arayüzlü yorum sistemi
- Gönderi kaydetme özelliği
- Onaylı rozet desteği

#### 💬 **Mesajlar (Ultra Yapay Zeka Destekli)**
- **Akıllı DM Bot AI** gelişmiş zeka ile:
  - **Duygu Analizi** - 5 seviyeli duygu algılama (çok üzgün, üzgün, nötr, mutlu, heyecanlı)
  - **Mesaj Tipi Algılama** - 8 kategori (soru, selamlama, veda, dertleşme, mizah, teknoloji, motivasyon, bilgi)
  - **Konuşma Hafızası** - Sohbet geçmişine dayalı bağlam-farkında cevaplar
  - **Bot Kişiliği** - Dinamik kişilik enjeksiyonu
  - **Konu Algılama** - Akıllı konu değiştirme
  - **Yazıyor Animasyonu** - Gerçekçi yazma göstergesi
  - **Zaman Damgaları** - Her mesaj zaman damgalı
  - **Hızlı Yanıt Butonları** - Hızlı cevap seçenekleri (👍, 😂, ❤️, 🔥)
  - **Sesli Mesaj Animasyonu** - Dalga görselleştirme

#### 🔍 **Keşfet**
- Instagram-tarzı grid düzeni (2-3-1 deseni)
- **Trend Konular** - Gönderi sayılarıyla hashtag keşfi
- Kategori filtreleme (Tümü, Teknoloji, Doğa, Yemek)
- Hover efektleri ve yumuşak animasyonlar
- Sonsuz scroll hazır

#### 🎬 **Reels**
- Profesyonel TikTok/Instagram Reels deneyimi
- Tam ekran dikey video akışı
- **Yukarı/aşağı kaydırma** navigasyonu
- Modern overlay UI:
  - Üstte video başlığı
  - Solda kullanıcı bilgisi ve Takip Et butonu
  - Altta şarkı bilgisiyle müzik çubuğu
  - Sağda aksiyon butonları (Beğen, Yorum, Paylaş, Profil)
- Çift tıklama beğeni animasyonu
- Scroll algılamalı otomatik oynatma
- GPU-hızlandırmalı 60 FPS akıcılık

#### 🛍️ **Mağaza**
- Instagram Shop-ilham arayüz
- **Ürün Kartları** - Lazy-loaded görseller
- Onaylı satıcı rozetleri
- Kategori chipleri (7 kategori emoji'lerle)
- **Ürün Detay Modal**:
  - Çoklu görsel carousel
  - Beden ve renk seçimi
  - Miktar seçici
  - Puan ve yorum gösterimi
  - Satıcı bilgileri
  - Sepete ekle / Hemen satın al butonları
- Yıldız puanları ve yorum sayıları
- Yumuşak animasyonlar ve geçişler

#### 👤 **Profil**
- **Kapak Fotoğrafı** banner'ı
- İstatistikli profil avatarı
- Çok satırlı bio desteği
- **Sekmeli Arayüz**:
  - Gönderiler grid'i
  - Reels grid'i
  - Etiketlenen gönderiler
- **Hikaye Öne Çıkanları** - Arşiv çemberleri
- Takipçi/Takip edilen sayıları
- Profil düzenleme özelliği

#### 🔔 **Bildirimler**
- Kapsamlı bildirim merkezi
- Çoklu bildirim tipleri (beğeni, yorum, takip, bahsetme)
- **Takip Et** butonu
- **Okunmamış göstergesi** - Üst barda rozet
- Otomatik okundu işaretleme
- Zaman damgaları

#### 💾 **Kaydedilenler**
- Özel kaydedilen içerik sayfası
- Filtrelenebilir sekmeler (Tümü, Gönderiler, Reels)
- Grid düzeni
- Reel göstergeleri

### 🤖 Yapay Zeka Sistemleri

#### **1. Akıllı DM Bot AI**
```javascript
// Duygu Analizi - 5 Seviye
- çok_mutlu: 'harika', 'mükemmel', 'amazing' → Puan: 0.9
- mutlu: 'güzel', 'iyi', 'teşekkür' → Puan: 0.7
- nötr: Varsayılan → Puan: 0.0
- üzgün: 'üzgün', 'kötü', 'sad' → Puan: -0.7
- çok_üzgün: 'berbat', 'korkunç', 'awful' → Puan: -0.9

// Mesaj Tipleri - 8 Kategori
- soru, selamlama, veda, dertleşme, mizah, teknoloji, motivasyon, bilgi_talebi

// Akıllı Özellikler
✓ Konuşma hafızası takibi
✓ Bağlam-farkında cevaplar
✓ Kişilik enjeksiyonu (%15 rastgele)
✓ Fotoğraf analizi yeteneği
✓ Çoklu dil desteği (TR/EN)
```

#### **2. AI Caption Üretici**
```javascript
// Görsel tipine göre otomatik caption üretir
- Yemek: "Good food, good mood 🍕"
- Manzara: "Golden hour hits different ✨"
- Portre: "Living my best life 💫"
- Teknoloji: "Innovation meets inspiration 💻"
- Fitness: "Stronger every day 💪"
- Seyahat: "Collect moments, not things ✈️"

// Otomatik hashtag üretimi
- URL desenlerinden görsel tipini algılar
- İlgili hashtag'leri önerir
```

#### **3. AI Hikaye Filtre Sistemi**
```javascript
// Mod Algılama
- Görsel parlaklık, kontrast, renkleri analiz eder
- Filtre önerir: Sunshine, Noir, Pop, Forest, City Lights

// Akıllı Öneriler
✓ Filtre ayarları (parlaklık, kontrast, doygunluk)
✓ Mod'a göre müzik önerileri
✓ Font stil önerileri
```

### 🚀 Başlangıç

#### Gereksinimler
```bash
Node.js v14+ gerekli
npm veya yarn paket yöneticisi
```

#### Kurulum
```bash
# Depoyu klonlayın
git clone https://github.com/Barand1500/InstagramClone.git

# Proje dizinine gidin
cd InstagramClone

# Bağımlılıkları yükleyin
npm install
```

#### Geliştirme
```bash
# Geliştirme sunucusunu başlatın
npm run dev

# Tarayıcıda http://localhost:5173 adresini açın
```

#### Production Build
```bash
# Optimize edilmiş build oluşturun
npm run build

# Production build'i önizleyin
npm run preview
```

---

### 👨‍💻 Developer / Geliştirici

**Baran (Barand1500)**
- GitHub: [@Barand1500](https://github.com/Barand1500)
- Organization: [MayflySystems](https://mayflysystems.com)
- Division: B-Code

### 🏢 About MayflySystems

**MayflySystems** is a technology company focused on creating innovative digital solutions. The B-Code Division specializes in building cutting-edge web applications and AI-powered platforms.

**MayflySystems**, yenilikçi dijital çözümler oluşturmaya odaklanan bir teknoloji şirketidir. B-Code Bölümü, son teknoloji web uygulamaları ve AI destekli platformlar geliştirmekte uzmanlaşmıştır.

---

### 📄 License / Lisans

This project is licensed under the MIT License.

Bu proje MIT Lisansı altında lisanslanmıştır.

---

### 🌟 Acknowledgments / Teşekkürler

- React Team for the amazing framework
- Vite Team for the blazing fast build tool
- Unsplash for beautiful images
- All open-source contributors

---

<div align="center">

**Made with ❤️ by Baran (Barand1500)**

**🏢 MayflySystems | B-Code Division**

⭐ Star this project if you like it!
Created with ❤️ for learning React

React öğrenmek için ❤️ ile oluşturuldu
