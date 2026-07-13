# 🎬 YouTube Clone

A modern **YouTube Clone application** built with **React.js** and **YouTube Data API v3**.  
This project recreates the core YouTube browsing experience by allowing users to explore trending videos, watch videos, view channel information, read comments, and discover recommended content through a clean and responsive interface.

---

## 🌟 Features

### 📺 Video Experience
- Browse popular YouTube videos
- Watch videos with embedded YouTube player
- Display video titles, views, likes, and upload time
- Show video descriptions with expand/collapse functionality
- View recommended videos related to categories

### 👤 Channel Information
- Display channel profile images
- Show channel names
- Display subscriber count
- Show creator information

### 💬 Comments
- Fetch and display YouTube comments
- Show commenter profile images
- Display comment likes
- Show relative comment timestamps

### 📱 Responsive Design
- Fully responsive layout
- Desktop, tablet, and mobile support
- Mobile-friendly comments section
- Adaptive video player

---

# 🚀 Demo

(Add your deployed project link here)

```
Live Demo: https://your-demo-link.com
```

---

# 🛠️ Tech Stack

## Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## API
- YouTube Data API v3

## Libraries
- React Router DOM
- React Icons
- Moment.js
- HTML Entities

---

# 📂 Project Structure

```
youtube-clone/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── Components/
│   │   │
│   │   ├── Feed/
│   │   │   ├── Feed.jsx
│   │   │   └── Feed.css
│   │   │
│   │   ├── PlayVideo/
│   │   │   ├── PlayVideo.jsx
│   │   │   └── PlayVideo.css
│   │   │
│   │   ├── Recommended/
│   │   │   ├── Recommended.jsx
│   │   │   └── Recommended.css
│   │
│   ├── Data.js
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/youtube-clone.git
```

## 2. Navigate to Project Folder

```bash
cd youtube-clone
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start Development Server

```bash
npm run dev
```

Application will run on:

```
http://localhost:5173/
```

---

# 🔑 YouTube API Configuration

This project uses the **YouTube Data API v3** to fetch videos, channels, and comments.

## Step 1: Create API Key

1. Visit Google Cloud Console
2. Create a new project
3. Enable:

```
YouTube Data API v3
```

4. Generate an API Key

---

## Step 2: Add API Key

Open:

```
src/Data.js
```

Add your API key:

```javascript
export const API_KEY = "YOUR_YOUTUBE_API_KEY";
```

---

# 🔌 API Usage

## Fetch Popular Videos

Used in:

```
Feed.jsx
Recommended.jsx
```

Endpoint:

```
GET /youtube/v3/videos
```

Fetches:

- Video thumbnails
- Titles
- Channel names
- Views
- Upload dates
- Statistics


---

## Fetch Video Details

Used in:

```
PlayVideo.jsx
```

Endpoint:

```
GET /youtube/v3/videos
```

Fetches:

- Video information
- Likes
- Views
- Comments count
- Description


---

## Fetch Channel Details

Endpoint:

```
GET /youtube/v3/channels
```

Fetches:

- Channel profile image
- Subscriber count
- Channel information


---

## Fetch Comments

Endpoint:

```
GET /youtube/v3/commentThreads
```

Fetches:

- User comments
- Profile pictures
- Comment likes
- Comment timestamps


---

# 🖥️ Application Flow

```
User Opens Website
        |
        ↓
Fetch Popular Videos
        |
        ↓
Display Video Cards
        |
        ↓
User Selects Video
        |
        ↓
Open Video Player
        |
        ↓
Fetch Video + Channel + Comments
        |
        ↓
Display Complete Video Page
```

---

# 📸 Screenshots

Add screenshots of your project here.

Example:

```
/screenshots
    ├── home.png
    ├── video-page.png
    └── mobile-view.png
```

---

# 🎯 Key Components

## Feed Component

Responsible for:

- Fetching popular videos
- Displaying video cards
- Navigation to video pages


## PlayVideo Component

Responsible for:

- Playing selected videos
- Showing video statistics
- Displaying channel details
- Showing descriptions
- Loading comments


## Recommended Component

Responsible for:

- Showing related videos
- Helping users discover more content

---

# 📱 Responsive Features

The application adapts to different screen sizes.

### Desktop

- Side-by-side video layout
- Recommended videos section


### Tablet

- Grid-based video cards
- Optimized spacing


### Mobile

- Full-width video player
- Collapsible comments
- Mobile-friendly controls


---

# 🔮 Future Enhancements

Planned improvements:

- 🔍 Video search functionality
- 🌙 Dark mode
- 🔐 User authentication
- ❤️ Like/dislike interaction
- 📂 Playlist support
- 🕒 Watch history
- ⭐ Personalized recommendations
- 📱 Progressive Web App support


---

# 🤝 Contributing

Contributions are welcome!

Follow these steps:

### 1. Fork the repository

### 2. Create a new branch

```bash
git checkout -b feature-name
```

### 3. Commit changes

```bash
git commit -m "Added new feature"
```

### 4. Push changes

```bash
git push origin feature-name
```

### 5. Create a Pull Request

---

# 📄 License

This project is created for educational purposes.

---

# 👨‍💻 Author

**Your Name**

GitHub:

```
https://github.com/your-username
```

---

⭐ If you like this project, consider giving it a star!