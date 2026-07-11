# YouTube Clone 🎥

A responsive YouTube Clone built using **React.js** that allows users to watch videos, view video details, explore recommended videos, and read comments by integrating the **YouTube Data API v3**.

## 🚀 Features

- 🎬 Watch videos using YouTube embedded player
- 🔍 Fetch real-time video data using YouTube Data API v3
- 📺 Display video title, views, likes, upload time, and channel details
- 👤 Show channel profile, name, and subscriber count
- 💬 Fetch and display video comments
- ❤️ Like, dislike, share, and save action UI
- 📌 Recommended videos section
- 📱 Fully responsive design for desktop, tablet, and mobile
- ⚠️ Error page handling for unavailable videos
- 📖 Show more / Show less for long descriptions
- 💬 Expand and collapse comments on smaller screens
- 🔤 Decode and display YouTube HTML encoded comments correctly

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript (ES6+)
- CSS3
- React Router DOM
- React Icons

### API
- YouTube Data API v3

### Tools
- Vite
- npm
- VS Code

## 📂 Project Structure

```
src
│
├── Components
│   │
│   ├── Navbar
│   ├── Home
│   ├── Video
│   ├── PlayVideo
│   ├── Recommended
│   └── Error
│
├── assets
│
├── Data.js
│
├── App.jsx
└── main.jsx
```

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/Preethigajeganathan/Youtube-Clone
```

### Navigate into the project directory

```bash
cd youtube-clone
```

### Install dependencies

```bash
npm install
```

### Add YouTube API Key

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_youtube_api_key
```

### Start the development server

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

## 🔑 API Integration

This project uses **YouTube Data API v3** to fetch:

- Video information
- Channel details
- Subscriber count
- Video statistics
- Comments
- Recommended videos

To use the API:

1. Create a project in Google Cloud Console
2. Enable YouTube Data API v3
3. Generate an API key
4. Add the key to your environment file

## 📱 Responsive Design

The application provides a YouTube-like responsive experience:

### Desktop
- Video player on the left
- Recommended videos on the right
- Comments displayed normally

### Tablet
- Full-width video player
- Recommended videos displayed in a grid layout
- Comments can be expanded or collapsed

### Mobile
- Responsive video player
- Vertical recommended videos
- Collapsible comments section
- Optimized UI for smaller screens

## 🎯 Key Concepts Implemented

- React functional components
- React Hooks:
  - useState
  - useEffect
- React Router navigation
- API data fetching using Fetch API
- State management
- Conditional rendering
- Error handling
- Responsive CSS design
- Dynamic routing with video IDs

## 🔮 Future Improvements

- User authentication
- Search functionality
- Dark mode
- Watch history
- Playlist feature
- Infinite scrolling
- Video categories and filters
- User subscriptions

## 👩‍💻 Author

**Preethiga**

---

⭐ If you like this project, consider giving it a star!
