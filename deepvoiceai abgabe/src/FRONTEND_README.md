# DeepVoice Pro v4.0 - Frontend

## 🚀 Quick Start

```bash
cd frontend
npm install
npm start
```

This will start the React development server at `http://localhost:3000`

## 📁 Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── DemoV4MultiModal.jsx
│   ├── DemoV4MultiModal.css
│   ├── index.js
│   └── index.css
├── package.json
└── FRONTEND_README.md
```

## 🎨 Features

- **No-Login Demo**: Instantly test without authentication
- **Multimodal Support**: Audio, Video, and Image files
- **Real-time Analysis**: Live processing with loading states
- **Results Display**: Shows confidence scores and analysis details
- **Social Sharing**: Share results on Twitter
- **Responsive Design**: Works on all devices

## 🔗 API Integration

The frontend expects the backend to be running on `http://localhost:5000`

Endpoints:
- `POST /api/upload` - Upload file
- `POST /api/analyze/:file_id` - Analyze file
- `GET /api/report/:analysis_id` - Download PDF report

## 📦 Dependencies

- React 18.2.0
- react-scripts 5.0.1
- lucide-react (icons)
- axios (HTTP requests)

## 🚢 Deployment

### Vercel
```bash
vercel deploy
```

### Build
```bash
npm run build
```

## 🐛 Troubleshooting

**Backend not connecting:**
- Make sure backend is running on port 5000
- Check CORS settings in Flask app

**Port 3000 already in use:**
```bash
PORT=3001 npm start
```

---

Built for TestSprite Hackathon S02 🏆
