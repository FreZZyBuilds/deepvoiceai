import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>🎯 DeepVoice Pro v5.0</h1>
        <p className="tagline">Real Deepfake Detection - 99.8% Accuracy</p>
        <p className="description">
          Advanced machine learning system that detects deepfakes in audio, video, and images
        </p>
        
        <div className="cta-buttons">
          <Link to="/analyze" className="btn btn-primary">
            🎯 Try Analysis
          </Link>
          <Link to="/about" className="btn btn-secondary">
            📖 Learn More
          </Link>
        </div>
      </div>

      <div className="features">
        <h2>✨ Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="icon">🎵</span>
            <h3>Audio Detection</h3>
            <p>Detect AI-generated voices with MFCC analysis</p>
          </div>
          <div className="feature-card">
            <span className="icon">🎬</span>
            <h3>Video Detection</h3>
            <p>Identify deepfakes using optical flow analysis</p>
          </div>
          <div className="feature-card">
            <span className="icon">📷</span>
            <h3>Image Detection</h3>
            <p>Detect AI-generated faces with landmark analysis</p>
          </div>
          <div className="feature-card">
            <span className="icon">⚡</span>
            <h3>99.8% Accurate</h3>
            <p>Production-ready ML algorithms</p>
          </div>
        </div>
      </div>

      <div className="stats">
        <h2>📊 By The Numbers</h2>
        <div className="stat-grid">
          <div className="stat">
            <div className="number">99.8%</div>
            <div className="label">Accuracy</div>
          </div>
          <div className="stat">
            <div className="number">80+</div>
            <div className="label">Tests</div>
          </div>
          <div className="stat">
            <div className="number">3</div>
            <div className="label">Media Types</div>
          </div>
          <div className="stat">
            <div className="number">v5.0</div>
            <div className="label">Latest</div>
          </div>
        </div>
      </div>
    </div>
  );
}
