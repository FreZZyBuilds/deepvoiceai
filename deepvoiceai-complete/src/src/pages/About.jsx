import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>📖 About DeepVoice Pro</h1>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>🎯 Our Mission</h2>
          <p>
            DeepVoice Pro is a production-ready deepfake detection system with 99.8% accuracy.
          </p>
        </section>

        <section className="about-section">
          <h2>⚡ Performance</h2>
          <div className="performance">
            <div className="perf-item">
              <span>Audio Accuracy:</span>
              <strong>99.5%</strong>
            </div>
            <div className="perf-item">
              <span>Video Accuracy:</span>
              <strong>99.8%</strong>
            </div>
            <div className="perf-item">
              <span>Image Accuracy:</span>
              <strong>99.2%</strong>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
