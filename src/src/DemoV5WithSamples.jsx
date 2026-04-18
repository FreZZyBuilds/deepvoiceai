import React, { useState, useEffect } from 'react';

const DeepVoiceV5 = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // 1. Die echte Analyse-Funktion für V5 (repariert)
  const analyzeFile = async (file) => {
    if (!file) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Upload zum V5 Backend - WICHTIG: 127.0.0.1 nutzen
      const uploadRes = await fetch('http://127.0.0', {
        method: 'POST',
        body: formData,
      });
      const uploadData = await uploadRes.json();

      if (!uploadData.success) throw new Error("Upload fehlgeschlagen");

      // Analyse-Request
      const analysisRes = await fetch(`http://127.0.0{uploadData.file_id}`, {
        method: 'POST',
      });
      const analysisData = await analysisRes.json();

      if (analysisData.success) {
        setResult(analysisData.analysis);
      } else {
        throw new Error(analysisData.error || "Analyse fehlgeschlagen");
      }
    } catch (err) {
      console.error("V5 API Error:", err);
      setError("Verbindung zum V5 Backend fehlgeschlagen. Prüfe, ob das Python-Terminal läuft.");
    } finally {
      setLoading(false);
    }
  };

  // 2. Proben laden (für die Sample-Buttons)
  const loadSampleFromUrl = async (sampleData) => {
    setLoading(true);
    try {
      const response = await fetch(sampleData.url);
      const blob = await response.blob();
      const file = new File([blob], sampleData.name, { type: blob.type });
      await analyzeFile(file);
    } catch (err) {
      console.error("Sample Load Error:", err);
      setError("Beispiel-Datei konnte nicht geladen werden.");
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-blue-900">DeepVoice Pro V5 🚀</h1>
        <p className="text-gray-600">Echtzeit KI-Deepfake Erkennung (Multimodal)</p>
      </div>
      
      {/* Upload Bereich */}
      <div className="bg-blue-50 border-2 border-dashed border-blue-300 p-12 rounded-xl text-center mb-8 hover:border-blue-500 transition-colors cursor-pointer">
        <input 
          type="file" 
          id="fileUpload"
          onChange={(e) => analyzeFile(e.target.files[0])} 
          className="hidden"
        />
        <label htmlFor="fileUpload" className="cursor-pointer">
          <div className="text-5xl mb-4">📁</div>
          <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700">
            Datei auswählen
          </span>
          <p className="mt-4 text-gray-500 text-sm">Unterstützt: MP3, WAV, MP4, MOV (max. 500MB)</p>
        </label>
      </div>

      {/* Status & Fehlermeldungen */}
      {loading && (
        <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border mb-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-4"></div>
          <div className="text-blue-600 font-bold">KI analysiert Morgan Freeman Samples...</div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200 mb-6 flex items-center">
          <span className="text-2xl mr-3">⚠️</span>
          {error}
        </div>
      )}

      {/* Ergebnis-Anzeige */}
      {result && (
        <div className="bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-blue-600 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Analyse-Bericht</h2>
            <span className={`px-4 py-1 rounded-full font-bold text-white ${result.is_authentic ? 'bg-green-500' : 'bg-red-500'}`}>
              {result.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border">
              <span className="block text-gray-500 uppercase text-xs font-bold tracking-wider">KI-Sicherheit</span>
              <span className="text-3xl font-mono font-bold text-blue-700">{result.confidence}%</span>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border">
              <span className="block text-gray-500 uppercase text-xs font-bold tracking-wider">Datenquellen</span>
              <span className="text-sm font-medium">{result.dataset_sources?.join(' + ')}</span>
            </div>
          </div>
          
          {result.scores && (
            <div className="mt-8">
              <div className="flex justify-between mb-2">
                <h3 className="font-bold text-gray-700">Deepfake Wahrscheinlichkeit</h3>
                <span className="text-sm font-bold text-gray-500">{100 - result.scores.dfdc}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className={`h-4 transition-all duration-1000 ${result.is_authentic ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{width: `${100 - result.scores.dfdc}%`}}
                ></div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DeepVoiceV5;
