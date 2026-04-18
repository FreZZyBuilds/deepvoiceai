import React from 'react';
import DemoV5WithSamples from '../DemoV5WithSamples';
import './Analyze.css';

export default function Analyze() {
  return (
    <div className="analyze">
      <div className="analyze-header">
        <h1>🎯 Deepfake Analysis</h1>
        <p>Test with pre-loaded samples or upload your own files</p>
      </div>
      
      <div className="analyze-content">
        <DemoV5WithSamples />
      </div>
    </div>
  );
}
