import React, { useState, useEffect } from 'react';

import StaffSidebar from './StaffSidebar';

import '../Css/Doctor.css';
import eegVideo from '../Video/Brainwave.gif';

export const Doctor = () => {
    
    return (
        <body className='body-doctor'>
            <StaffSidebar />
            <div className='doctor-main'>
                <div className='center-text'>
                <h1>Music Therapy Replay (Doctor's View)</h1>
                </div>
                <hr />
                <div className='doctor-container'>
                    <div className='doctor-desc'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.
                            Sed bibendum auctor neque, ut ullamcorper elit vestibulum ut.
                            Maecenas varius laoreet lacus velit, eget blandit lectus tincidunt.</p>
                    </div>
                    {/* <div className='doctor-eeg-grid'>
                        <div className='doctor-eeg-graph'>
                            <iframe className='large' src="http://localhost:3000/d-solo/b9412fb1-b097-45ce-969e-08f40c47270b/new-dashboard?orgId=1&from=now-10s&to=now&refresh=250ms&theme=light&panelId=1" frameBorder="0"></iframe>
                        </div>
                        <iframe className='small' src="http://localhost:3000/d-solo/b9412fb1-b097-45ce-969e-08f40c47270b/new-dashboard?orgId=1&from=now-10s&to=now&refresh=250ms&theme=light&panelId=2" frameBorder="0"></iframe>
                        <iframe className='small' src="http://localhost:3000/d-solo/b9412fb1-b097-45ce-969e-08f40c47270b/new-dashboard?orgId=1&from=now-10s&to=now&refresh=250ms&theme=light&panelId=3" frameBorder="0"></iframe>
                        <iframe className='small' src="http://localhost:3000/d-solo/b9412fb1-b097-45ce-969e-08f40c47270b/new-dashboard?orgId=1&from=now-10s&to=now&refresh=250ms&theme=light&panelId=4" frameBorder="0"></iframe>
                        <iframe className='small' src="http://localhost:3000/d-solo/b9412fb1-b097-45ce-969e-08f40c47270b/new-dashboard?orgId=1&from=now-10s&to=now&refresh=250ms&theme=light&panelId=5" frameBorder="0"></iframe>
                        <iframe className='small' src="http://localhost:3000/d-solo/b9412fb1-b097-45ce-969e-08f40c47270b/new-dashboard?orgId=1&from=now-10s&to=now&refresh=250ms&theme=light&panelId=6" frameBorder="0"></iframe>
                    </div>

                    <div className='doctor-music-waveform graph'>
                        
                    </div> */}
                    <div className='doctor-eeg-video'>
                        <img src={ eegVideo } alt="Doctor EEG Video" className='filler' />
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Doctor;