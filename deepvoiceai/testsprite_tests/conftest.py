import pytest
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

@pytest.fixture
def test_data():
    return {
        'sample_audio': 'test_audio.wav',
        'sample_video': 'test_video.mp4',
        'sample_image': 'test_image.jpg'
    }
