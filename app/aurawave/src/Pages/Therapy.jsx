import { useEffect, useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';

import '../Css/Therapy.css'
import Sidebar from './Sidebar';

import test_eeg_json_1 from '../TestData/test_1.json';
import test_eeg_json_2 from '../TestData/test_2.json';
import test_eeg_json_3 from '../TestData/test_3.json';

export const Therapy = () => {

  // DEBUG
  const [waveform, setWaveform] = useState(test_eeg_json_1)
  const navigate = useNavigate();

  const navClick = () => {
    
    navigate('/recording', 
    {
        state: 
        {
          eeg_data: JSON.stringify(waveform)
        }
      });
  };

  return (
    <body className="body-therapy">
      <Sidebar />
      <section className='section-therapy'>
        <div>
          {/* <div style={{ display: "flex", flexDirection: "row", gap: "0.2rem", justifyContent: 'center' }}>
            <button onClick={() => setWaveform(test_eeg_json_1)}>Waveform 1</button>
            <button onClick={() => setWaveform(test_eeg_json_2)}>Waveform 2</button>
            <button onClick={() => setWaveform(test_eeg_json_3)}>Waveform 3</button>
          </div> */}
          <h2>Music Therapy</h2>
          <div className='button-center'>
            {/* <button onClick={startPrediction}>Start Recording</button> */}

            <button onClick={navClick}>Start Recording</button> {/* go to recording page */}

          </div>
          {/* <div className='predicted-music'>
            <img src="http://localhost:5000/static/sample_music/sleepy/thumbnails/here_comes_the_sun.jpeg"></img>
            <p>Here Comes the Sun</p>
          </div> */}
        </div>
      </section>
    </body>
  );
};

export default Therapy;