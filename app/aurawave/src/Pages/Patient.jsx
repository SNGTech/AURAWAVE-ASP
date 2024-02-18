import React, { useState, useEffect } from 'react';

import StaffSidebar from './StaffSidebar';

import '../Css/Patient.css';
import heatmap from '../Images/heatmap.jpg';
import brainmap from '../Images/brainmap.png';

export const Patient = () => {

    const [currentTime, setCurrentTime] = useState(23);
    const totalTime = 30;
    const resetTime = 30;
    const [shouldIncrement, setShouldIncrement] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentTime < totalTime && shouldIncrement) {
                setCurrentTime(prevTime => prevTime + 1);
            } else if (currentTime === resetTime) {
                setCurrentTime(23);
                setShouldIncrement(true);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentTime, shouldIncrement, resetTime]);

    const formattedTime = `0:${currentTime.toString().padStart(2, '0')}/0:${totalTime.toString().padStart(2, '0')}`;

    return (
        <body className='body-patient'>
            <StaffSidebar />
            <div className='patient-main'>
                <div className='center-text'>
                    <h1>Patient's 1st Session</h1>
                </div>
                <hr />
                <span>Playback duration: {formattedTime}</span>
                <div className='patient-padding'>
                    <div className='patient-cards'>
                        <div className='image-center' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={brainmap} alt="" style={{ maxWidth: "460px", maxHeight: "460px" }}></img>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h3>Waves Data (uV)</h3>
                            <hr />
                            <span>Gamma, 32-100Hz</span>
                            <br/>
                            <span>Beta, 13-32Hz</span>
                            <br/>
                            <span>Alpha, 8-13Hz</span>
                            <br/>
                            <span>Theta, 4-8Hz</span>
                            <br/>
                            <span>Delta, 0.5-4Hz</span>
                        </div>
                    </div>
                    <div className='patient-cards'>
                        <div className='image-center' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={heatmap} alt="" style={{ Width: "460px", maxHeight: "460px" }}></img>
                        </div>
                        <div>
                            <h3>Recording Information</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut. Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};
export default Patient;