import pytest, sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))
@pytest.fixture
def test_data():
    return {'sample_audio': 'test.wav', 'sample_video': 'test.mp4', 'sample_image': 'test.jpg'}
