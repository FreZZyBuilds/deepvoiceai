#!/usr/bin/env python3
"""DeepVoice Pro v5.0 - Backend API"""
from backend_app_v5_real_detection import app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
