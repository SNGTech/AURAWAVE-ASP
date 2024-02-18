import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { getStorage, ref, uploadString } from 'firebase/storage';

import Sidebar from './Sidebar';
import loadingEEG from '../Video/waves.gif';

import '../Css/Recording.css';
import ThisIsMyTime from '../Audio/ThisIsMyTime.mp3';
import TThisIsMyTime from '../Images/ThisIsMyTime.jpg';
import Bleachers from '../Audio/Bleachers.mp3';
import TBleachers from '../Images/Bleachers.jpg';
import AllINeed from '../Audio/AllINeed.mp3';
import TAllINeed from '../Images/AllINeed.jpg';
import test_eeg_json_1 from '../TestData/test_1.json';
import test_eeg_json_2 from '../TestData/test_2.json';
import test_eeg_json_3 from '../TestData/test_3.json';

export const Recording = () => {

    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const totalSeconds = 15;

    const [pred_active_level, setActiveLevel] = useState("")
    const [music_name, setMusicName] = useState("");
    const [thumbnail_url, setThumbnailUrl] = useState("");

    const eeg_data = useLocation().state.eeg_data

    function convertToTitleCase(str) {
        if (!str) {
            return ""
        }
        return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    }

    // Load music list
    useEffect(() => {
        fetch("/get_music_list").then(
            res => res.json()
        ).then(data => {
            console.log(data)
        });
    }, []);

    // Record
    function getRecording() {
        alert("Obtained data. Starting prediction...")
        // var eeg_payload = JSON.parse(eeg_data)
        // eeg_payload['duration'] = totalSeconds;

        // const abortController = new window.AbortController();
        // const signal = abortController.signal;

        fetch('/record_session_live', {
            // signal: signal,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                duration: totalSeconds
            })
        }).then(
            res => res.json()
        ).then(data => {
            console.log(data);
            startPrediction(data);
        });

        // return () => {
        //     if (signal && abortController.abort) {
        //         abortController.abort();
        //     }
        // };
    }

    function startPrediction(recorded_data) {
        fetch('/predict', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(recorded_data)
        }).then(
            res => res.json()
        ).then(data => {
            setActiveLevel(data['active_level'])
            setMusicName(data['music_name']);
            setThumbnailUrl(data['thumbnail_url']);

            const storage = getStorage();
            const jsonRef = ref(storage, 'json/data.json'); // Adjust the path as needed
            const jsonData = JSON.stringify(data);

            uploadString(jsonRef, jsonData, 'raw').then(() => {
                console.log('JSON file uploaded successfully!');
            }).catch((error) => {
                console.error('Error uploading JSON file:', error);
            });
        });
    }

    // useEffect(() => {
    //     const value = window.localStorage.getItem('prediction');
    //     const valueParse = JSON.parse(value) ? JSON.parse(value) : 0;
    //     setActiveLevel(valueParse['active_level'])
    //     setMusicName(valueParse['music_name']);
    //     setThumbnailUrl(valueParse['thumbnail_url']);
    // }, []);

    // useEffect(() => {
    //     window.localStorage.setItem('prediction', JSON.stringify({
    //         active_level: pred_active_level,
    //         music_name: music_name,
    //         thumbnail_url: thumbnail_url
    //     })
    //     );
    // }, [pred_active_level, music_name, thumbnail_url]);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       if (secondsElapsed < totalSeconds) {
    //         setSecondsElapsed(prevSecondsElapsed => Math.min(prevSecondsElapsed + 1, totalSeconds));
    //       } else {
    //         // When timer finishes, start prediction
    //         console.log("Starting Prediction");
    //         startPrediction();
    //         clearInterval(intervalId);
    //       }
    //     }, 1000);

    //     return () => {
    //         // When timer finishes, start prediction
    //         clearInterval(intervalId);
    //     }
    //   }, []);

    const [counter, setCounter] = useState(0);
    const [recordFlag, setRecordFlag] = useState(0);

    useEffect(() => {
        if (counter <= totalSeconds) {
            setTimeout(() => setCounter(counter + 1), 1000);
        } else {
            if (recordFlag == 0) {
                getRecording();
                setRecordFlag(1);
                setCounter(counter + 1);
            }
        }
    }, [counter]);

    const formattedTime = `${Math.floor(counter / 60)}:${(counter % 60).toString().padStart(2, '0')}`;

    return (
        <body className='body-recording'>
            <Sidebar />
            <main className='section-grow'>
                <section>
                    {parseInt(counter) > (parseInt(totalSeconds) + 1) ? (
                        <div id='result-content' style={{ display: 'block' }}>
                            <h2>Results</h2>
                            <h3>Active Level: {convertToTitleCase(pred_active_level)}</h3>
                            <div className='cards-layout'>
                                <div className='background-card'>
                                    <div className='music-card'>
                                        <div className="thumbnail-card">
                                            <img src={`http://localhost:5000/static/sample_music/${pred_active_level}/thumbnails/${thumbnail_url}`} alt='' className="thumbnail" />
                                            <audio id={`audio`} src={`http://localhost:5000/static/sample_music/${pred_active_level}/${music_name}.mp3`} controls />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='background-card'>
                                    <div className='music-card'>
                                        <div className="thumbnail-card">
                                            <img src={TThisIsMyTime} alt='' className="thumbnail" />
                                            <audio src={ThisIsMyTime} controls />
                                        </div>
                                    </div>
                                </div>
                                <div className='background-card'>
                                    <div className='music-card'>
                                        <div className="thumbnail-card">
                                            <img src={TBleachers} alt='' className="thumbnail" />
                                            <audio src={Bleachers} controls />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    ) : (
                        <div className='centered-content'>
                            <h2 className='animated-ellipsis'>Recording Started</h2>
                            <h3>Time Elapsed:</h3>
                            <h3>{formattedTime} / 0:{totalSeconds}</h3>
                            <div className='eeg-recording-grid'>
                                <iframe className='single-graph' src="http://localhost:3001/d-solo/f31f404e-589d-4343-b0df-d6c0888e9de1/eeg-data-viz?orgId=1&from=now-5s&to=now&refresh=250ms&theme=light&panelId=1" frameborder="0"></iframe>
                                {/*<iframe src="http://localhost:3001/d-solo/f31f404e-589d-4343-b0df-d6c0888e9de1/eeg-data-viz?orgId=1&from=now-10s&to=now&refresh=250ms&theme=light&panelId=2" frameborder="0"></iframe>
                                <iframe src="http://localhost:3001/d-solo/f31f404e-589d-4343-b0df-d6c0888e9de1/eeg-data-viz?orgId=1&from=now-10s&to=now&refresh=250ms&theme=light&panelId=3" frameborder="0"></iframe>
                                <iframe src="http://localhost:3001/d-solo/f31f404e-589d-4343-b0df-d6c0888e9de1/eeg-data-viz?orgId=1&from=now-10s&to=now&refresh=250ms&theme=light&panelId=4" frameborder="0"></iframe>
                                <iframe src="http://localhost:3001/d-solo/f31f404e-589d-4343-b0df-d6c0888e9de1/eeg-data-viz?orgId=1&from=now-10s&to=now&refresh=250ms&theme=light&panelId=5" frameborder="0"></iframe>
                    */}
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </body>
    );
};

export default Recording;